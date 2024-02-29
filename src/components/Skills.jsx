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
            <img className="w-50 mx-auto my-4 h-50 " src="https://s3-hcm-r1.longvan.net/logo/docker.png" alt="HTML icon" />
            <p className="my-4 font-medium uppercase">Docker</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-20 mx-auto my-4 " src="https://s3-hcm-r1.longvan.net/logo/jenkins.png" alt="HTML icon" />
            <p className="my-4 font-medium uppercase">Jenkins</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img
              className="w-50 mx-auto my-4 h-50"
              src="https://s3-hcm-r1.longvan.net/logo/k8s.png"
              alt="K8S"
            />
            <p className="my-4 font-medium uppercase">K8s</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-110 duration-500 rounded-md">
            <img className="w-25 mx-auto my-4 h-30" src="https://s3-hcm-r1.longvan.net/logo/AWS.jpeg" alt="HTML icon" />
            <p className="my-4 font-medium">AWS</p>
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
