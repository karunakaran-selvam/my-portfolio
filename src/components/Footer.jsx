import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a66c2] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Karunakaran Selvam. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="#" className="underline hover:text-[#ffffff]">
            karunakaran Selvam
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a
            href="https://github.com/karunakaran-selvam"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/karunakaran-selvam/"
          >
            <FaLinkedin size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
