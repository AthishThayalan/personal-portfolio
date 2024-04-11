import game from "../../assets/projects/2048.png";
import punk from "../../assets/projects/punk.png";
import calculator from "../../assets/projects/calculator.png";
import yelpcamp from "../../assets/projects/yelpCamp.png";
import sortingAlgo from "../../assets/projects/sortingAlgo.png";

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
    name: "YelpCamp",
    image: yelpcamp,
    description: "This is a random project with a random image.",
    url: "https://yelpcamp-obn9.onrender.com/",
  },
  {
    id: 2,
    name: "2048 Clone",
    image: game,
    description: "A clone of the popular 2048 game.",
    url: "https://athishthayalan.github.io/2048/",
  },
  {
    id: 3,
    name: "Sorting Algorithm Visualiser",
    image: sortingAlgo,
    description: "Yet another random project with a random image.",
    url: "https://athishthayalan.github.io/sorting-algorithm-visualiser/",
  },
  {
    id: 4,
    name: "PUNK",
    image: punk,
    description: "An application utilizing the PUNK API.",
    url: "https://example.com/random-project-2",
  },
  {
    id: 5,
    name: "Calculator",
    image: calculator,
    description: "Calculator",
    url: "https://athishthayalan.github.io/calculator/",
  },
];

export default projectsData;
