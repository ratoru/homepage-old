import Link from "next/link";
import tinytime from "tinytime";
import { Author } from "../../util/authors";

interface HeaderProps {
  title: string;
  date: string;
  author: Author;
}

export const Header: React.FC<HeaderProps> = ({ date }) => {
  return (
    <header className="flex flex-col pt-16">
      <div className="flex flex-row justify-between mb-8 md:mb-12">
        <Link href="/">
          <a className="hover:-translate-x-3 transition-all ease-in-out duration-100">
            &larr; Home
          </a>
        </Link>
        <span className="leading-6 font-medium text-gray-500">
          <time dateTime={date}>
            {tinytime("{dddd}, {MMMM} {DD}, {YYYY}").render(new Date(date))}
          </time>
        </span>
      </div>
    </header>
  );
};
