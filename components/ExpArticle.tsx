import React, { useState } from "react";
import classNames from "classnames";

interface ArticleProps {
  header1: string;
  header2: string;
  paragraph: string;
}

export const ExpArticle: React.FC<ArticleProps> = ({
  header1,
  header2,
  paragraph,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeClasses = classNames({
    "fa fa-close strip__close": true,
    "strip__close--show": isOpen,
  });
  const stripClasses = classNames({
    strips__strip: true,
    "strips__strip--expanded": isOpen,
  });

  return (
    <React.Fragment>
      <article className={stripClasses} onClick={() => setIsOpen(true)}>
        <div className="strip__content">
          <h1 className="strip__title" data-name="Lorem">
            {header1}
          </h1>
          <div className="strip__inner-text">
            <h2>{header2}</h2>
            <p>{paragraph}</p>
            <p>
              <a href="https://twitter.com/ettrics" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </p>
          </div>
        </div>
      </article>
      <i className={closeClasses} onClick={() => setIsOpen(false)}></i>
    </React.Fragment>
  );
};
