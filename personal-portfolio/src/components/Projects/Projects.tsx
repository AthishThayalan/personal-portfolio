import projectsData from "./projectData";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="container my-24 mx-auto md:px-6 h-auto bg" id="projects">
      <section className="mb-32 ">
        <h2 className="mb-12 text-white text-center text-3xl font-bold">
          Welcome to my
          <u className="text-gray-200 dark:text-primary-400"> Projects!</u>
        </h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {projectsData.map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
