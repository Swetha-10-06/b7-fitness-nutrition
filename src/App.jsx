import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import Programs from "./components/Programs";
import Results from "./components/Results";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <Services />

      <About />

      <Programs />

      <Results />

      <Education />

      {/* Certifications */}
      <Certification />

      {/* Contact */}
      <Contact />

      <Footer />
    </>
  );
}

export default App;