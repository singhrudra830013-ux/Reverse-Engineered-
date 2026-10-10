import './Footer.css';

/**
 * Footer component
 * - Brand name and short project description.
 * - Two simple navigation columns (Product, Project).
 * - Copyright bar at the bottom.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {/* Brand column */}
          <div className="footer__brand">
            <a href="#home" className="footer__brand-logo">
              <span className="footer__brand-icon" aria-hidden="true">🗺️</span>
              Career Roadmapper
            </a>
            <p className="footer__brand-desc">
              Helping students turn their dream job into a clear, personalized
              skill roadmap — discover what to learn and in what order.
            </p>
          </div>

          {/* Navigation column — Product */}
          <div>
            <h3 className="footer__col-heading">Product</h3>
            <ul className="footer__nav" role="list">
              <li>
                <a href="#home" className="footer__nav-link">Home</a>
              </li>
              <li>
                <a href="#how-it-works" className="footer__nav-link">How It Works</a>
              </li>
              <li>
                <a href="#about" className="footer__nav-link">About</a>
              </li>
            </ul>
          </div>

          {/* Navigation column — Project */}
          <div>
            <h3 className="footer__col-heading">Project</h3>
            <ul className="footer__nav" role="list">
              <li>
                <a href="#home" className="footer__nav-link">Get Started</a>
              </li>
              <li>
                {/* README link — points to the repo README for now */}
                <a href="#" className="footer__nav-link">Documentation</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <p className="footer__bottom">
          © {currentYear} Career Roadmapper — Hackathon Project. Built with React + Vite.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
