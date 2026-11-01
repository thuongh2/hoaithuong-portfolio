import React from "react";
import shoesStore from "../assets/project-shop.png";
import svDental from "../assets/project-sv.png";
import instagram from "../assets/project-ins.png";
import Windown from "../assets/project-win.png";

const projects = [
  {
    name: "SV Dental website",
    image: svDental,
    demo: "https://nhakhoasv.vn",
    code: "https://github.com/TADB0902/sv-dental",
  },
  {
    name: "Shoes Store",
    image: shoesStore,
    demo: "https://shoes-store-udtt.vercel.app/",
    code: "https://github.com/thuongh2/Shoe-Store-Website",
  },
  {
    name: "Instagram React clone",
    image: instagram,
    demo: "https://thuongh2.github.io/instagram-react/",
    code: "https://github.com/thuongh2/instagram-react",
  },
  {
    name: "Shoes Store Windows app",
    image: Windown,
    code: "https://github.com/thuongh2/QuanLyBanGiay_Entity",
  },
];

const Work = () => {
  return (
    <section name="work" id="work" className="section work">
      <div className="container">
        <div className="work__head">
          <h2>Projects</h2>
          <p className="lead">Earlier web and desktop builds, each with its source.</p>
        </div>
        <ul className="projects">
          {projects.map((p) => (
            <li className="project" key={p.name}>
              <figure className="project__shot">
                <img src={p.image} alt={`Screenshot of ${p.name}`} />
              </figure>
              <h3>{p.name}</h3>
              <p className="project__links">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    Live site
                  </a>
                )}
                <a href={p.code} target="_blank" rel="noreferrer">
                  Source on GitHub
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
