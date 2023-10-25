import React from "react";
import TextGradient from "./TextGradient";
import { gradientText } from "@/constants";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col py-5">
        <TextGradient
          text={gradientText}
          from="from-cyan-900"
          via="via-red-700"
          to="to-amber-300"
          className="text-center text-6xl font-extrabold"
        />
      </div>

      <div className="flex flex-col gap-y-6 px-5 text-center text-base text-zinc-600">
        <p className="text-xl font-medium">
          Hi there! <span className="text-2xl">👋</span>
        </p>
        <p className="text-lg font-medium">
          I&apos;m <span className="text-lg font-bold">Nicolas</span>, a
          frontend developer from Argentina who loves to work with React and
          Next.js
        </p>

        <div className="flex flex-col items-center justify-center gap-y-6">
          <Button className="w-[220px] shadow-lg transition-all hover:scale-105">Check my portfolio</Button>
          <Button
            variant="outline"
            className="relative w-[220px] from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% font-bold transition-all before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-gradient-to-r before:blur-[25px] hover:scale-105 hover:text-slate-50 dark:text-slate-50"
          >
            Contact me
          </Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
