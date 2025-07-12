import { useState, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaCalendarAlt, FaEye } from 'react-icons/fa';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.2, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isIntersecting];
};

const Activities = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [headerRef, headerVisible] = useIntersectionObserver();
  const [cardsRef, cardsVisible] = useIntersectionObserver();

  // Data cho biểu đồ
  const chartData = [
    { month: 'Jan', value: 200 },
    { month: 'Feb', value: 600 },
    { month: 'Mar', value: 300 },
    { month: 'Apr', value: 500 },
    { month: 'May', value: 400 },
    { month: 'Jun', value: 700 },
    { month: 'Jul', value: 350 },
    { month: 'Aug', value: 650 },
    { month: 'Sep', value: 450 },
    { month: 'Oct', value: 550 },
    { month: 'Nov', value: 800 },
    { month: 'Dec', value: 600 }
  ];

  // Dữ liệu các bài viết Medium
  const articles = [
    {
      id: 1,
      title: "JVM Memory Secrets: How Objects Are Stored for Performance",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*m44IbgxDdU77ztzkX9iYpA.png",
      date: "May 26, 2025",
      readTime: "5 min read",
      views: "50",
      link: "https://medium.com/@hoaithuong.data/jvm-memory-secrets-how-objects-are-stored-for-performance-558b89c1175a",
      tags: ["Java", "JVM", "Memory"]
    },
    {
      id: 2,
      title: "How to Score a Free 16-Core, 64GB RAM VPS from Google in 2025",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*j0mnXwftv6dTc0a9m6D4mQ.png",
      date: "Apr 13, 2025",
      readTime: "3 min read",
      views: "1k",
      link: "https://medium.com/@hoaithuong.data/how-to-score-a-free-16-core-64gb-ram-vps-from-google-in-2025-f353fcd79719",
      tags: ["DevOps", "VPS"]
    },
    {
      id: 3,
      title: "How to Run Multiple vLLM Models on Free GPUs Like a Pro",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*PHxZS8xVvUVxQ-KFl0Llkw.png",
      date: "Mar 27, 2025",
      readTime: "4 min read",
      views: "300",
      link: "https://medium.com/@hoaithuong.data/how-to-run-multiple-vllm-models-on-free-gpus-like-a-pro-bf59e9b8bacc",
      tags: ["AI", "vLLM", "Colab"]
    }
  ];

  const ArticleCard = ({ article, index }) => {
    const [cardRef, isVisible] = useIntersectionObserver();
    
    return (
      <div
        ref={cardRef} className='mt-4'
      >
        <div
          className={`group relative border border-gray-700 rounded-lg overflow-hidden h-full 
                     ${hoveredCard === article.id ? 'border-pink-600 shadow-lg shadow-pink-600/10 -translate-y-2' : ''}`}
          onClick={() => window.open(article.link, '_blank')}
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-60"></div>
            
            {/* External link icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                <FaExternalLinkAlt className="text-white text-sm" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {article.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 text-xs font-medium text-white-600 bg-white-600/10 rounded-full border border-white-600/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-bold text-gray-300 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {article.title}
            </h3>
            
    
            {/* Meta info */}
            <div className="flex items-center justify-between text-xs text-white-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-1" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <FaEye className="mr-1" />
                  {article.views}
                </div>
              </div>
    
            </div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>
    );
  };

  return (
    <div name="activities" className="w-full min-h-screen bg-[#0a192f] text-gray-300 relative overflow-hidden">
      {/* Background Chart */}
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pink-600 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full min-h-screen py-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`max-w-[1000px] w-full px-4 mb-16 transition-all duration-700 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 mb-8">
              Activities
            </p>
            <div className="mt-8 max-w-[800px] mx-auto">
              <h2 className="text-2xl font-bold text-gray-300 mb-4">
                Medium Technical Writer 
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Published articles on Software Engineering and DevOps topics, reaching over 1K views.
              </p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div 
          ref={cardsRef}
          className="max-w-[1200px] w-full px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                index={index}
              />
            ))}
          </div>
        </div>

       
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Activities;