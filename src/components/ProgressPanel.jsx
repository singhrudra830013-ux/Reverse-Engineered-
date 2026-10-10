import './ProgressPanel.css';

/**
 * ProgressPanel
 *
 * Displays a live progress summary for the current roadmap.
 * All values are derived from the actual skill statuses — nothing is hardcoded.
 *
 * Props:
 *   total      {number} — total number of skills in this roadmap
 *   known      {number} — skills marked "Already Known"
 *   inProgress {number} — skills marked "In Progress"
 *   notStarted {number} — skills not yet started
 *
 * The completion percentage is:
 *   Math.round((known / total) * 100)
 * A skill counts as "complete" only when it is marked Already Known.
 * Division-by-zero is avoided: if total === 0, percentage shows 0.
 */
function ProgressPanel({ total, known, inProgress, notStarted }) {
  // Guard against an empty roadmap (total === 0 → avoid ÷ 0)
  const pct = total > 0 ? Math.round((known / total) * 100) : 0;

  // Pick a motivational label based on progress
  const label =
    pct === 100 ? '🎉 Roadmap complete!'
    : pct >= 75  ? '🚀 Almost there!'
    : pct >= 50  ? '💪 Halfway through!'
    : pct >= 25  ? '📈 Good progress!'
    : known > 0  ? '✨ Great start!'
    :              '👇 Click a node button to start tracking';

  return (
    <div className="progress-panel" aria-label="Skill progress summary">
      {/* ── Header row ── */}
      <div className="progress-panel__header">
        <span className="progress-panel__title">Your Progress</span>
        <span className="progress-panel__pct" aria-live="polite">
          {pct}% complete
        </span>
      </div>

      {/* ── Progress bar ── */}
      <div
        className="progress-panel__bar-track"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${pct}% of skills completed`}
      >
        <div
          className="progress-panel__bar-fill"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* ── Motivational label ── */}
      <p className="progress-panel__label" aria-live="polite">{label}</p>

      {/* ── Stat cards ── */}
      <div className="progress-panel__stats">
        <div className="progress-panel__stat progress-panel__stat--total">
          <span className="progress-panel__stat-value">{total}</span>
          <span className="progress-panel__stat-name">Total Skills</span>
        </div>
        <div className="progress-panel__stat progress-panel__stat--known">
          <span className="progress-panel__stat-value">{known}</span>
          <span className="progress-panel__stat-name">Already Known</span>
        </div>
        <div className="progress-panel__stat progress-panel__stat--in-progress">
          <span className="progress-panel__stat-value">{inProgress}</span>
          <span className="progress-panel__stat-name">In Progress</span>
        </div>
        <div className="progress-panel__stat progress-panel__stat--not-started">
          <span className="progress-panel__stat-value">{notStarted}</span>
          <span className="progress-panel__stat-name">Not Started</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressPanel;
