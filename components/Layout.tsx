import Head from "next/head";
import { BackButton } from "./blogElements/BackButton";
import { PersonalInfo } from "./blogElements/PersonalInfo";

export default function Layout({ meta, children }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
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
      <BackButton />
      <article className="prose">{children}</article>
      <PersonalInfo />
    </>
  );
}
