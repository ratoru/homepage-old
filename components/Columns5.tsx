import React, { useState } from "react";
import classNames from "classnames";

export const Columns5 = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const handleClose = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
    setIsOpen5(false);
  };
  const closeClasses = classNames({
    "fa fa-close strip__close": true,
    "strip__close--show": isOpen1 || isOpen2 || isOpen3 || isOpen4 || isOpen5,
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
  const stripClasses4 = classNames({
    strips__strip: true,
    "strips__strip--expanded": isOpen4,
  });
  const stripClasses5 = classNames({
    strips__strip: true,
    "strips__strip--expanded": isOpen5,
  });
  console.log(closeClasses);
  console.log(stripClasses1);
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
            <h2>Ettrics</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              sapiente deserunt consectetur, quod reiciendis corrupti quo ea
              aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis
              quibusdam facilis, illo voluptates odit!
            </p>
            <p>
              <a href="https://twitter.com/ettrics" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
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
            <h2>Ettrics</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              sapiente deserunt consectetur, quod reiciendis corrupti quo ea
              aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis
              quibusdam facilis, illo voluptates odit!
            </p>
            <p>
              <a href="https://twitter.com/ettrics" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
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
            <h2>Ettrics</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              sapiente deserunt consectetur, quod reiciendis corrupti quo ea
              aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis
              quibusdam facilis, illo voluptates odit!
            </p>
            <p>
              <a href="https://twitter.com/ettrics" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </p>
          </div>
        </div>
      </article>
      <article
        className={stripClasses4}
        onClick={() => {
          setIsOpen4(true);
        }}
      >
        <div className="strip__content">
          <h1 className="strip__title" data-name="Sit">
            Awesome
          </h1>
          <div className="strip__inner-text">
            <h2>Ettrics</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              sapiente deserunt consectetur, quod reiciendis corrupti quo ea
              aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis
              quibusdam facilis, illo voluptates odit!
            </p>
            <p>
              <a href="https://twitter.com/ettrics" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </p>
          </div>
        </div>
      </article>
      <article
        className={stripClasses5}
        onClick={() => {
          setIsOpen5(true);
        }}
      >
        <div className="strip__content">
          <h1 className="strip__title" data-name="Amet">
            Contact
          </h1>
          <div className="strip__inner-text">
            <h2>Ettrics</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              sapiente deserunt consectetur, quod reiciendis corrupti quo ea
              aliquid! Repellendus numquam quo, voluptate. Suscipit soluta omnis
              quibusdam facilis, illo voluptates odit!
            </p>
            <p>
              <a href="https://twitter.com/ettrics" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </p>
          </div>
        </div>
      </article>
      <i className={closeClasses} onClick={handleClose} />
    </section>
  );
};

//   var Expand = (function () {
//     var tile = $(".strips__strip");
//     var tileLink = $(".strips__strip > .strip__content");
//     var tileText = tileLink.find(".strip_inner_text");
//     var stripClose = $(".strip__close");

//     var expanded = false;

//     var open = function () {
//       var tile = $(this).parent();

//       if (!expanded) {
//         tile.addClass("strips__strip--expanded");
//         // add delay to inner text
//         tileText.css(
//           "transition",
//           "all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)"
//         );
//         stripClose.addClass("strip__close--show");
//         stripClose.css(
//           "transition",
//           "all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)"
//         );
//         expanded = true;
//       }
//     };

//     var close = function () {
//       if (expanded) {
//         tile.removeClass("strips__strip--expanded");
//         // remove delay from inner text
//         tileText.css(
//           "transition",
//           "all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)"
//         );
//         stripClose.removeClass("strip__close--show");
//         stripClose.css(
//           "transition",
//           "all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)"
//         );
//         expanded = false;
//       }
//     };

//     var bindActions = function () {
//       tileLink.on("click", open);
//       stripClose.on("click", close);
//     };

//     var init = function () {
//       bindActions();
//     };

//     return {
//       init: init,
//     };
//   })();

//   Expand.init();
