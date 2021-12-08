import { Author } from "./authors";

export interface metaType {
  title: string;
  description: string;
  date: string;
  url: string;
  image: string;
  authors: Author[];
}
