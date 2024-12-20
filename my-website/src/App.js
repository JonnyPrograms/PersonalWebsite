import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
      <div className="App">
          {/* Header Section */}
          <Header />

          {/* About Section */}
          <About />

          {/* Projects Section */}
          <Projects />

          {/* Skills Section */}
          <Skills />

          {/* Certifications Section */}
          <Certifications />

          {/* Footer Section */}
          <Footer />
      </div>
  );
}

export default App;
