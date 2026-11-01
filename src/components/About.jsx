import React from "react";

const figures = [
  { value: "40M+", label: "registered users" },
  { value: "5M", label: "daily active users" },
  { value: "1K", label: "transactions per second" },
  { value: "<200 ms", label: "latency" },
];

const About = () => {
  return (
    <section name="about" id="about" className="section case">
      <div className="container">
        <div className="case__head">
          <h2>VNGGames Account Service</h2>
          <p className="lead">
            The account and sign-in service behind VNGGames products, in Golang and Java on MySQL
            and AWS.
          </p>
        </div>

        <dl className="figures">
          {figures.map((f) => (
            <div className="figures__item" key={f.label}>
              <dt className="figures__label">{f.label}</dt>
              <dd className="figures__value num">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="case__notes">
          <div>
            <h3>Regional data protection</h3>
            <p>Compliance for user data across Vietnam, Thailand, Taiwan and Southeast Asia.</p>
          </div>
          <div>
            <h3>One sign-in</h3>
            <p>Unified the legacy VGA and ZingID accounts into a single platform for every product.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
