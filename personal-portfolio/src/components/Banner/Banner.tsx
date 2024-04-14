import vegeta from "../../assets/vegeta-bubble-removebg.png";
import Typed from "typed.js";
import "./Banner.css";
import { useEffect, useRef } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ["Athish.", "coding.", "sleeping.", "Athish."],
        typeSpeed: 200,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);
  return (
    <div className="h-screen bg-inherit flex pl-6" id="home">
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-5 md:mb-10">
            Hey! I'm <span ref={el}></span>
          </h1>
          <h2 className="text-lg md:text-2xl text-sky-200">
            I'm Athish Thayalan, a First Class, University of Nottingham
            graduate with a degree in Mathematics and Economics. With the
            Economics half having a focus on mathematical modelling, statistics,
            and data analysis, this gave me a taste of coding and has ignited my
            passion for it. Beyond crunching numbers, I thrive on leveraging
            them to create innovative tech solutions.
          </h2>
        </div>
      </div>

      <div className="w-1/2  flex items-center justify-center">
        <img src={vegeta} alt="Profile" className={`max-h-full bounce`} />
      </div>
    </div>
  );
};

export default Banner;
