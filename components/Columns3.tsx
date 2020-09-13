import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";

export const Columns3 = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const handleClose = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
  };
  const closeClasses = classNames({
    "fa fa-close strip__close": true,
    "strip__close--show": isOpen1 || isOpen2 || isOpen3,
  });
  const stripClasses1 = classNames({
    strips__strip: true,
    "strips__strip--expanded": isOpen1,
  });
  const stripClasses2 = classNames({
    strips__strip: true,
    "strips__strip--expanded": isOpen2,
  });
  const stripClasses3 = classNames({
    strips__strip: true,
    "strips__strip--expanded": isOpen3,
  });

  return (
    <section className="strips">
      <article
        className={stripClasses1}
        onClick={() => {
          setIsOpen1(true);
        }}
      >
        <div className="strip__content">
          <h1 className="strip__title" data-name="Lorem">
            Raphael
          </h1>
          <div className="strip__inner-text">
            <h2>About Me</h2>
            <p>
              Welcome! My name is Raphael. <br /> During the day I am an MCS
              student at Stanford University.
              <br />
              At night I'm a roundnet enthusiast and music lover.
            </p>
            <p>
              <Link href="https://github.com/ratoru">
                <a target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </article>
      <article
        className={stripClasses2}
        onClick={() => {
          setIsOpen2(true);
        }}
      >
        <div className="strip__content">
          <h1 className="strip__title" data-name="Ipsum">
            Projects
          </h1>
          <div className="strip__inner-text">
            <h2>My Projects</h2>
            <p>
              Check out my most recent project{" "}
              <Link href="https://spikestats.ratoru.com">
                <a>SpikeStats</a>
              </Link>
              .
            </p>
            <p>
              <Link href="https://spikestats.ratoru.com">
                <a target="_blank">
                  <img
                    src="/roundnet-logo-color.svg"
                    alt="Logo"
                    style={{
                      width: "90px",
                      height: "75px",
                    }}
                  />
                </a>
              </Link>
            </p>
          </div>
        </div>
      </article>
      <article
        className={stripClasses3}
        onClick={() => {
          setIsOpen3(true);
        }}
      >
        <div className="strip__content">
          <h1 className="strip__title" data-name="Dolor">
            Blog
          </h1>
          <div className="strip__inner-text">
            <h2>Raphael's Blog</h2>
            <p>I don't have any articles yet! Please come back later.</p>
            <p>
              <Link href="https://github.com/ratoru">
                <a target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </article>
      <i className={closeClasses} onClick={handleClose} />
    </section>
  );
};
