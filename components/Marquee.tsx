"use client";

import React, { FC, useMemo } from "react";
import Image from "next/image";

type MarqueeProps = {
  images: string[];
  speed?: number;
};

const ICON_SIZE = 52;
const GAP = 40;

const Marquee: FC<MarqueeProps> = ({ images, speed = 30 }) => {
  // Repeat icons enough times so they fill well beyond the viewport
  const repeats = 4;
  const items = useMemo(
    () => Array.from({ length: repeats }, () => images).flat(),
    [images]
  );

  // Width of one full set of icons (one "repeats" worth = images.length)
  const singleSetWidth = images.length * (ICON_SIZE + GAP);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className="flex items-center will-change-transform"
        style={{
          gap: `${GAP}px`,
          animation: `marquee-scroll ${singleSetWidth / speed}s linear infinite`,
        }}
      >
        {items.map((image, idx) => (
          <div key={`${image}-${idx}`} className="flex-shrink-0">
            <Image
              className={`grayscale opacity-70 ${
                image === "/assets/marquee/vercel_icon_dark.png"
                  ? "dark:invert"
                  : ""
              }`}
              src={image}
              width={ICON_SIZE}
              height={ICON_SIZE}
              alt={
                image.split("/").pop()?.replace(/[._]/g, " ") ?? "tech logo"
              }
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${singleSetWidth}px);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
