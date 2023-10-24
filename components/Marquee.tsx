import React, { FC } from "react";
import Image from "next/image";

type MarqueeProps = {
  images: string[];
};

const Marquee: FC<MarqueeProps> = ({ images }) => {
  return (
    <div className="w-full">
      <div className="relative m-auto h-[100px] w-auto overflow-hidden">
        <ul className="flex w-[calc(250px*7)] animate-scroll">
          {images.map((image) => (
            <li
              className="flex h-[100px] w-[100px] items-center justify-center"
              key={image}
            >
              <Image src={image} width={60} height={60} alt={`${image}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Marquee;
