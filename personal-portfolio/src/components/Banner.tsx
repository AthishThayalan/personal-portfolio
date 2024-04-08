import bannerBG from "../assets/banner-bg.png";
import vegeta from "../assets/vegeta.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex pl-6"
      style={{ backgroundImage: `url(${bannerBG})` }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-white font-bold">Hey! I'm Athish</h1>
          <h2 className="text-white">
            I'm Athish Thayalan, a First Class, University of Nottingham
            graduate with a degree in Mathematics and Economics. With the
            Economics half having a focus on mathematical modelling, statistics,
            and data analysis, this gave me a taste of coding and has ignited my
            passion for it. Beyond crunching numbers, I thrive on leveraging
            them to create innovative tech solutions.
          </h2>
        </div>
      </div>

      {/* Image with animation */}
      <div className="w-1/2 flex items-center justify-center">
        <img src={vegeta} alt="Profile" className={`max-h-full  bounce  }`} />
      </div>
    </div>
  );
};

export default Banner;
