import "./rainbow-hover.css";
const skillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Java",
  "Spring",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "SQL",
  "Python",
];

const Skills = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-bold text-gray-200  mb-10">
          Technical Skills
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {skillsList.map((skill, index) => (
            <div key={index} className="w-1/8 mb-4">
              <span className="flex items-center justify-center inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[1.5em] font-bold leading-none text-black dark:bg-slate-300 dark:text-primary-500 h-10 transition duration-300 ease-in-out   rainbow-hover slow-magnify">
                {" "}
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
