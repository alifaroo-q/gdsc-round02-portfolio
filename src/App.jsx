import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import ServicesExperience from "./components/ServicesExperience/ServicesExperience";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ServicesExperience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
