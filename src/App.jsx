import { useState } from 'react';
import HomePage from './pages/HomePage';
import RoadmapPage from './pages/RoadmapPage';

/**
 * App — root component.
 *
 * Manages which view is currently shown:
 *   - 'home'    → the landing page
 *   - 'roadmap' → the interactive skill roadmap
 *
 * This is a simple view-switch using state. A full router will be
 * added in a future step if multi-page navigation is needed.
 */
function App() {
  // Which view to show: 'home' | 'roadmap'
  const [view, setView] = useState('home');

  // The career the user entered; shared between views
  const [selectedCareer, setSelectedCareer] = useState('');

  /** Called by Hero when the user submits a valid career title */
  const handleGenerate = (career) => {
    setSelectedCareer(career);
    setView('roadmap');
    // Scroll to top when navigating to the roadmap
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  /** Called by RoadmapPage when the user clicks "Back to Home" */
  const handleBack = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (view === 'roadmap') {
    return (
      <RoadmapPage
        career={selectedCareer}
        onBack={handleBack}
      />
    );
  }

  return (
    <HomePage onGenerate={handleGenerate} />
  );
}

export default App;
