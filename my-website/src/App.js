import react from "react";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
      <div className="App">
          {/* Header Section */}
          <Header />

          {/* About Section */}
          <About />

          {/* Other Sections */}
          {/* Add other sections like Projects, Skills, etc. here */}
      </div>
  );
}

export default App;
