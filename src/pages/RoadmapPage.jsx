import { useState, useCallback, useMemo, useEffect } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  MarkerType,
  useReactFlow,
  ReactFlowProvider,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import SkillNode, { STATUS_CYCLE, STATUS_LABELS } from '../components/SkillNode';
import ProgressPanel from '../components/ProgressPanel';
import SkillDetailPanel from '../components/SkillDetailPanel';
import { getRoadmapForCareer, buildInitialStatus, ROADMAP_DATA } from '../utils/roadmapData';
import { loadProgress, saveProgress, mergeProgress } from '../utils/storage';
import './RoadmapPage.css';

// Defined outside component so React Flow never re-registers on re-render
const NODE_TYPES = { skillNode: SkillNode };

const DEFAULT_EDGE_OPTIONS = {
  markerEnd: { type: MarkerType.ArrowClosed, color: '#94a3b8' },
  style: { strokeWidth: 2, stroke: '#94a3b8' },
};

// All supported careers in display form (for the switcher)
const ALL_CAREERS = Object.keys(ROADMAP_DATA).map(
  (key) => key.replace(/\b\w/g, (c) => c.toUpperCase())
);

/* ─────────────────────────────────────────────────────────────────────────────
   FitViewButton — sits inside the ReactFlow canvas and calls fitView()
───────────────────────────────────────────────────────────────────────────── */
function FitViewButton() {
  const { fitView } = useReactFlow();
  return (
    <button
      type="button"
      className="roadmap-fitview-btn"
      onClick={() => fitView({ padding: 0.2, duration: 400 })}
      title="Fit roadmap to screen"
      aria-label="Fit roadmap to screen"
    >
      ⊞ Fit
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   RoadmapPage — outer shell: handles career switching + "no roadmap" state
───────────────────────────────────────────────────────────────────────────── */
function RoadmapPage({ career: initialCareer, onBack }) {
  const [career, setCareer] = useState(initialCareer);
  const roadmapTemplate = getRoadmapForCareer(career);

  const handleCareerSwitch = (newCareer) => {
    setCareer(newCareer);
  };

  return (
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

        {/* Career switcher */}
        <div className="roadmap-switcher">
          <label htmlFor="career-switch" className="roadmap-switcher__label">
            Switch career:
          </label>
          <select
            id="career-switch"
            className="roadmap-switcher__select"
            value={career}
            onChange={(e) => handleCareerSwitch(e.target.value)}
            aria-label="Switch to a different career roadmap"
          >
            {ALL_CAREERS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Info banner */}
      <div className="roadmap-banner" role="note">
        <span className="roadmap-banner__icon" aria-hidden="true">ℹ️</span>
        <span>
          <strong>Sample template</strong> — Curated example roadmap, not AI-generated.
          Arrows show suggested prerequisites. Progress is saved in your browser.
        </span>
      </div>

      {roadmapTemplate ? (
        <ReactFlowProvider>
          <RoadmapGraph career={career} template={roadmapTemplate} />
        </ReactFlowProvider>
      ) : (
        <div className="roadmap-unavailable">
          <div className="roadmap-unavailable__icon" aria-hidden="true">🗺️</div>
          <h2 className="roadmap-unavailable__heading">
            No Sample Roadmap Yet for "{career}"
          </h2>
          <p className="roadmap-unavailable__text">
            This career doesn't have a sample template yet.
          </p>
          <p className="roadmap-unavailable__careers">
            Available: {ALL_CAREERS.join(', ')}
          </p>
          <button
            type="button"
            className="roadmap-unavailable__btn"
            onClick={onBack}
          >
            ← Try a Different Career
          </button>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   RoadmapGraph — the interactive graph + panels, only rendered when template exists
───────────────────────────────────────────────────────────────────────────── */
function RoadmapGraph({ career, template }) {
  // ── Skill status state (persisted to localStorage) ────────────────────
  const [skillStatus, setSkillStatus] = useState(() =>
    mergeProgress(buildInitialStatus(template.nodes), loadProgress(career))
  );

  // When career changes, reload saved progress for the new career
  useEffect(() => {
    setSkillStatus(
      mergeProgress(buildInitialStatus(template.nodes), loadProgress(career))
    );
  }, [career, template.nodes]);

  // Save to localStorage on every status change
  useEffect(() => {
    saveProgress(career, skillStatus);
  }, [career, skillStatus]);

  // ── Selected node (for detail panel) ──────────────────────────────────
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  // ── Reset confirmation state ───────────────────────────────────────────
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // ── Status cycling ────────────────────────────────────────────────────
  const handleCycleStatus = useCallback((nodeId) => {
    setSkillStatus((prev) => {
      const currentIndex = STATUS_CYCLE.indexOf(prev[nodeId]);
      const next = STATUS_CYCLE[(currentIndex + 1) % STATUS_CYCLE.length];
      return { ...prev, [nodeId]: next };
    });
  }, []);

  // ── Node selection ────────────────────────────────────────────────────
  const handleSelectNode = useCallback((nodeId) => {
    setSelectedNodeId((prev) => (prev === nodeId ? null : nodeId));
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedNodeId(null);
  }, []);

  // ── Reset progress ────────────────────────────────────────────────────
  const handleReset = () => {
    const fresh = buildInitialStatus(template.nodes);
    setSkillStatus(fresh);
    saveProgress(career, fresh);
    setShowResetConfirm(false);
    setSelectedNodeId(null);
  };

  // ── Build React Flow nodes (controlled mode) ──────────────────────────
  const flowNodes = useMemo(
    () =>
      template.nodes.map((node) => ({
        ...node,
        data: {
          ...node.data,
          status: skillStatus[node.id],
          selected: node.id === selectedNodeId,
          onCycle: handleCycleStatus,
          onSelect: handleSelectNode,
        },
      })),
    [template.nodes, skillStatus, selectedNodeId, handleCycleStatus, handleSelectNode]
  );

  // ── Progress stats ────────────────────────────────────────────────────
  const stats = useMemo(() => {
    const counts = { 'not-started': 0, 'in-progress': 0, 'known': 0 };
    for (const s of Object.values(skillStatus)) counts[s]++;
    return counts;
  }, [skillStatus]);

  const total = template.nodes.length;

  // ── Next recommended skill (first node whose prereqs are all Known) ───
  const nextSkill = useMemo(() => {
    // Build a map: nodeId → set of node IDs that point TO it (its prereqs)
    const prereqsOf = {};
    for (const node of template.nodes) prereqsOf[node.id] = [];
    for (const edge of template.edges) {
      if (prereqsOf[edge.target]) prereqsOf[edge.target].push(edge.source);
    }

    // Find first not-started node whose all prereqs are known
    for (const node of template.nodes) {
      if (skillStatus[node.id] !== 'not-started') continue;
      const allPrereqsDone = prereqsOf[node.id].every(
        (pid) => skillStatus[pid] === 'known'
      );
      if (allPrereqsDone) return node;
    }
    return null;
  }, [template.nodes, template.edges, skillStatus]);

  return (
    <div className="roadmap-content">
      {/* Progress panel */}
      <ProgressPanel
        total={total}
        known={stats.known}
        inProgress={stats['in-progress']}
        notStarted={stats['not-started']}
      />

      {/* Dashboard strip: next skill + reset */}
      <div className="roadmap-dashboard">
        <div className="roadmap-dashboard__next">
          {nextSkill ? (
            <>
              <span className="roadmap-dashboard__next-label">▶ Next to learn:</span>
              <button
                type="button"
                className="roadmap-dashboard__next-skill"
                onClick={() => handleSelectNode(nextSkill.id)}
                aria-label={`View details for ${nextSkill.data.label}`}
              >
                {nextSkill.data.label}
              </button>
            </>
          ) : stats.known === total ? (
            <span className="roadmap-dashboard__complete">🎉 Roadmap complete!</span>
          ) : (
            <span className="roadmap-dashboard__next-label">
              Mark prerequisites as Known to unlock the next skill.
            </span>
          )}
        </div>

        <div className="roadmap-dashboard__actions">
          {!showResetConfirm ? (
            <button
              type="button"
              className="roadmap-dashboard__reset-btn"
              onClick={() => setShowResetConfirm(true)}
              aria-label="Reset all progress for this roadmap"
            >
              ↺ Reset Progress
            </button>
          ) : (
            <div className="roadmap-dashboard__confirm">
              <span>Reset all progress?</span>
              <button
                type="button"
                className="roadmap-dashboard__confirm-yes"
                onClick={handleReset}
              >
                Yes, reset
              </button>
              <button
                type="button"
                className="roadmap-dashboard__confirm-no"
                onClick={() => setShowResetConfirm(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Graph */}
      <div className="roadmap-graph-wrap" aria-label="Interactive skill roadmap graph">
        <ReactFlow
          nodes={flowNodes}
          edges={template.edges}
          nodeTypes={NODE_TYPES}
          defaultEdgeOptions={DEFAULT_EDGE_OPTIONS}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.15}
          maxZoom={2.5}
          attributionPosition="bottom-right"
          onPaneClick={() => setSelectedNodeId(null)}
        >
          <Controls />
          <Background
            variant={BackgroundVariant.Dots}
            gap={20}
            size={1.5}
            color="#cbd5e1"
          />
          <FitViewButton />
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
          Click a card for details. Progress saved in your browser.
        </span>
      </div>

      {/* Skill detail panel (slide-in) */}
      <SkillDetailPanel
        nodeId={selectedNodeId}
        status={selectedNodeId ? skillStatus[selectedNodeId] : null}
        onCycle={handleCycleStatus}
        onClose={handleClosePanel}
      />
    </div>
  );
}

export default RoadmapPage;
