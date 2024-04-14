import game from "../../assets/projects/2048.png";
import punk from "../../assets/projects/punk.png";
import calculator from "../../assets/projects/calculator.png";
import yelpcamp from "../../assets/projects/yelpCamp.png";
import sortingAlgo from "../../assets/projects/sortingAlgo.png";
import wov from "../../assets/projects/wov.png";

export type Projects = {
  id: number;
  name: string;
  image: string;
  description: string;
  url: string;
  repo: string;
};

export const projectsData: Projects[] = [
  {
    id: 1,
    name: "YelpCamp",
    image: yelpcamp,
    description:
      "YelpCamp is a full-stack web application built with Node.js, Express, MongoDB, and Bootstrap. It allows users to browse, create, and review campgrounds. Features include user authentication, campground creation, commenting, and rating.",
    url: "https://yelpcamp-obn9.onrender.com/",
    repo: "https://github.com/AthishThayalan/yelpcamp",
  },
  {
    id: 2,
    name: "2048 Clone",
    image: game,
    description:
      "2048 Clone is a clone of the popular 2048 game. It is built using HTML, CSS, and Typescript. The goal of the game is to combine numbered tiles on a grid to create a tile with the number 2048.",
    url: "https://athishthayalan.github.io/2048/",
    repo: "https://github.com/AthishThayalan/2048",
  },
  {
    id: 3,
    name: "Sorting Algorithm Visualiser",
    image: sortingAlgo,
    description:
      "Sorting Algorithm Visualiser is a web application that visualizes various sorting algorithms such as bubble sort, insertion sort, and quicksort. It helps users understand how these algorithms work by animating the sorting process.",
    url: "https://athishthayalan.github.io/sorting-algorithm-visualiser/",
    repo: "https://github.com/AthishThayalan/sorting-algorithm-visualiser",
  },
  {
    id: 4,
    name: "PUNK",
    image: punk,
    description:
      "PUNK is a web application that utilizes the Punk API to display information about different types of beers. Users can search for beers by name, style, and other criteria. The application provides detailed information about each beer, including ABV (alcohol by volume) and description.",
    url: "https://example.com/random-project-2",
    repo: "https://github.com/AthishThayalan/punkapi",
  },
  {
    id: 5,
    name: "Calculator",
    image: calculator,
    description:
      "Calculator is a simple web-based calculator built using HTML, CSS, and JavaScript. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division. Users can perform calculations using both the keyboard and mouse inputs.",
    url: "https://athishthayalan.github.io/calculator/",
    repo: "https://github.com/AthishThayalan/calculator",
  },
  {
    id: 6,
    name: "Way of the Viking - Client Project",
    image: wov,
    description:
      "Way of the Viking is a client project that uses React for the front end and firebase for the backend ",
    url: "https://wov-client-project.web.app/",
    repo: "https://github.com/nology-tech/wov-client-project",
  },
];

export default projectsData;
