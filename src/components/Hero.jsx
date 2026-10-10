import { useState } from 'react';
import './Hero.css';

/**
 * Example career chips shown below the input.
 * Clicking one fills the input field automatically.
 */
const EXAMPLE_CAREERS = [
  'Software Engineer',
  'Data Scientist',
  'AI/ML Engineer',
  'Web Developer',
  'UX Designer',
  'Product Manager',
];

/**
 * Hero section component
 * - Main heading, sub-text, career input, and Generate Roadmap button.
 * - Validates input: shows an error if the field is empty.
 * - Clicking an example chip fills the input.
 * - On valid submit, calls onGenerate(career) to navigate to the roadmap view.
 *
 * Props:
 *   onGenerate {function(career: string)} — called when the user submits a valid career
 */
function Hero({ onGenerate }) {
  const [career, setCareer] = useState('');
  const [errorMsg, setErrorMsg] = useState(''); // non-empty string = show error

  /** Fill the input when the user clicks a suggestion chip */
  const handleChipClick = (chipCareer) => {
    setCareer(chipCareer);
    setErrorMsg('');
  };

  /** Handle the Generate Roadmap button click */
  const handleGenerate = (e) => {
    e.preventDefault();

    const trimmed = career.trim();

    if (!trimmed) {
      setErrorMsg('Please enter a job title to generate your roadmap.');
      return;
    }

    // Clear any error and hand off to the parent (App) to switch views
    setErrorMsg('');
    onGenerate(trimmed);
  };

  /** Clear the error whenever the user edits the input */
  const handleInputChange = (e) => {
    setCareer(e.target.value);
    if (errorMsg) setErrorMsg('');
  };

  return (
    <section id="home" className="hero">
      <div className="hero__content container">
        {/* Badge */}
        <div className="hero__badge" aria-hidden="true">
          🎯 Your Personal Career Navigator
        </div>

        {/* Main heading */}
        <h1 className="hero__heading">
          Turn Your{' '}
          <span className="hero__heading-highlight">Dream Career</span>
          {' '}Into a Clear Roadmap.
        </h1>

        {/* Supporting text */}
        <p className="hero__subtext">
          Discover exactly which skills you need for your target career,
          understand how they connect, and plan what to learn next — step by step.
        </p>

        {/* Career input form */}
        <form className="hero__form" onSubmit={handleGenerate} noValidate>
          <div className="hero__input-wrapper">
            <span className="hero__input-icon" aria-hidden="true">🔍</span>
            <input
              id="career-input"
              type="text"
              className={`hero__input${errorMsg ? ' hero__input--error' : ''}`}
              placeholder="What job do you want to achieve?"
              value={career}
              onChange={handleInputChange}
              aria-label="Enter your target job title"
              aria-describedby={errorMsg ? 'career-error' : undefined}
              aria-invalid={!!errorMsg}
              autoComplete="off"
              maxLength={120}
            />
          </div>

          <button
            id="generate-btn"
            type="submit"
            className="hero__btn"
          >
            ✨ Generate Roadmap
          </button>
        </form>

        {/* Validation error message */}
        {errorMsg && (
          <p
            id="career-error"
            className="hero__message hero__message--error"
            role="alert"
          >
            {errorMsg}
          </p>
        )}

        {/* Example career suggestion chips */}
        <p className="hero__suggestions-label">Try an example:</p>
        <div className="hero__suggestions" role="list" aria-label="Example career suggestions">
          {EXAMPLE_CAREERS.map((c) => (
            <button
              key={c}
              type="button"
              className="hero__suggestion-chip"
              onClick={() => handleChipClick(c)}
              aria-label={`Use "${c}" as my target career`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
