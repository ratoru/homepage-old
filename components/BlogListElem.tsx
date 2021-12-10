import React from "react";
import Link from "next/link";

interface BlogListElemProps {
  href: string;
  title: string;
}

export const BlogListElem: React.FC<BlogListElemProps> = ({ href, title }) => {
  return (
    <Link href={href}>
      <a>
        <li className="flex flex-row items-center hover:shadow text-gray-700 hover:text-pacific-coast rounded-md py-6 pr-4 group relative">
          {/* Closed Book */}
          <svg
            className="mx-4 group-hover:opacity-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          {/* Open Book */}
          <svg
            className="mx-4 opacity-0 group-hover:opacity-100 absolute left-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <p className="text-xl md:text-2xl">{title}</p>
        </li>
      </a>
    </Link>
  );
};
