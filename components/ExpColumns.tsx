import React from "react";
import { ExpArticle } from "./ExpArticle";

interface ArticleContent {
  header1: string;
  header2: string;
  paragraph: string;
}

const columns: ArticleContent[] = [
  {
    header1: "Raphael",
    header2: "About me",
    paragraph: "Some long text",
  },
  {
    header1: "Projects",
    header2: "My Projects",
    paragraph: "Some long text",
  },
  {
    header1: "Blog",
    header2: "My Blog",
    paragraph: "Some long text",
  },
  {
    header1: "Awesome",
    header2: "Awesome me",
    paragraph: "Some long text",
  },
  {
    header1: "Contact",
    header2: "Contact me",
    paragraph: "Some long text",
  },
];

export const ExpColumns: React.FC = () => {
  return (
    <section className="strips">
      {columns.map((column) => {
        return (
          <ExpArticle
            key={column.header1}
            header1={column.header1}
            header2={column.header2}
            paragraph={column.paragraph}
          />
        );
      })}
    </section>
  );
};
