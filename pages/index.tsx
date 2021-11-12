import React from "react";
import Head from "next/head";
import { PersonalInfo } from "../components/PersonalInfo";
import { BlogListElem } from "../components/BlogListElem";
import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" type="image/svg+xml" href="/RTR-logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d8dee9" />

        <title>Raphael Ruban</title>
      </Head>
      <div className="font-sans">
        <div className="flex flex-col w-full items-center">
          <div className="text-center mt-16">
            <h1 className="text-4xl font-extrabold text-gray-900 font-serif">
              <span>Hi, I'm </span>
              <img src="/RTR-logo.svg" className="inline h-24 -mr-2" />
              <span>aphael!</span>
            </h1>
            <p className="text-lg text-gray-700 mt-8">
              I create things. <br />
              During the day I am an MCS student at Stanford University. <br />
              At night I am a roundnet enthusiast and music lover.
            </p>
          </div>
          <h2 className="font-bold text-3xl text-gray-900 font-serif mt-16">
            Projects
          </h2>
          <ul className="mt-2">
            <ProjectCard
              href="https://spikestats.ratoru.com"
              imgSrc="/roundnet-logo-color.svg"
              title="SpikeStats"
              tags="Next.js, Rust"
              description="Keep track of your stats while playing roundnet with your friends."
            />
          </ul>
          <h2 className="font-bold text-3xl text-gray-900 font-serif mt-16">
            Blog
          </h2>
          <ul className="mt-2">
            <BlogListElem href="/blog/principles" title="Guiding Principles" />
            <BlogListElem
              href="/blog/terminal"
              title="My clean and simple terminal setup"
            />
          </ul>
        </div>
        <PersonalInfo />
      </div>
    </React.Fragment>
  );
}
