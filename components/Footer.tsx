import React from "react";
import { socialMediaLinks } from "@/constants";
import Image from "next/image";
import { randomUUID } from "crypto";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center gap-4 border py-4 mt-auto">
      <p>Inspired by Vercel UI</p>
      <p>{year}</p>
      <div className="flex gap-3">
        {socialMediaLinks.map((link) => (
          <Link
            key={randomUUID()}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2"
          >
            <Image
              className="dark:invert"
              src={link.img}
              alt={link.alt}
              height={24}
              width={24}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
