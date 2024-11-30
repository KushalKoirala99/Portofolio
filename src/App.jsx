import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div>
      {/* Navbar remains outside the scrollable container */}
      <Navbar />

      {/* Scrollable container for sections */}
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll ">
        {/* Each section must have `snap-start` */}
        <section id="home" className="h-screen snap-start">
          <Home />
        </section>
        <section id="about" className="h-screen snap-start">
          <About />
        </section>
        <section id="projects" className="h-screen snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
