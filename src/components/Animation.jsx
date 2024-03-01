import { TypeAnimation } from "react-type-animation";
import React, { useState, useEffect } from "react";

export default Animation = () => {
  const [pageURL, setPageURL] = useState("dev");
  const [type, setType] = useState("Software");

  useEffect(() => {
    setPageURL(window.location.href);
  })
  console.log(pageURL);
  if(pageURL.includes("devops")) {
    setType("DevOps");
  }


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
