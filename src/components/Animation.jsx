import { useEffect, useState } from "react";

// The role reads "DevOps Engineer" when the URL mentions devops, otherwise
// "Software Engineer". Same switch as before, without the typing loop.
const Animation = () => {
  const [type, setType] = useState("Software");

  useEffect(() => {
    if (window.location.href.includes("devops")) setType("DevOps");
  }, []);

  return <>{type} Engineer</>;
};

export default Animation;
