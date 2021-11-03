import "tailwindcss/tailwind.css";
import "../styles/markdown-base.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
