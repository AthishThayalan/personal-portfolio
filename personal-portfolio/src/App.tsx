import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skill";
import bannerBG from "./assets/banner-bg.png";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div
      className="w-full font-poppins bg-cover bg-center "
      style={{ backgroundImage: `url(${bannerBG})` }}
    >
      <Nav />
      <div
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBG})` }}
      >
        <Banner />
        <Skills />
      </div>
      <div
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBG})` }}
      >
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
