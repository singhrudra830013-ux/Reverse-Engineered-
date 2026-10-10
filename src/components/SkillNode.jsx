import { Handle, Position } from '@xyflow/react';
import './SkillNode.css';

/**
 * Status cycle order: not-started → in-progress → known → not-started
 */
const STATUS_CYCLE = ['not-started', 'in-progress', 'known'];

const STATUS_LABELS = {
  'not-started': 'Not Started',
  'in-progress': 'In Progress',
  'known': 'Already Known',
};

const STATUS_BUTTON_TEXT = {
  'not-started': 'Mark In Progress',
  'in-progress': 'Mark as Known',
  'known': 'Reset to Not Started',
};

/**
 * SkillNode — custom React Flow node component.
 *
 * Props (injected by React Flow via nodeTypes + data):
 *   data.label        — skill name
 *   data.status       — current status string
 *   data.onCycle      — callback(id) to advance the status
 *   id                — node id (injected by React Flow)
 */
function SkillNode({ id, data }) {
  const { label, status, onCycle } = data;

  const handleCycle = (e) => {
    // Stop the click from being treated as a node-drag in React Flow
    e.stopPropagation();
    if (onCycle) onCycle(id);
  };

  return (
    <div
      className={`skill-node skill-node--${status}`}
      role="article"
      aria-label={`${label} — ${STATUS_LABELS[status]}`}
    >
      {/* React Flow connection handle — top (target) */}
      <Handle type="target" position={Position.Top} />

      {/* Skill label */}
      <div className="skill-node__label">{label}</div>

      {/* Status badge */}
      <span className={`skill-node__badge skill-node__badge--${status}`}>
        {STATUS_LABELS[status]}
      </span>

      {/* Button to cycle to the next status */}
      <button
        type="button"
        className="skill-node__btn"
        onClick={handleCycle}
        aria-label={`${STATUS_BUTTON_TEXT[status]} for ${label}`}
      >
        {STATUS_BUTTON_TEXT[status]}
      </button>

      {/* React Flow connection handle — bottom (source) */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export { STATUS_CYCLE, STATUS_LABELS };
export default SkillNode;
