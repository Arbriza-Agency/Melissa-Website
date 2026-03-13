import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Projects from "./pages/Projects";
import EducationResearch from "./pages/EducationResearch";
import AwardsCertifications from "./pages/AwardsCertifications";

function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-light-neutral text-dark-gray">
      <Navbar />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education-research" element={<EducationResearch />} />
            <Route path="/awards-certifications" element={<AwardsCertifications />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
