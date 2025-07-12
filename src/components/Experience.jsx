import { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import { FaServer, FaShieldAlt, FaGitlab, FaUnity, FaCloud, FaCreditCard, FaUsers, FaRocket, FaChevronRight } from 'react-icons/fa';

const AnimatedText = ({ text, delay = 0 }) => {
  return (
    <span className="inline-block animate-text-reveal" style={{ animationDelay: `${delay}s` }}>
      {text}
    </span>
  );
};

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isIntersecting];
};

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [statsRef, statsVisible] = useIntersectionObserver();

  const companies = [
    {
      company: "VNGGames",
      period: "May 2024 - Present",
      role: "SOFTWARE ENGINEER",
      color: "from-blue-600 to-indigo-600",
      experiences: [
        {
          icon: <FaServer className="text-3xl text-blue-600" />,
          title: "VNGGames Account Service",
          subtitle: "40M+ users • 5M daily active • 1K TPS",
          highlight: "Highly Scalable Architecture",
          metrics: "< 200ms latency",
          tech: ["Golang", "Java", "MySQL", "AWS"],
          color: "blue"
        },
        {
          icon: <FaShieldAlt className="text-3xl text-cyan-600" />,
          title: "Regional Data Protection",
          subtitle: "Vietnam • Thailand • Taiwan • SEA",
          highlight: "Enterprise Security & Compliance",
          metrics: "Multi-region compliance",
          tech: ["Security", "Compliance", "Regional Management"],
          color: "cyan"
        },
        {
          icon: <FaGitlab className="text-3xl text-purple-600" />,
          title: "DevOps Transformation",
          subtitle: "200+ services • Bitbucket → GitLab",
          highlight: "CI/CD Pipeline Revolution",
          metrics: "80% efficiency boost (38min → 4min)",
          tech: ["GitLab", "CI/CD", "DevOps"],
          color: "purple"
        },
        {
          icon: <FaUnity className="text-3xl text-indigo-600" />,
          title: "Authentication Unification",
          subtitle: "VGA + ZingID → Single Platform",
          highlight: "Legacy System Integration",
          metrics: "100% consistency across products",
          tech: ["System Integration", "Authentication", "UX"],
          color: "indigo"
        }
      ]
    },
    {
      company: "Long Van System Solution",
      period: "Oct 2022 - Apr 2024",
      role: "SOFTWARE ENGINEER",
      color: "from-emerald-600 to-teal-600",
      experiences: [
        {
          icon: <FaCloud className="text-3xl text-emerald-600" />,
          title: "Cloud Computing Platform",
          subtitle: "Team lead • 4 engineers",
          highlight: "E-commerce Platform Leadership",
          metrics: "30,000+ users served",
          tech: ["Java", "Spring Boot", "GraphQL", "MongoDB"],
          color: "emerald"
        },
        {
          icon: <FaCreditCard className="text-3xl text-teal-600" />,
          title: "Payment System Excellence",
          subtitle: "E-commerce payment gateway",
          highlight: "High-Performance Payment",
          metrics: "99.9% payment success rate",
          tech: ["Payment Gateway", "Oracle", "Security"],
          color: "teal"
        },
        {
          icon: <FaUsers className="text-3xl text-green-600" />,
          title: "National Domain Service",
          subtitle: "Government compliance project",
          highlight: "Official Domain Registration",
          metrics: "1 year stable operation",
          tech: ["Compliance", "Domain Service", "Government"],
          color: "green"
        },
        {
          icon: <FaRocket className="text-3xl text-blue-600" />,
          title: "Automated CI/CD Pipeline",
          subtitle: "Deployment optimization",
          highlight: "Zero-Downtime Deployment",
          metrics: "2h → 4min deployment • 5+ incidents eliminated",
          tech: ["CI/CD", "Automation", "DevOps"],
          color: "blue"
        }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue:   "text-blue-600   bg-blue-50   border-blue-200   hover:bg-blue-100",
        cyan:   "text-cyan-600   bg-cyan-50   border-cyan-200   hover:bg-cyan-100",
        purple: "text-purple-600 bg-purple-50 border-purple-200 hover:bg-purple-100",
        indigo: "text-indigo-600 bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
        emerald:"text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100",
        teal:   "text-teal-600   bg-teal-50   border-teal-200   hover:bg-teal-100",
        green:  "text-green-600  bg-green-50  border-green-200  hover:bg-green-100",
    };
    return colors[color] || colors.blue;
  };

  const ExperienceCard = ({ exp, index, companyIndex, isLeft }) => {
    const [cardRef, isVisible] = useIntersectionObserver();
    
    return (
      <div
        ref={cardRef}
        className={`flex items-center justify-center w-full mb-16 ${
          isVisible ? 'animate-slide-in-visible' : 'opacity-0'
        }`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <div className="relative w-full max-w-4xl">
          
          
          <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 w-full max-w-md mx-4
                         hover:border-${exp.color}-300 transition-all duration-500 cursor-pointer
                         hover:scale-105 hover:shadow-xl hover:shadow-${exp.color}-500/20
                         ${hoveredIndex === `${companyIndex}-${index}` ? `scale-105 border-${exp.color}-300 shadow-xl` : ''}
                         transform-gpu`}
            //   onMouseEnter={() => setHoveredIndex(`${companyIndex}-${index}`)}
            //   onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${exp.color}-500/5 to-${exp.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-xl ${getColorClasses(exp.color)} mr-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {exp.title}
                      </h4>
                      <p className="text-sm text-gray-600">{exp.subtitle}</p>
                    </div>
                  </div>
                  {/* <FaChevronRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" /> */}
                </div>
                
                {/* Content */}
                <div className="mb-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-${exp.color}-100 text-${exp.color}-700 mb-2`}>
                    {exp.highlight}
                  </div>
                  <p className="text-sm text-gray-700 font-medium mb-3">{exp.metrics}</p>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 overflow-hidden">
                    <div className={`h-1.5 bg-gradient-to-r from-${exp.color}-500 to-${exp.color}-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000`}></div>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${getColorClasses(exp.color)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CompanySection = ({ company, companyIndex }) => {
    const [sectionRef, isVisible] = useIntersectionObserver();
    
    return (
      <div ref={sectionRef} className="mb-20">
        {/* Company header */}
        <div className={`flex items-center justify-center mb-12 ${isVisible ? 'animate-slide-in-visible' : 'opacity-0'}`}>
          <div className={`flex items-center bg-white/90 backdrop-blur-sm border-2 border-blue-600 rounded-2xl px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
            <span className="text-3xl mr-4">{company.logo}</span>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">{company.company}</h3>
              <p className="text-blue-600 font-semibold text-sm">{company.role}</p>
              <p className="text-gray-600 text-xs">{company.period}</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-600 to-purple-600 opacity-30"></div>
          
          {/* Experience cards */}
          <div>
            {company.experiences.map((exp, expIndex) => (
              <ExperienceCard
                key={expIndex}
                exp={exp}
                index={expIndex}
                companyIndex={companyIndex}
                isLeft={expIndex % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div name="experience" className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-20 ${headerVisible ? 'animate-slide-in-visible' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Professional Journey
          </div>
          <h1 className="text-xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            <AnimatedText text="Work" delay={0.1} />
            <span className="mx-2 text-blue-600">
              <AnimatedText text="Experience" delay={0.2} />
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            3+ years of backend engineering excellence, focused on scalable architectures and high-performance systems that serve millions of users.
          </p>
        </div>

        {/* Companies */}
        <div className="space-y-8">
          {companies.map((company, companyIndex) => (
            <CompanySection
              key={companyIndex}
              company={company}
              companyIndex={companyIndex}
            />
          ))}
        </div>

        {/* Stats */}
        <div ref={statsRef} className={`mt-20 ${statsVisible ? 'animate-slide-in-visible' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "3+", label: "Years Experience", color: "blue" },
              { value: "70M+", label: "Users Served", color: "purple" },
              { value: "99.9%", label: "System Uptime", color: "emerald" },
              { value: "200+", label: "Services Managed", color: "cyan" }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl hover:border-${stat.color}-300 transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
              >
                <div className={`text-3xl font-bold text-black-600 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-visible {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-reveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-slide-in-visible {
          animation: slide-in-visible 0.8s ease-out forwards;
        }

        .animate-text-reveal {
          animation: text-reveal 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </div>
  );
};

export default Experience;