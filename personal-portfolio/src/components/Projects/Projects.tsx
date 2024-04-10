import game from "../../assets/projects/2048.png";
import punk from "../../assets/projects/punk.png";
const Projects = () => {
  return (
    <div className="container my-24 mx-auto md:px-6 h-auto bg ">
      <section className="mb-32">
        <h2 className="mb-12 text-white text-center text-3xl font-bold">
          Welcome to my
          <u className="text-gray-200 dark:text-primary-400"> Projects!</u>
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="dark"
          >
            <img
              src={game}
              alt="Project 1"
              className="w-full align-middle transition duration-300 ease-linear"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                <div className="flex h-full items-end justify-start">
                  <h5 className="m-6 text-lg font-bold text-white">
                    2048 Clone
                  </h5>
                </div>
              </div>
              <div>
                <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
              </div>
            </a>
          </div>
          <div className="zoom relative overflow-hidden rounded-lg shadow-lg dark:shadow-black/20 bg-[50%]">
            <img
              src={punk}
              alt="Project 2"
              className="w-full h-full object-cover transition duration-300 ease-linear"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                <div className="flex h-full items-end justify-start">
                  <h5 className="m-6 text-lg font-bold text-white">PUNK API</h5>
                </div>
              </div>
              <div>
                <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
              </div>
            </a>
          </div>
          {/* Project 2 */}
          <div
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="dark"
          >
            <img
              src={game}
              alt="Project 2"
              className="w-full align-middle transition duration-300 ease-linear"
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                <div className="flex h-full items-end justify-start">
                  <h5 className="m-6 text-lg font-bold text-white">
                    Genius Loci
                  </h5>
                </div>
              </div>
              <div>
                <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
              </div>
            </a>
          </div>
          {/* Add more projects here */}
        </div>
      </section>
    </div>
  );
};

export default Projects;
