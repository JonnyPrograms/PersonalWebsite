import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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

          {/* Add other sections like Projects, Skills, etc. here */}
      </div>
  );
}

export default App;
