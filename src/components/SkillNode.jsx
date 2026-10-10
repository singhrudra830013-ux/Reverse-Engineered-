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
 *   data.label      — skill name
 *   data.status     — current status string
 *   data.selected   — boolean, true when this node is selected
 *   data.onCycle    — callback(id) to advance the status
 *   data.onSelect   — callback(id) to open the skill detail panel
 *   id              — node id (injected by React Flow)
 */
function SkillNode({ id, data }) {
  const { label, status, onCycle, onSelect, selected } = data;

  const handleCycle = (e) => {
    e.stopPropagation();
    if (onCycle) onCycle(id);
  };

  const handleSelect = (e) => {
    e.stopPropagation();
    if (onSelect) onSelect(id);
  };

  return (
    <div
      className={[
        'skill-node',
        `skill-node--${status}`,
        selected ? 'skill-node--selected' : '',
      ].filter(Boolean).join(' ')}
      role="article"
      aria-label={`${label} — ${STATUS_LABELS[status]}`}
      onClick={handleSelect}
      style={{ cursor: 'pointer' }}
    >
      {/* React Flow connection handle — top (target) */}
      <Handle type="target" position={Position.Top} />

      {/* Skill label */}
      <div className="skill-node__label">{label}</div>

      {/* Status badge */}
      <span className={`skill-node__badge skill-node__badge--${status}`}>
        {STATUS_LABELS[status]}
      </span>

      {/* Status cycle button */}
      <button
        type="button"
        className="skill-node__btn"
        onClick={handleCycle}
        aria-label={`${STATUS_BUTTON_TEXT[status]} for ${label}`}
      >
        {STATUS_BUTTON_TEXT[status]}
      </button>

      {/* Details hint */}
      <div className="skill-node__hint">Tap card for details</div>

      {/* React Flow connection handle — bottom (source) */}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export { STATUS_CYCLE, STATUS_LABELS };
export default SkillNode;
