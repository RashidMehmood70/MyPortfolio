import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import HeroSection from "./components/herosection/HeroSection";
import NavBar from "./components/navbar/NavBar";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/scroll/ScrollToTop"; // New component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="section-wrapper">
                  <HeroSection />
                </div>
                <div className="section-wrapper">
                  <About />
                </div>
                <div className="section-wrapper">
                  <Skills />
                </div>
                <div className="section-wrapper">
                  <Projects />
                </div>

              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <h2 style={{ textAlign: "center", marginTop: "60px" }}>
                404 - Page Not Found
              </h2>
            }
          />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
