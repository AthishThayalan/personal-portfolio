import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skill";
import bannerBG from "./assets/banner-bg.png";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="w-full font-poppins ">
      <Nav />
      <div
        className=" bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerBG})` }}
      >
        <Banner />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
