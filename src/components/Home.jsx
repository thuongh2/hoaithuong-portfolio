import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Animation from "./Animation";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen grid">
      {/* Animated Wave Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.08)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.04)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.02)" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.06)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.03)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0.01)" />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 0, 0, 0.04)" />
              <stop offset="50%" stopColor="rgba(0, 0, 0, 0.02)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0.01)" />
            </linearGradient>
            <linearGradient id="wave4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 0, 0, 0.03)" />
              <stop offset="50%" stopColor="rgba(0, 0, 0, 0.015)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 255.008)" />
            </linearGradient>
          </defs>
          
          {/* Wave 1 - Top flowing wave */}
          <path
            d="M0,300 C400,200 800,400 1200,300 L1200,0 L0,0 Z"
            fill="url(#wave1)"
            style={{ filter: 'blur(1px)' }}
          >
            <animate
              attributeName="d"
              values="M0,300 C400,200 800,400 1200,300 L1200,0 L0,0 Z;
                      M0,350 C400,250 800,450 1200,350 L1200,0 L0,0 Z;
                      M0,280 C400,180 800,380 1200,280 L1200,0 L0,0 Z;
                      M0,300 C400,200 800,400 1200,300 L1200,0 L0,0 Z"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Wave 2 - Middle intersecting wave */}
          <path
            d="M0,450 C300,350 600,550 1200,450 L1200,0 L0,0 Z"
            fill="url(#wave2)"
            style={{ filter: 'blur(0.5px)' }}
          >
            <animate
              attributeName="d"
              values="M0,450 C300,350 600,550 1200,450 L1200,0 L0,0 Z;
                      M0,500 C300,400 600,600 1200,500 L1200,0 L0,0 Z;
                      M0,420 C300,320 600,520 1200,420 L1200,0 L0,0 Z;
                      M0,450 C300,350 600,550 1200,450 L1200,0 L0,0 Z"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Wave 3 - Bottom flowing wave (reverse) */}
          <path
            d="M1200,500 C800,400 400,600 0,500 L0,800 L1200,800 Z"
            fill="url(#wave3)"
            style={{ filter: 'blur(1px)' }}
          >
            <animate
              attributeName="d"
              values="M1200,500 C800,400 400,600 0,500 L0,800 L1200,800 Z;
                      M1200,450 C800,350 400,550 0,450 L0,800 L1200,800 Z;
                      M1200,520 C800,420 400,620 0,520 L0,800 L1200,800 Z;
                      M1200,500 C800,400 400,600 0,500 L0,800 L1200,800 Z"
              dur="18s"
              repeatCount="indefinite"
            />
          </path>
          
          {/* Wave 4 - Intersecting bottom wave */}
          <path
            d="M1200,350 C900,250 600,450 0,350 L0,800 L1200,800 Z"
            fill="url(#wave4)"
            style={{ filter: 'blur(0.5px)' }}
          >
            <animate
              attributeName="d"
              values="M1200,350 C900,250 600,450 0,350 L0,800 L1200,800 Z;
                      M1200,380 C900,280 600,480 0,380 L0,800 L1200,800 Z;
                      M1200,320 C900,220 600,420 0,320 L0,800 L1200,800 Z;
                      M1200,350 C900,250 600,450 0,350 L0,800 L1200,800 Z"
              dur="14s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#101116]">
          Vo Hoai Thuong
        </h1>
        <h2 className="text-2xl sm:text-6xl font-bold text-[#1d48c7]">
          <Animation />
        </h2>
        <p className="text-[#000000] py-4 max-w-[700px] text-justify">
          Backend engineer with 3 years of Golang experience, focused on building scalable and maintainable systems. Experienced in backend and DevOps for user management and infrastructure. Looking to grow into a senior role by contributing to effective, user-friendly features that create real product value.
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
