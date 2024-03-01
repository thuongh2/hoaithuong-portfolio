import { TypeAnimation } from "react-type-animation";
import React, { useState, useEffect } from "react";

export default Animation = () => {
  const [pageURL, setPageURL] = useState("dev");
  const [type, setType] = useState("Devops");

  useEffect(() => {
    setPageURL(window.location.href);
    console.log(pageURL);
    if(window.location.href.includes("devops")) {
      setType("DevOps");
      console.log(type);
    }

  }, [setPageURL])


  return (
    <TypeAnimation
      sequence={[
        "I'm", // Types 'One'
        500, // Waits 1s
        "I'm a", // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        "I'm a " + type  + " ", // Types 'Three' without deleting 'Two'
        1000,
        "I'm a "+ type +" Engineer.", // Types 'Three' without deleting 'Two'
        2000
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    />
  );
};
