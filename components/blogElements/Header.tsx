import tinytime from "tinytime";
import { Author } from "../../util/authors";

interface HeaderProps {
  title: string;
  date: string;
  author: Author;
}

export const Header: React.FC<HeaderProps> = ({ title, date, author }) => {
  return (
    <header className="flex flex-col items-center pt-16">
      <h1 className="text-3xl font-extrabold text-gray-900 text-center tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem]">
        {title}
      </h1>
      <div className="flex m-8 md:m-12">
        <img
          src={author.avatar}
          alt={`${author.name}'s foto`}
          className="w-20 h-20 md:w-32 md:h-32 border-2 md:border-4 rounded-full border-gray-300 outline-none"
        />
        <div className="flex flex-col justify-center ml-8">
          <div className="text-xl md:text-2xl text-gray-900 font-medium">
            {author.name}
          </div>
          <dd className="text-lg md:text-xl leading-6 font-medium text-gray-500 mt-1 md:mt-2">
            <time dateTime={date}>
              {tinytime("{dddd}, {MMMM} {DD}, {YYYY}").render(new Date(date))}
            </time>
          </dd>
        </div>
      </div>
    </header>
  );
};
