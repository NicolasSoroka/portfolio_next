import React from "react";
import TextGradient from "./TextGradient";

const Hero = () => {
  const gradientText = ["Frontend.", "Web.", "Developer."];

  return (
    <div>
      <div className="flex flex-col">
        <TextGradient text={gradientText} from="from-cyan-900" via="via-pink-700" to="to-indigo-900"/>
      </div>

      <p>
        Hi there, I&apos;m a fullstack developer with a passion for frontend
        technologies.
      </p>
      <p>
        Check out my latests job experiences and projects! I would be glad to
        answer any questions you might have.
      </p>
    </div>
  );
};

export default Hero;
