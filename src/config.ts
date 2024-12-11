import type { PostFilter } from "./utils/posts";

export interface SiteConfig {
  title: string;
  slogan: string;
  description?: string;
  site: string,
  social: {
    github?: string;
    bluesky?: string;
    linkedin?: string;
    email?: string;
    rss?: boolean;
  };
  homepage: PostFilter;
}

export const siteConfig: SiteConfig = {
  site: "https://example.com/", // your site url
  title: "Maya Engel",
  slogan: "",
  description: "write a description here",
  social: {
    github: "https://github.com/username", // leave empty if you don't want to show the github
    bluesky: "https://bsky.app/profile/mayacomposer.bsky.social",
    linkedin: "https://www.linkedin.com/in/maya-engel-composer",
    email: "mayaengelmusicexample@gmail.com", // leave empty if you don't want to show the email
    rss: true, // set this to false if you don't want to provide an rss feed
  },
  homepage: {
    maxPosts: 5,
    tags: [],
    excludeTags: [],
  }
};
