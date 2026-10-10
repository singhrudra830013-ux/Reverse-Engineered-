import './Benefits.css';

/**
 * Benefits data.
 * Each entry has an icon, title, and short description.
 */
const BENEFITS = [
  {
    id: 'direction',
    icon: '🧭',
    title: 'Clear Learning Direction',
    description:
      'No more guessing what to study next. Get a structured, goal-oriented path that leads directly to your target career.',
  },
  {
    id: 'dependencies',
    icon: '🔗',
    title: 'Skill Dependency Awareness',
    description:
      'Understand which skills build on others so you always learn in the right order and never skip a critical foundation.',
  },
  {
    id: 'progress',
    icon: '📊',
    title: 'Progress Tracking',
    description:
      'Mark skills as learned, see how far you\'ve come, and stay motivated as your roadmap fills in over time.',
  },
  {
    id: 'beginner',
    icon: '🌱',
    title: 'Beginner-Friendly Experience',
    description:
      'Designed for students and self-learners. No jargon, no assumptions — just a clear map from where you are to where you want to be.',
  },
];

/**
 * Benefits section
 * Displays four benefit cards in a 2-column grid.
 */
function Benefits() {
  return (
    <section id="about" className="benefits">
      <div className="container">
        {/* Section header */}
        <div className="benefits__header">
          <span className="benefits__label">Why Use It</span>
          <h2 className="benefits__heading">Built for Students, by Design</h2>
          <p className="benefits__subtext">
            Everything you need to move from confusion to clarity on your career journey.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="benefits__grid" role="list">
          {BENEFITS.map((benefit) => (
            <article key={benefit.id} className="benefit-card" role="listitem">
              {/* Icon badge */}
              <div className="benefit-card__icon-wrap" aria-hidden="true">
                {benefit.icon}
              </div>

              <div className="benefit-card__body">
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__desc">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
