export interface Author {
  name: string;
  avatar: string;
}

export const raphael: Author = {
  name: "Raphael",
  avatar: "/personal-picture.png",
};

export interface metaType {
  title: string;
  description: string;
  date: string;
  url: string;
  image: string;
  authors: Author[];
}
