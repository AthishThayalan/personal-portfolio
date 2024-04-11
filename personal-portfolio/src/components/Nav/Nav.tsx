import fourStar from "../../assets/fourStar.png";
function Nav() {
  return (
    <nav className="flex sticky top-0 z-50 items-center bg-gray-900 p-3 flex-wrap">
      <a href="#" className="p-2 mr-4 inline-flex items-center">
        <img src={fourStar} alt="" className="w-7 h-7 mr-2" />{" "}
        <span className="text-lg md:text-xl text-white font-bold uppercase tracking-wide">
          Athish's Portfolio
        </span>
      </a>
      <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <i className="material-icons">menu</i>
      </button>
      <div
        className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-sky-300"
          >
            <span>Home</span>
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-sky-300"
          >
            <span>Skills</span>
          </a>
          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-sky-300"
          >
            <span>Projects</span>
          </a>

          <a
            href="#"
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:text-sky-300"
          >
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Nav;