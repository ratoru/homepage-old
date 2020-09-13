import Head from "next/head";
// import { ExpColumns } from "../components/ExpColumns";
import { Columns3 } from "../components/Columns3";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link
          rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/man-face-with-glasses.svg"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Ratoru</title>
      </Head>
      <Columns3 />
      <style jsx>{`
        .container {
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}
