import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { callbackify } from "util";

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
          <h1 className="strip__title" data-name="Lorem" style = {{ fontWeight: 300, textAlign: "center" }}>
            Raphael
          </h1>
          <div className="strip__inner-text">
            <img
              src="/personal-picture.png"
              alt="Raphael's Foto"
              style={{
                width: "110px",
                height: "110px",
              }}
            />
            <h2 style = {{ fontWeight: 300, textAlign: "center", color: "black" }}>About Me</h2>
            <p style = {{fontSize: 'calc(16px + 1vw)' }}>
              Welcome! My name is Raphael. <br /> During the day I am an MCS
              student at Stanford University.
              <br />
              At night I'm a roundnet enthusiast and music lover.
            </p>
            <p>
              <Link href="https://github.com/ratoru">
                <a style={{ marginRight: 20 }}>
                  <i className="fa fa-github" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/ratoru/">
                <a>
                  <i className="fa fa-linkedin" />
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
          <h1 className="strip__title" data-name="Ipsum" style = {{ fontWeight: 300, textAlign: "center" }}>
            Projects
          </h1>
          <div className="strip__inner-text">
            <h2 style = {{ fontWeight: 300, textAlign: "center", color: 'black' }} >My Projects</h2>
            <p>
              <Link href={isOpen2 ? "https://spikestats.ratoru.com" : ""}>
                <a>
                  <img
                    src="/roundnet-logo-color.svg"
                    alt="Logo"
                    style={{
                      width: "108px",
                      height: "90px",
                    }}
                  />
                </a>
              </Link>
            </p>
            <p style = {{fontSize: 'calc(16px + 1vw)' }}>
              Check out my most recent project{" "}
              <Link href={isOpen2 ? "https://spikestats.ratoru.com" : ""}>
                <a style={{ color: "#2e3440" }}>SpikeStats</a>
              </Link>
              .
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
          <h1 className="strip__title" data-name="Dolor" style = {{ fontWeight: 300, textAlign: "center", color: 'black' }}>
            Blog
          </h1>
          <div className="strip__inner-text">
            <h2 style = {{ fontWeight: 300, textAlign: "center", color: 'black' }}>Raphael's Blog</h2>
            <p style = {{fontSize: 'calc(16px + 1vw)' }}>
              <Link href="blog/principles"> 
                <a>
                  <i className="fa fa-balance-scale" style={{marginRight: 20}} /> 
                  Guiding Principles.
                </a>
             </Link>
            </p>
            <p style = {{fontSize: 'calc(16px + 1vw)' }}>
              <Link href="blog/terminal"> 
                <a>
                  <i className="fa fa-balance-scale" style={{marginRight: 20}} /> 
                  What your terminal should look like. ;)
                </a>
             </Link>
            </p>
            <p>
              <Link href="https://github.com/ratoru">
                <a style={{ marginRight: 20 }}>
                  <i className="fa fa-github"></i>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/ratoru/">
                <a>
                  <i className="fa fa-linkedin" />
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
