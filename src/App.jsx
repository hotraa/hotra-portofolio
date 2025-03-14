import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Volunteers from "./components/Volunteers";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            {/* <Volunteers /> */}
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
