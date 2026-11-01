import React from "react";

const companies = [
  {
    company: "VNGGames",
    role: "Software Engineer",
    period: "May 2024 to present",
    points: [
      "Develop and operate the VNGGames Account Service: 40M+ users, 1K TPS.",
      "Moved 200+ services from Bitbucket to GitLab; CI time cut from 38 to 4 minutes.",
      "Merged VGA and ZingID sign-in into one platform.",
      "Data protection compliance for Vietnam, Thailand, Taiwan and Southeast Asia.",
    ],
    stack: "Golang, Java, MySQL, AWS, GitLab CI/CD",
  },
  {
    company: "Long Van System Solution",
    role: "Software Engineer",
    period: "Oct 2022 to Apr 2024",
    points: [
      "Led a team of 4 on a cloud e-commerce platform serving 30,000+ users.",
      "Payment gateway with a 99.9% payment success rate.",
      "National domain registration service: 1 year of stable operation.",
      "Automated CI/CD: deploys from 2 hours to 4 minutes, 5+ recurring incidents removed.",
    ],
    stack: "Java, Spring Boot, GraphQL, MongoDB, Oracle",
  },
];

const Experience = () => {
  return (
    <section name="experience" id="experience" className="section experience">
      <div className="container experience__grid">
        <div className="experience__head">
          <h2>Experience</h2>
          <p>
            Backend engineer with 3 years of Golang, focused on scalable, maintainable systems and
            the DevOps around them. Aiming for a senior role.
          </p>
        </div>

        <ol className="jobs">
          {companies.map((c) => (
            <li className="job" key={c.company}>
              <div className="job__meta">
                <h3>{c.company}</h3>
                <p className="job__role">{c.role}</p>
                <p className="job__period">{c.period}</p>
              </div>
              <div className="job__body">
                <ul className="job__points">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="job__stack">{c.stack}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
