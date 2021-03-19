import React from "react";
import { Author } from "./Author";
import { Markdown } from "./Markdown";
import { PostData } from "../util/loader";
import { PostMeta } from "./PostMeta";
import { BackButton } from "./BackButton";
import { PersonalInfo } from "./PersonalInfo";

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle } = post;
  return (
    <React.Fragment>
      <div className="unreset">
        <div className="md-wrapper">
          <div className="blog-post">
            <BackButton />
            <PostMeta post={post} />
            {post.bannerPhoto && (
              <img className="blog-post-image" src={post.bannerPhoto} />
            )}

            <div className="blog-post-title">
              {title && <h1>{title}</h1>}
              {subtitle && <h2>{subtitle}</h2>}
              <br />
              <Author post={post} />
            </div>

            <div className="blog-post-content">
              <Markdown source={post.content} />
            </div>
          </div>
        </div>
      </div>
      <PersonalInfo />
    </React.Fragment>
  );
};
