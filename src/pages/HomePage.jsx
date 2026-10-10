import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Footer from '../components/Footer';

/**
 * HomePage
 * Assembles all homepage sections in order:
 *   Navbar → Hero → How It Works → Benefits → Footer
 *
 * Props:
 *   onGenerate {function(career: string)} — called when the user submits a career
 */
function HomePage({ onGenerate }) {
  return (
    <>
      <Navbar />
      <main>
        <Hero onGenerate={onGenerate} />
        <HowItWorks />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
