import me from "../../assets/me-cropped-removebg-preview.png";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import email from "../../assets/icons/email.png";
import "../Banner/Banner.css";
const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-screen flex items-center justify-center pb-12">
      {" "}
      <div
        className="bg-zinc-900 rounded-lg shadow-lg md:flex md:flex-row items-center justify-center text-white h-auto p-4"
        id="contact"
      >
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-lg mb-4">
            Whether you have a project idea, want to collaborate, or just want
            to say hello, feel free to reach out to me. I'd love to hear from
            you!
          </p>
          <p className="text-lg mb-8">
            You can reach me through any of the following channels:
          </p>
          <div className="flex flex-col space-y-4">
            <a
              href="mailto:tathish@hotmail.co.uk"
              className="flex items-center text-lg text-primary-400 hover:scale-110"
            >
              <img src={email} alt="Email" className="w-6 h-6 mr-2" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/athish-thayalan-1182b81b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg text-primary-400 hover:scale-110"
            >
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/AthishThayalan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-lg text-primary-400 hover:scale-110"
            >
              <img src={github} alt="GitHub" className="w-6 h-6 mr-2" />
              GitHub
            </a>
          </div>
        </div>
        <div className="md:w-1/3 ml-40 mb-20">
          <img
            src={me}
            alt="My Image"
            className="w-200 rounded-md  max-h-full bounce"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
