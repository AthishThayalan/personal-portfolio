import bannerBG from "../assets/banner-bg.png";
import vegeta from "../assets/vegeta.png";
import Typed from "typed.js";
import "./Banner.css";
import { useEffect, useRef } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ["Athish.", "coding.", "sleeping."],
        typeSpeed: 200,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);
  return (
    <div
      className="h-screen bg-cover bg-center flex pl-6"
      style={{ backgroundImage: `url(${bannerBG})` }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-left">
          <h1 className="text-6xl text-white font-bold mb-10">
            Hey! I'm <span ref={el}></span>
          </h1>
          <h2 className="text-2xl text-sky-200">
            I'm Athish Thayalan, a First Class, University of Nottingham
            graduate with a degree in Mathematics and Economics. With the
            Economics half having a focus on mathematical modelling, statistics,
            and data analysis, this gave me a taste of coding and has ignited my
            passion for it. Beyond crunching numbers, I thrive on leveraging
            them to create innovative tech solutions.
          </h2>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <img src={vegeta} alt="Profile" className={`max-h-full  bounce  }`} />
      </div>
    </div>
  );
};

export default Banner;
