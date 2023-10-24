import React from "react";
import TextGradient from "./TextGradient";
import { gradientText } from "@/constants";

const Hero = () => {
  return (
    <>
      <div className="py-5 flex flex-col">
        <TextGradient
          text={gradientText}
          from="from-cyan-900"
          via="via-red-700"
          to="to-amber-300"
          className="text-center text-6xl font-extrabold"
        />
      </div>

      <div className="flex flex-col px-10 text-center text-base">
        <p className="text-xl font-medium">
          Hi there! <span className="text-2xl">👋</span>
        </p>
        <p className="pt-3 text-lg font-medium">
          I&apos;m <span className="text-lg font-bold">Nicolas</span>, a
          frontend developer from Argentina who loves to work with React and
          Next.js
        </p>
        <p className="pt-2 font-medium">
          Check out my latests job experiences and projects <span className="text-2xl"> 👇</span>
        </p>
      </div>
    </>
  );
};

export default Hero;
