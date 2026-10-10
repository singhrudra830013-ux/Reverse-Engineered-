import { useState, useCallback, useMemo, useEffect } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  MarkerType,
} from '@xyflow/react';

// Required React Flow stylesheet — must be imported for nodes/edges to render
import '@xyflow/react/dist/style.css';

import SkillNode, { STATUS_CYCLE, STATUS_LABELS } from '../components/SkillNode';
import ProgressPanel from '../components/ProgressPanel';
import { getRoadmapForCareer, buildInitialStatus } from '../utils/roadmapData';
import { loadProgress, saveProgress, mergeProgress } from '../utils/storage';
import './RoadmapPage.css';

/**
 * Custom node types — defined OUTSIDE the component so React Flow does not
 * re-register them on every render (which would cause flickering/loss of nodes).
 */
const NODE_TYPES = { skillNode: SkillNode };

/**
 * Default edge style: grey arrow pointing from prerequisite → dependent skill.
 */
const DEFAULT_EDGE_OPTIONS = {
  markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' },
  style: { strokeWidth: 2, stroke: '#94a3b8' },
};

/* ─────────────────────────────────────────────────────────────────────────────
   RoadmapPage — outer shell
   Checks whether a sample roadmap exists for the given career and either shows
   the graph or an honest "not available yet" message.
───────────────────────────────────────────────────────────────────────────── */
function RoadmapPage({ career, onBack }) {
  const roadmapTemplate = getRoadmapForCareer(career);

  if (!roadmapTemplate) {
    return (
      <div className="roadmap-page">
        <div className="roadmap-topbar">
          <button
            type="button"
            className="roadmap-topbar__back"
            onClick={onBack}
            aria-label="Back to homepage"
          >
            ← Back to Home
          </button>
          <h1 className="roadmap-topbar__title">
            Roadmap for{' '}
            <span className="roadmap-topbar__career">"{career}"</span>
          </h1>
        </div>

        <div className="roadmap-unavailable">
          <div className="roadmap-unavailable__icon" aria-hidden="true">🗺️</div>
          <h2 className="roadmap-unavailable__heading">
            No Sample Roadmap Yet for "{career}"
          </h2>
          <p className="roadmap-unavailable__text">
            We don't have a sample template for this career yet. Sample roadmaps
            are added step by step — this is not an AI-generated or live service.
          </p>
          <p className="roadmap-unavailable__careers">
            Currently available sample roadmap:{' '}
            <strong>Software Engineer</strong>
          </p>
          <button
            type="button"
            className="roadmap-unavailable__btn"
            onClick={onBack}
          >
            ← Try a Different Career
          </button>
        </div>
      </div>
    );
  }

  return (
    <RoadmapGraph
      career={career}
      template={roadmapTemplate}
      onBack={onBack}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   RoadmapGraph — rendered only when we have confirmed template data.
   Separated into its own component so hooks only run when there is a roadmap.
───────────────────────────────────────────────────────────────────────────── */
function RoadmapGraph({ career, template, onBack }) {
  /**
   * skillStatus: { nodeId → 'not-started' | 'in-progress' | 'known' }
   *
   * Initialised by merging:
   *   1. Fresh defaults (all 'not-started') built from the current node list.
   *   2. Any valid saved progress loaded from localStorage for this career.
   * Merging ensures new nodes added to a roadmap in the future always get a
   * valid initial status even if the user has old saved data.
   *
   * loadProgress() returns null if nothing is saved yet, data is corrupt,
   * or localStorage is unavailable — mergeProgress() handles null safely.
   */
  const [skillStatus, setSkillStatus] = useState(() =>
    mergeProgress(
      buildInitialStatus(template.nodes),
      loadProgress(career)
    )
  );

  /**
   * Cycle a skill to the next status.
   * useCallback keeps the reference stable so React Flow nodes don't
   * needlessly re-render when other state changes.
   */
  const handleCycleStatus = useCallback((nodeId) => {
    setSkillStatus((prev) => {
      const currentIndex = STATUS_CYCLE.indexOf(prev[nodeId]);
      const next = STATUS_CYCLE[(currentIndex + 1) % STATUS_CYCLE.length];
      return { ...prev, [nodeId]: next };
    });
  }, []);

  /**
   * Persist the current skillStatus to localStorage whenever it changes.
   * Each career is stored under its own key so roadmaps never overwrite
   * each other. saveProgress() is silent on quota/access errors.
   */
  useEffect(() => {
    saveProgress(career, skillStatus);
  }, [career, skillStatus]);

  /**
   * Build the final nodes array for React Flow.
   * We inject the current status + cycle callback into each node's data object
   * so SkillNode can read them without needing its own state.
   *
   * We pass this DIRECTLY to <ReactFlow nodes={flowNodes}> (controlled mode)
   * rather than through useNodesState, because useNodesState only reads the
   * initial value and would freeze the nodes — making status buttons do nothing.
   */
  const flowNodes = useMemo(
    () =>
      template.nodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          status: skillStatus[node.id],
          onCycle: handleCycleStatus,
        },
      })),
    [template.nodes, skillStatus, handleCycleStatus]
  );

  // Progress stats — derived from skillStatus, update on every status change.
  // Percentage = Math.round((known / total) * 100).
  // A skill counts as complete only when marked "Already Known".
  // total === 0 is handled inside ProgressPanel to avoid division-by-zero.
  const stats = useMemo(() => {
    const counts = { 'not-started': 0, 'in-progress': 0, 'known': 0 };
    for (const s of Object.values(skillStatus)) counts[s]++;
    return counts;
  }, [skillStatus]);

  const total = template.nodes.length;

  return (
    /*
     * .roadmap-page uses display:flex + flex-direction:column + height:100vh.
     * This gives the page a concrete total height the browser can measure.
     * The graph wrapper (.roadmap-graph-wrap) takes all remaining space via
     * flex:1 and has position:relative so the inner .react-flow div can fill
     * it with position:absolute + inset:0 — which gives React Flow a concrete
     * pixel width AND height that it can measure with ResizeObserver.
     */
    <div className="roadmap-page">
      {/* Top bar */}
      <div className="roadmap-topbar">
        <button
          type="button"
          className="roadmap-topbar__back"
          onClick={onBack}
          aria-label="Back to homepage"
        >
          ← Back to Home
        </button>
        <h1 className="roadmap-topbar__title">
          Roadmap:{' '}
          <span className="roadmap-topbar__career">{career}</span>
        </h1>
      </div>

      {/* Info banner */}
      <div className="roadmap-banner" role="note">
        <span className="roadmap-banner__icon" aria-hidden="true">ℹ️</span>
        <span>
          <strong>Sample template</strong> — This is a curated example roadmap,
          not AI-generated or personalised. Arrows show suggested prerequisites,
          not absolute rules.
        </span>
      </div>

      {/* Progress panel — updates live as the user cycles skill statuses */}
      <ProgressPanel
        total={total}
        known={stats.known}
        inProgress={stats['in-progress']}
        notStarted={stats['not-started']}
      />

      {/*
        Graph wrapper — flex:1 means it fills all vertical space not taken by
        the bars above and legend below. position:relative is required so the
        inner ReactFlow container (position:absolute, inset:0) can inherit the
        measured dimensions. This is the pattern React Flow recommends for
        flex layouts: https://reactflow.dev/error#004
      */}
      <div className="roadmap-graph-wrap" aria-label="Interactive skill roadmap graph">
        <ReactFlow
          nodes={flowNodes}
          edges={template.edges}
          nodeTypes={NODE_TYPES}
          defaultEdgeOptions={DEFAULT_EDGE_OPTIONS}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.2}
          maxZoom={2.5}
          attributionPosition="bottom-right"
        >
          <Controls />
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1.5}
            color="#cbd5e1"
          />
        </ReactFlow>
      </div>

      {/* Legend */}
      <div className="roadmap-legend" aria-label="Status colour legend">
        <span className="roadmap-legend__label">Legend:</span>
        <div className="roadmap-legend__items">
          {['not-started', 'in-progress', 'known'].map((s) => (
            <div key={s} className="roadmap-legend__item">
              <span className={`roadmap-legend__swatch roadmap-legend__swatch--${s}`} aria-hidden="true" />
              {STATUS_LABELS[s]}
            </div>
          ))}
        </div>
        <span className="roadmap-legend__tip">
          Click a node button to change status. Progress is saved in your browser.
        </span>
      </div>
    </div>
  );
}

export default RoadmapPage;
