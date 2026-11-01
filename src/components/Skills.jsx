import React from "react";

const groups = [
  { area: "Languages", tools: "Golang, Java, Python" },
  { area: "Frameworks and APIs", tools: "Spring Boot, GraphQL" },
  { area: "Data", tools: "MySQL, MongoDB, Oracle" },
  { area: "Cloud and infrastructure", tools: "AWS, Docker, Kubernetes" },
  { area: "Delivery", tools: "GitLab CI/CD, GitHub, Bitbucket" },
];

const Skills = () => {
  return (
    <section name="skills" id="skills" className="section skills">
      <div className="container skills__grid">
        <h2>Skills</h2>
        <table className="skills__table">
          <caption className="visually-hidden">Technologies by area</caption>
          <thead>
            <tr>
              <th scope="col">Area</th>
              <th scope="col">Tools</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((g) => (
              <tr key={g.area}>
                <th scope="row">{g.area}</th>
                <td>{g.tools}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Skills;
