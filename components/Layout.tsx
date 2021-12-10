import Head from "next/head";
import Link from "next/link";
import { Header } from "./blogElements/Header";
import { BackButton } from "./blogElements/BackButton";
import { PersonalInfo } from "./blogElements/PersonalInfo";

export default function Layout({ children, meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="shortcut icon" type="image/svg+xml" href="/RTR-logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
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
        <meta name="description" content={meta.description}></meta>
      </Head>
      <Header title={meta.title} date={meta.date} author={meta.authors[0]} />
      <main className="flex flex-col items-center w-screen">
        <article className="prose lg:prose-xl px-8">
          <Link href="/">
            <a>&larr; Home</a>
          </Link>
          {children}
        </article>
        <PersonalInfo />
      </main>
    </>
  );
}
