import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Hoai Thuong, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
            With experience in the field of Software Engineering, focusing on Backend and DevOps. I has been involved in various cloud server related products and undertaken roles within a software team. I have acquired skills in designing, developing and deploying applications. My ability to multitask and work in a team eviroment are among my strengths.  In the future, I want to become a Devops Engineering in the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
