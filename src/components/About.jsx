import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaGitAlt,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNextdotjs,
  SiNetlify,
  SiMongodb,
  SiSocketdotio,
  SiPostman,
  SiRedux,
  SiJsonwebtokens,
  SiMysql,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="bg-white min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0a66c2]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-[#0a66c2]">Karunakaran Selvam</span>,
          I’ve a experienced Software Engineer with 5+ years of expertise in developing interactive and dynamic
          web applications. Highly proficient in React.js, delivering innovative front-end solutions that
          enhance user experiences. Skilled at leveraging modern technologies to address complex
          challenges in a rapidly evolving digital landscape. Committed to driving societal and economic
          progress through impactful software solutions and a dedication to continuous improvement.
        </p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#0a66c2] text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {/* Skill Icons */}
            <div className="flex flex-col items-center space-y-2">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiRedux size={40} className="text-[#764abc]" />
              <span className="font-bold">Redux</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaNode size={40} className="text-[#68a063]" />
              <span className="font-bold">Node.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiExpress size={40} className="text-[#000000]" />
              <span className="font-bold">Express.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiNextdotjs size={40} className="text-black" />
              <span className="font-bold">Next.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiTailwindcss size={40} className="text-[#38bdf8]" />
              <span className="font-bold">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS3</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiBootstrap size={40} className="text-[#563d7c]" />
              <span className="font-bold">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <TbBrandFramerMotion size={40} className="text-[#1c1c1c]" />
              <span className="font-bold">Framer Motion</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <IoLogoNpm size={40} className="text-[#CB3837]" />
              <span className="font-bold">NPM</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiMysql size={40} className="text-[#F29111]" />
              <span className="font-bold">MySQL</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiMongodb size={40} className="text-[#47a248]" />
              <span className="font-bold">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiJsonwebtokens size={40} className="text-[#232F3E]" />
              <span className="font-bold">JWT</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiSocketdotio size={40} className="text-[#010101]" />
              <span className="font-bold">Socket.IO</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGitAlt size={40} className="text-[#f05032]" />
              <span className="font-bold">Git</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaGithub size={40} className="text-black" />
              <span className="font-bold">GitHub</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <DiVisualstudio size={40} className="text-[#0078d7]" />
              <span className="font-bold">VS Code</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiPostman size={40} className="text-[#ef5b25]" />
              <span className="font-bold">Postman</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <IoLogoVercel size={40} className="text-[#000]" />
              <span className="font-bold">Vercel</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiNetlify size={40} className="text-[#00d1b2]" />
              <span className="font-bold">Netlify</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <TbBrandReactNative size={40} className="text-[#000]" />
              <span className="font-bold">React Native</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaFigma size={40} className="text-[#F24E1E]" />
              <span className="font-bold">Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
