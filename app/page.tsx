import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import React from "react";
import Divider from "@/components/Divider";
import { marqueeImages } from "@/constants";

const page = () => {
  return <main className="flex flex-col">
    <Hero/>
    <Marquee images={marqueeImages}/>
    <Divider/>
  </main>;
};

export default page;
