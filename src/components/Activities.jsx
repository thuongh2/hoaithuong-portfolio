import React from "react";

const articles = [
  {
    id: 1,
    title: "JVM Memory Secrets: How Objects Are Stored for Performance",
    date: "May 26, 2025",
    dateTime: "2025-05-26",
    readTime: "5 min read",
    link: "https://medium.com/@hoaithuong.data/jvm-memory-secrets-how-objects-are-stored-for-performance-558b89c1175a",
    tags: "Java, JVM, memory",
  },
  {
    id: 2,
    title: "How to Score a Free 16-Core, 64GB RAM VPS from Google in 2025",
    date: "Apr 13, 2025",
    dateTime: "2025-04-13",
    readTime: "3 min read",
    link: "https://medium.com/@hoaithuong.data/how-to-score-a-free-16-core-64gb-ram-vps-from-google-in-2025-f353fcd79719",
    tags: "DevOps, VPS",
  },
  {
    id: 3,
    title: "How to Run Multiple vLLM Models on Free GPUs Like a Pro",
    date: "Mar 27, 2025",
    dateTime: "2025-03-27",
    readTime: "4 min read",
    link: "https://medium.com/@hoaithuong.data/how-to-run-multiple-vllm-models-on-free-gpus-like-a-pro-bf59e9b8bacc",
    tags: "AI, vLLM, Colab",
  },
];

const Activities = () => {
  return (
    <section name="activities" id="activities" className="section writing graphite">
      <div className="container writing__grid">
        <div className="writing__head">
          <h2>Writing</h2>
          <p>Articles on software engineering and DevOps on Medium, read over 1K times.</p>
        </div>
        <ul className="articles">
          {articles.map((a) => (
            <li key={a.id}>
              <a className="article" href={a.link} target="_blank" rel="noreferrer">
                <span className="article__title">{a.title}</span>
                <span className="article__meta">
                  <time dateTime={a.dateTime}>{a.date}</time>
                  <span>{a.readTime}</span>
                  <span>{a.tags}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Activities;
