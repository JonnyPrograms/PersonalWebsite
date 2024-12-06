import react from "react";
import Header from "./components/Header"

function App() {
  return (
    <div>
      <Header />
          <main>
                <section id="about">
                    <h1>About Me</h1>
                </section>
                <section id="projects">
                    <h1>My Projects</h1>
                </section>
                <section id="skills">
                    <h1>Skills</h1>
                </section>
                <section id="contact">
                    <h1>Contact</h1>
                </section>
            </main>
    </div>
  );
}

export default App;
