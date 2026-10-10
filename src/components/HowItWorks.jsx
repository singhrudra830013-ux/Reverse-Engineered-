import './HowItWorks.css';

/**
 * Data for the three steps.
 * Keeping it as a plain array makes it easy to update without touching JSX.
 */
const STEPS = [
  {
    id: 1,
    icon: '🎯',
    title: 'Choose Your Dream Career',
    description:
      'Type in the job title you want — whether it\'s Software Engineer, Data Scientist, or UX Designer. Be as specific as you like.',
  },
  {
    id: 2,
    icon: '🗺️',
    title: 'Discover the Skills You Need',
    description:
      'See a visual skill roadmap tailored to your goal. Understand which skills are essential and how they depend on each other.',
  },
  {
    id: 3,
    icon: '📈',
    title: 'Track Your Learning Progress',
    description:
      'Mark skills you already know, follow your progress, and find out exactly which skill to learn next on your path.',
  },
];

/**
 * HowItWorks section
 * Displays the three-step process in a visual card layout.
 */
function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        {/* Section header */}
        <div className="how-it-works__header">
          <span className="how-it-works__label">Simple Process</span>
          <h2 className="how-it-works__heading">How It Works</h2>
          <p className="how-it-works__subtext">
            Three steps from a vague career goal to a clear, actionable learning plan.
          </p>
        </div>

        {/* Steps */}
        <div className="how-it-works__steps" role="list">
          {STEPS.map((step) => (
            <article key={step.id} className="step-card" role="listitem">
              {/* Step number circle */}
              <div className="step-card__number" aria-label={`Step ${step.id}`}>
                {step.id}
              </div>

              {/* Icon */}
              <div className="step-card__icon" aria-hidden="true">
                {step.icon}
              </div>

              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__desc">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
