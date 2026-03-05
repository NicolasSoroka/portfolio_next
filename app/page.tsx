import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import React from "react";
// import Divider from "@/components/Divider";
import { marqueeImages } from "@/constants";

const page = () => {
  return (
    <main className="flex flex-col gap-4 lg:gap-10">
      <Hero />
      <Marquee images={marqueeImages} />
      {/* <Divider section='Works' number='1' title='Build when inspiration strikes' description='Free developers from time-consuming, unnecessary processes that slow your work, so you and your team can focus on creating.'/> */}
    </main>
  );
};

export default page;
