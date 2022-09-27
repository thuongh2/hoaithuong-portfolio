import { TypeAnimation } from "react-type-animation";

export default Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        "I'm", // Types 'One'
        500, // Waits 1s
        "I'm a", // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        "I'm a Web", // Types 'Three' without deleting 'Two'
        1000,
        "I'm a Web Developer.", // Types 'Three' without deleting 'Two'
        2000
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
    />
  );
};
