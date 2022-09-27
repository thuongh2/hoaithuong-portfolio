import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Springboot from "../assets/springboot.png";
import GitHub from "../assets/github.png";
import Python from "../assets/python.jpg";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto my-4" src={HTML} alt="HTML icon" />
            <p className="my-4 font-medium">HTML</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto my-4" src={CSS} alt="HTML icon" />
            <p className="my-4 font-medium">CSS</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img
              className="w-20 mx-auto my-4"
              src={JavaScript}
              alt="HTML icon"
            />
            <p className="my-4 font-medium">JAVASCRIPT</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto my-4" src={ReactImg} alt="HTML icon" />
            <p className="my-4 font-medium">REACT</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto my-4" src={Tailwind} alt="HTML icon" />
            <p className="my-4 font-medium">TAILWIND</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto my-4" src={GitHub} alt="HTML icon" />
            <p className="my-4 font-medium">GITHUB</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img
              className="w-20 mx-auto my-4"
              src={Springboot}
              alt="HTML icon"
            />
            <p className="my-4 font-medium">SPRING BOOT</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto my-4" src={Python} alt="HTML icon" />
            <p className="my-4 font-medium">PYTHON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
