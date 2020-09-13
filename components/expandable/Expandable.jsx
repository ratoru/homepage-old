import React from "react";
import styles from "./Expandable.module.scss";

export function Expandable() {
  var Expand = (function () {
    var tile = $(".strips__strip");
    var tileLink = $(".strips__strip > .strip__content");
    var tileText = tileLink.find(".strip_inner_text");
    var stripClose = $(".strip__close");

    var expanded = false;

    var open = function () {
      var tile = $(this).parent();

      if (!expanded) {
        tile.addClass("strips__strip--expanded");
        // add delay to inner text
        tileText.css(
          "transition",
          "all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)"
        );
        stripClose.addClass("strip__close--show");
        stripClose.css(
          "transition",
          "all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)"
        );
        expanded = true;
      }
    };

    var close = function () {
      if (expanded) {
        tile.removeClass("strips__strip--expanded");
        // remove delay from inner text
        tileText.css(
          "transition",
          "all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)"
        );
        stripClose.removeClass("strip__close--show");
        stripClose.css(
          "transition",
          "all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)"
        );
        expanded = false;
      }
    };

    var bindActions = function () {
      tileLink.on("click", open);
      stripClose.on("click", close);
    };

    var init = function () {
      bindActions();
    };

    return {
      init: init,
    };
  })();

  Expand.init();
  return (
    <section className={styles.strips}>
      <article className={styles.strips__strip}>
        <div className={styles.strip__content}>
          <h1 className={styles.strip__title} data-name="Lorem">
            Welcome
          </h1>
          <div className={styles.strip_inner_text}>
            <h2>Welcome</h2>
            <p>
              Hi! This little web app allows you to track your 'Roundnet' games.
              I hope you enjoy it. Please never save any sensitive information
              on this website. Furthermore, this is a programming project I am
              working on in my free time. You can find the code{" "}
              <a href="https://github.com/ratoru/spikestats">here</a>. If you
              have constructive feedback feel free to contact me.
            </p>
          </div>
        </div>
      </article>
      <article className={styles.strips__strip}>
        <div className={styles.strip__content}>
          <h1 className={styles.strip__title} data-name="Ipsum">
            Privacy
          </h1>
          <div className={styles.strip_inner_text}>
            <h2>Privacy</h2>
            <p>
              Never store any sensitive information on this website, i.e. don't
              use your email as a username! I did my best to follow common
              security guidelines, but you shouldn't rely on that. Please
              remember your username! There is no way of getting your account
              back if you lose it.
            </p>
          </div>
        </div>
      </article>
      <article className={styles.strips__strip}>
        <div className={styles.strip__content}>
          <h1 className={styles.strip__title} data-name="Dolor">
            Constraints
          </h1>
          <div className={styles.strip_inner_text}>
            <h2>Constraints</h2>
            <p>
              You'll be logged out every two hours. This web app uses Vercel's
              and Heroku's free plan. This means 1) if no one used the website
              for a long time it will take significantly longer to load. 2) my
              database has a very limited amount of storage. If the database is
              full this website won't work anymore. If you'd like to contribute,
              you're more than welcome to reach out to me.
            </p>
          </div>
        </div>
      </article>
      <article className={styles.strips__strip}>
        <div className={styles.strip__content}>
          <h1 className={styles.strip__title} data-name="Sit">
            Contributions
          </h1>
          <div className={styles.strip_inner_text}>
            <h2>Contributions</h2>
            <p>
              Special thanks to Christina Joo for helping me with the logo
              design.
            </p>
          </div>
        </div>
      </article>
      <article className={styles.strips__strip}>
        <div className={styles.strip__content}>
          <h1 className={styles.strip__title} data-name="Amet">
            Contact
          </h1>
          <div className={styles.strip_inner_text}>
            <h2>Contact</h2>
            <p>You can reach me on github.</p>
          </div>
        </div>
      </article>
      <i className="fa fa-close strip__close"></i>
    </section>
  );
}
