import game from "../../assets/projects/2048.png";
import punk from "../../assets/projects/punk.png";

type Projects = {
  id: number;
  name: string;
  image: string;
  description: string;
  url: string;
};

const projectsData: Projects[] = [
  {
    id: 1,
    name: "2048 Clone",
    image: game,
    description: "A clone of the popular 2048 game.",
    url: "https://athishthayalan.github.io/2048/",
  },
  {
    id: 2,
    name: "PUNK API",
    image: punk,
    description: "An application utilizing the PUNK API.",
    url: "https://athishthayalan.github.io/punkapi/",
  },
  {
    id: 3,
    name: "Random Project 1",
    image: "",
    description: "This is a random project with a random image.",
    url: "https://example.com/random-project-1",
  },
  {
    id: 4,
    name: "Random Project 2",
    image: "",
    description: "This is another random project with a random image.",
    url: "https://example.com/random-project-2",
  },
  {
    id: 5,
    name: "Random Project 3",
    image: "",
    description: "Yet another random project with a random image.",
    url: "https://example.com/random-project-3",
  },
];

export default projectsData;
