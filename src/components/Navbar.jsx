import { useState } from 'react';
import './Navbar.css';

/**
 * Navbar component
 * - Sticky top bar with logo, nav links, and a Get Started CTA button.
 * - Collapses into a hamburger menu on mobile.
 * - Nav links scroll to sections on the homepage via anchor IDs.
 */
function Navbar() {
  // Controls whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar__inner container" aria-label="Main navigation">
        {/* Logo */}
        <a href="#" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-icon" aria-hidden="true">🗺️</span>
          Career Roadmapper
        </a>

        {/* Desktop nav links */}
        <ul className="navbar__links" role="list">
          <li>
            <a href="#home" className="navbar__link">Home</a>
          </li>
          <li>
            <a href="#how-it-works" className="navbar__link">How It Works</a>
          </li>
          <li>
            <a href="#about" className="navbar__link">About</a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a href="#home" className="navbar__cta">
          Get Started
        </a>

        {/* Mobile hamburger toggle */}
        <button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <a href="#home" className="navbar__mobile-link" onClick={closeMenu}>Home</a>
        <a href="#how-it-works" className="navbar__mobile-link" onClick={closeMenu}>How It Works</a>
        <a href="#about" className="navbar__mobile-link" onClick={closeMenu}>About</a>
        <a href="#home" className="navbar__mobile-cta" onClick={closeMenu}>Get Started</a>
      </div>
    </header>
  );
}

export default Navbar;
