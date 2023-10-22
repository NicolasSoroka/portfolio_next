import Link from "next/link";
import Image from "next/image";
import React from "react";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-2 pt-2">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow"
        />
      </Link>
      <Theme />
    </nav>
  );
};

export default Navbar;
