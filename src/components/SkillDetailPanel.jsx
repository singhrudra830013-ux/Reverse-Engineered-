import { getSkillDetails } from '../utils/skillDetails';
import './SkillDetailPanel.css';

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

const STATUS_CYCLE = ['not-started', 'in-progress', 'known'];

/**
 * SkillDetailPanel
 *
 * A slide-in side panel that shows detailed information about a selected skill.
 *
 * Props:
 *   nodeId   {string|null}   — ID of the selected node; null means panel is hidden
 *   status   {string}        — current status of the selected skill
 *   onCycle  {function}      — called with (nodeId) to cycle its status
 *   onClose  {function}      — called when the panel should close
 */
function SkillDetailPanel({ nodeId, status, onCycle, onClose }) {
  if (!nodeId) return null;

  const details = getSkillDetails(nodeId);

  // If no details found (shouldn't happen, but defensive)
  const label = details?.label ?? nodeId;

  const handleCycle = () => {
    if (onCycle) onCycle(nodeId);
  };

  const nextStatus = STATUS_CYCLE[(STATUS_CYCLE.indexOf(status) + 1) % STATUS_CYCLE.length];

  return (
    <>
      {/* Backdrop — clicking it closes the panel */}
      <div
        className="sdp-backdrop"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside className="sdp" aria-label={`Skill details: ${label}`}>
        {/* Header */}
        <div className="sdp__header">
          <div>
            <div className="sdp__header-label">Skill Details</div>
            <h2 className="sdp__title">{label}</h2>
          </div>
          <button
            type="button"
            className="sdp__close"
            onClick={onClose}
            aria-label="Close skill details"
          >
            ✕
          </button>
        </div>

        {/* Status badge + action button */}
        <div className="sdp__status-row">
          <span className={`sdp__badge sdp__badge--${status}`}>
            {STATUS_LABELS[status]}
          </span>
          <button
            type="button"
            className={`sdp__cycle-btn sdp__cycle-btn--${status}`}
            onClick={handleCycle}
            aria-label={`${STATUS_BUTTON_TEXT[status]} for ${label}`}
          >
            {STATUS_BUTTON_TEXT[status]} →
          </button>
        </div>

        {/* Body — scrollable */}
        <div className="sdp__body">
          {details ? (
            <>
              {/* What is this skill */}
              <section className="sdp__section">
                <h3 className="sdp__section-title">📖 What is it?</h3>
                <p className="sdp__text">{details.explanation}</p>
              </section>

              {/* Why it matters */}
              <section className="sdp__section">
                <h3 className="sdp__section-title">🎯 Why it matters</h3>
                <p className="sdp__text">{details.whyMatters}</p>
              </section>

              {/* Prerequisites */}
              {details.prereqNames.length > 0 && (
                <section className="sdp__section">
                  <h3 className="sdp__section-title">🔗 Prerequisites</h3>
                  <ul className="sdp__list">
                    {details.prereqNames.map((p) => (
                      <li key={p} className="sdp__list-item sdp__list-item--prereq">
                        {p}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Learning sequence */}
              <section className="sdp__section">
                <h3 className="sdp__section-title">🗺️ Learning Sequence</h3>
                <ol className="sdp__list sdp__list--ordered">
                  {details.sequence.map((step, i) => (
                    <li key={i} className="sdp__list-item">
                      {step}
                    </li>
                  ))}
                </ol>
              </section>

              {/* Mini project */}
              <section className="sdp__section sdp__section--project">
                <h3 className="sdp__section-title">🛠️ Practical Project</h3>
                <p className="sdp__text">{details.miniProject}</p>
              </section>

              {/* Resources */}
              {details.resources.length > 0 && (
                <section className="sdp__section">
                  <h3 className="sdp__section-title">📚 Free Resources</h3>
                  <ul className="sdp__resource-list">
                    {details.resources.map((r) => (
                      <li key={r.url} className="sdp__resource-item">
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sdp__resource-link"
                        >
                          {r.title}
                          <span aria-hidden="true"> ↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </>
          ) : (
            <p className="sdp__text sdp__text--muted">
              Detailed information for this skill is not yet available.
            </p>
          )}
        </div>
      </aside>
    </>
  );
}

export default SkillDetailPanel;
