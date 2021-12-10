import React from "react";
import Link from "next/link";

export const BackButton: React.FC = () => {
  return (
    <Link href="/">
      <a className="group">
        <img
          src="/icons/chevron-left.svg"
          className="group-hover:-translate-x-3 inline transition-all ease-in-out duration-100"
        />
        Home
      </a>
    </Link>
  );
};

export default BackButton;
