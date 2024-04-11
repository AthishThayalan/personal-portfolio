import projectsData from "./projectData";

const Projects = () => {
  return (
    <div className="container my-24 mx-auto md:px-6 h-auto bg">
      <section className="mb-32">
        <h2 className="mb-12 text-white text-center text-3xl font-bold">
          Welcome to my
          <u className="text-gray-200 dark:text-primary-400"> Projects!</u>
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {projectsData.map((project) => {
            return (
              <div
                key={project.id}
                className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                data-te-ripple-init
                data-te-ripple-color="dark"
                style={{ width: "100%", height: "400px" }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <a href={project.url}>
                  <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                    <div className="flex h-full items-end justify-start">
                      <h5 className="m-6 text-lg font-bold text-white">
                        {project.name}
                      </h5>
                    </div>
                  </div>
                  <div>
                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
