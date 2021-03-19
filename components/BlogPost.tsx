import React from "react";
import { Author } from "./Author";
import { Markdown } from "./Markdown";
import { PostData } from "../util/loader";
import { PostMeta } from "./PostMeta";
import { BackButton } from "./BackButton";
import { PersonalInfo } from "./PersonalInfo";
import styles from "./BlogPost.module.css";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle } = post;
  return (
    <div className={styles.blogPost}>
      <BackButton />
      <PostMeta post={post} />
      {post.bannerPhoto && (
        <img className={styles.blogPostImage} src={post.bannerPhoto} />
      )}

      <div className={styles.blogPostTitle}>
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        <br />
        <Author post={post} />
      </div>

      <div className={styles.blogPostContent}>
        <Markdown source={post.content} />
      </div>
      <PersonalInfo />
    </div>
  );
};
