import { Projects } from "../Projects/projectData";
const ProjectCard: React.FC<{ project: Projects }> = ({ project }) => {
  const { id, image, name, url } = project;
  return (
    <div
      key={id}
      className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
      data-te-ripple-init
      data-te-ripple-color="dark"
      style={{ width: "100%", height: "90%" }}
    >
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <a href={url}>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
          <div className="flex h-full items-end justify-start">
            <h5 className="m-6 text-lg font-bold text-white">{name}</h5>
          </div>
        </div>
        <div>
          <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
        </div>
      </a>
    </div>
  );
};
export default ProjectCard;
