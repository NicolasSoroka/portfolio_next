import React, { FC } from "react";
import Image from "next/image";

type MarqueeProps = {
  images: string[];
};

const Marquee: FC<MarqueeProps> = ({ images }) => {
  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]"
    >
      <div className="flex w-max animate-marquee items-center gap-10 py-8">
        {/* Duplicate the list so scrolling loops seamlessly */}
        {[...images, ...images].map((image, idx) => (
          <div key={`${image}-${idx}`} className="flex-shrink-0">
            <Image
              className={
                image === "/assets/marquee/vercel_icon_dark.png"
                  ? "dark:invert"
                  : ""
              }
              src={image}
              width={52}
              height={52}
              alt={image.split("/").pop()?.replace(/[._]/g, " ") ?? "tech logo"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
