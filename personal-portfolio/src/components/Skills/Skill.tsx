import { useState } from "react";

const skillsList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
];

const Skills = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSkills = () => {
    const newIndex = startIndex + 3;
    setStartIndex(newIndex >= skillsList.length ? 0 : newIndex);
  };

  const prevSkills = () => {
    const newIndex = startIndex - 3;
    setStartIndex(newIndex < 0 ? skillsList.length - 3 : newIndex);
  };

  return (
    <div className="bg-gradient-to-r from-black to-purple-900 text-white p-8 rounded-lg shadow-lg">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Tech Skills</h2>
        <div className="flex items-center justify-between w-full max-w-xs overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${startIndex * 70}px)` }}
          >
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full shadow-md mx-2 relative"
              >
                <p className="text-lg font-semibold text-black absolute inset-0 flex items-center justify-center">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between w-32">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={prevSkills}
          >
            Prev
          </button>
          <button
            className="text-gray-700 focus:outline-none"
            onClick={nextSkills}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skills;
