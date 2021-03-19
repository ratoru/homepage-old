import React from "react";
import { format } from "fecha";
import { PostData } from "../util/loader";
import styles from "./BlogPost.module.css";

export const FollowButton = () => {
  return (
    <a href="/newsletter">
      <div className={styles.followButton}>Follow</div>
    </a>
  );
};

export const Author: React.FC<{ post: PostData }> = (props) => {
  return (
    <div className={styles.authorContainer}>
      <div className={styles.author}>
        {props.post.authorPhoto && (
          <img src={props.post.authorPhoto} className={styles.authorImage} />
        )}
        <AuthorLines post={props.post} />
      </div>
    </div>
  );
};

export const AuthorLines: React.FC<{ post: PostData }> = (props) => {
  return (
    <div>
      <p className={styles.authorLine}>
        {props.post.author && <span>{props.post.author}</span>}

        {props.post.authorTwitter && (
          <span>
            {" "}
            <a
              href={`https://twitter.com/${props.post.authorTwitter}`}
            >{`@${props.post.authorTwitter}`}</a>{" "}
          </span>
        )}
      </p>
      <p className={styles.authorLineSubtle}>
        {props.post.datePublished
          ? format(new Date(props.post.datePublished), "MMMM Do, YYYY")
          : ""}
      </p>
    </div>
  );
};
