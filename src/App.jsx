import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Impact from './components/Impact';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <AboutUs />
        <Impact />
        <Portfolio />
        <Testimonials />
        <Clients />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;