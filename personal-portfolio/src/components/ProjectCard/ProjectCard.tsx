import { useState } from "react";
import { Projects } from "../Projects/projectData";
import githubIcon from "../../assets/icons/github.png";
import "./ProjectCard.css";

const ProjectCard: React.FC<{ project: Projects }> = ({ project }) => {
  const { id, image, name, url, description } = project;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      key={id}
      className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
      style={{ width: "100%", height: "90%" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <a href={url}>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
          {isHovered && (
            <div className="flex h-full items-end justify-start">
              <h5 className="m-6 text-lg font-bold text-white">{name}</h5>
              <p className="m-6 text-sm text-white">{description}</p>
            </div>
          )}
        </div>
        <div>
          <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
        </div>
      </a>
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 right-0 m-2 github-icon-container"
      >
        <img src={githubIcon} alt="GitHub" className="w-8 h-8 github-icon" />
      </a>
    </div>
  );
};

export default ProjectCard;
