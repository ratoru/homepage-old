import React from "react";
import Link from "next/link";

export const BackButton: React.FC = () => {
  return (
    <div className="group mt-12">
      <Link href="/">
        <a style={{ letterSpacing: "0.03em" }}>
          <img
            src="/icons/chevron-left.svg"
            className="pb-1 group-hover:-translate-x-3 inline transform transition ease-in-out duration-100"
          />
          HOME
        </a>
      </Link>
    </div>
  );
};

export default BackButton;
