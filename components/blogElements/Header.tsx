import { Author } from "../../util/authors";

interface HeaderProps {
  title: string;
  author: Author;
}

export const Header: React.FC<HeaderProps> = ({ title, author }) => {
  return (
    <header className="p-16">
      <h1 className="text-3xl font-extrabold text-gray-900 text-center tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem]">
        {title}
      </h1>
      <div className="flex">
        <img src={author.avatar} className="h-8" />
      </div>
    </header>
  );
};
