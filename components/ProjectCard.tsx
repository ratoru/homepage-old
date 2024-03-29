import React from "react";
import Link from "next/link";

interface ProjectCardProps {
  href: string;
  imgSrc: string;
  title: string;
  tags: string;
  description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  imgSrc,
  title,
  tags,
  description,
}) => {
  return (
    <ul className="flex flex-row mt-4 bg-gray-50 rounded-lg max-w-sm shadow-md p-10">
      <div className="w-1/3 flex items-center">
        <img src={imgSrc} className="w-full" alt={`${title}'s logo`} />
      </div>
      <div className="flex flex-col w-2/3 ml-10">
        <Link href={href}>
          <a>
            <h3 className="text-xl font-medium text-gray-900 hover:text-pacific-coast">
              {title}
            </h3>
          </a>
        </Link>
        <div className="text-gray-400 mt-1">{tags}</div>
        <p className="text-gray-700 mt-4">{description}</p>
      </div>
    </ul>
  );
};
