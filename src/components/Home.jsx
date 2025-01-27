import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  const downloadFile = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="home" className="bg-white">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#0a66c2]">Karunakaran Selvam</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#0a66c2]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "Senior React Developer.",
                  "MERN Stack Developer.",
                  "Mobile App Developer.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            I have a great experience in Software Engineer with 5+ years of expertise in developing interactive and dynamic
            web applications and I am also good at system design and software security.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold text-nowrap">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#0a66c2]" size={20} />
              <span>Chennai</span>
            </div>

            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = "tel:+919566622876"}>
              <FaPhoneAlt className="text-[#0a66c2]" size={20} />
              <span>+91 9566622876</span>
            </div>

            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = "mailto:karunakaran.selvam@outlook.com"}>
              <FaEnvelope className="text-[#0a66c2]" size={20} />
              <span>karunakaran.selvam@outlook.com</span>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="bg-[#0a66c2] px-5 py-2 rounded-2xl font-bold cursor-pointer" onClick={() => {
            downloadFile('/Karunakaran_Selvam_CV.pdf')
          }}>
            <span className="text-white">Download CV</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w-[85%] rounded-2xl"
            src="/profile.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
