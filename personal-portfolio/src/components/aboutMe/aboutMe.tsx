import myImage from "../../assets/me.jpg";

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-zinc-900 flex items-center w-full max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden h-4/5">
        <div className="flex-none w-1/3 ml-10 hidden md:block">
          <img
            src={myImage}
            alt="My Image"
            className="h-auto w-full object-cover rounded-full w-80 h-80"
          />
        </div>
        <div className="p-8 flex-1">
          <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-white">
            Aside from logical problem solving, I also believe in the importance
            of physical fitness. I frequent the gym regularly, pushing my limits
            and striving for improvement. There's something incredibly
            satisfying about the feeling of accomplishment after a challenging
            workout. This has also helped me develop my{" "}
            <strong>growth mindeset!</strong>
            <br />
            <br />
            And of course, no day is complete without a steaming hot cup of
            coffee. Whether it's to kickstart my morning or to fuel an intense
            coding session, coffee is my constant companion, providing both
            warmth and inspiration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
