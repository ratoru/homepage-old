import Head from "next/head";
import Link from "next/link";
import { Header } from "./blogElements/Header";
import { PersonalInfo } from "./blogElements/PersonalInfo";

export default function Layout({ children, meta }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        /* HTML Meta Tags */
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
        <link rel="shortcut icon" type="image/svg+xml" href="/RTR-logo.svg" />
        /* OG Meta Tags */
        <meta
          property="og:url"
          content={`https://ratoru.com/blog/${meta.url}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={`https://ratoru.com/blog/${meta.image}`}
        />
        <link rel="apple-touch-icon" href={`/blog/${meta.image}`} />
      </Head>
      <main className="flex flex-col items-center w-screen">
        <article className="prose lg:prose-xl px-8">
          <Header
            title={meta.title}
            date={meta.date}
            author={meta.authors[0]}
          />
          {children}
        </article>
        <PersonalInfo />
      </main>
    </>
  );
}
