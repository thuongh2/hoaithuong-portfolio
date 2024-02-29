import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Animation from "./Animation";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen grid">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#101116]">
          Vo Hoai Thuong
        </h1>
        <h2 className="text-2xl sm:text-6xl font-bold text-[#1d48c7]">
          <Animation />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-justify">
          I'm a final year student of the HCMC University of Technology and
          Education. I'm focused on planning, developing and deploying
          applications. I hope to find an opportunity to work in a creative and
          dynamic environment
        </p>
        <div>
          <Link to="skills" smooth={true} duration={500}>
            <button className="text-blue group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-600 hover:border-cyan-600 hover:text-white">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
