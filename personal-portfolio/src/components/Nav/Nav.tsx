import { useState } from "react";
import { Link } from "react-scroll";
import fourStar from "../../assets/fourStar.png";
import "./Nav.css";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex sticky top-0 z-50 items-center bg-gray-900 p-3 flex-wrap">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className="p-2 mr-4 inline-flex items-center hover:pointer"
      >
        <img src={fourStar} alt="" className="w-7 h-7 mr-2" />{" "}
        <span className="text-lg md:text-xl text-white font-bold uppercase tracking-wide">
          Athish's Portfolio
        </span>
      </Link>
      <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        onClick={toggleMenu}
      >
        <i className="material-icons">Menu</i>
      </button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto lg:block`}
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-sky-300 hover:pointer"
          >
            <span>Home</span>
          </Link>
          <Link
            to="about-me"
            spy={true}
            smooth={true}
            duration={500}
            offset={-40}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-sky-300 hover:pointer"
          >
            <span>About Me</span>
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-sky-300 hover:pointer"
          >
            <span>Skills</span>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-sky-300 hover:pointer"
          >
            <span>Projects</span>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-sky-300 hover:pointer"
          >
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
