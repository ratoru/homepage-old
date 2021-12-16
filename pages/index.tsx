import React from "react";
import Head from "next/head";
import { PersonalInfo } from "../components/blogElements/PersonalInfo";
import { BlogListElem } from "../components/BlogListElem";
import { ProjectCard } from "../components/ProjectCard";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" type="image/svg+xml" href="/RTR-logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d8dee9" />
        <meta property="og:url" content="https://ratoru.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Raphael's Homepage" />
        <meta
          property="og:description"
          content="Hi, I'm Raphael. Learn about what makes me unique on my homepage."
        />
        <meta property="og:image" content="https://ratoru.com/rtr-logo.png" />
        <link rel="apple-touch-icon" href="/rtr-logo.png" />

        <title>Raphael's Home</title>
        <meta
          name="description"
          content="Hi, I'm Raphael. Learn about what makes me unique on my website. "
        />
      </Head>
      <div className="font-sans">
        <div className="flex flex-col w-full items-center">
          <div className="text-center mt-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-serif">
              <span>Hi, I'm </span>
              <img
                src="/RTR-logo.svg"
                className="inline h-24 md:h-28 -mr-2"
                alt="Ratoru's R logo"
              />
              <span>aphael!</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 mt-12">
              I create things. <br />
              During the day I am an MCS student at Stanford University. <br />
              At night I am a roundnet enthusiast and music lover.
            </p>
          </div>
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 font-serif mt-16">
            Projects
          </h2>
          <ul className="mt-2">
            <ProjectCard
              href="https://spikestats.ratoru.com"
              imgSrc="/projects/roundnet-logo-color.svg"
              title="SpikeStats"
              tags="Next.js, Rust"
              description="Keep track of your stats while playing roundnet with your friends."
            />
            <ProjectCard
              href="https://www.raycast.com/ratoru"
              imgSrc="/projects/programming-student.svg"
              title="Raycast Extensions"
              tags="Open Source"
              description="Made Google Maps Search and HazeOver Controls."
            />
          </ul>
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 font-serif mt-16">
            Blog
          </h2>
          <ul className="mt-2">
            <BlogListElem href="/blog/principles" title="Guiding Principles" />
            <BlogListElem
              href="/blog/terminal"
              title="My clean and simple terminal setup"
            />
            <BlogListElem
              href="/blog/productivity"
              title="MacOS Productivity Hacks"
            />
          </ul>
        </div>
        <PersonalInfo />
      </div>
    </React.Fragment>
  );
}
