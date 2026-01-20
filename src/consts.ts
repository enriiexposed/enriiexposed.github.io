import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Enrique Ríos Portfolio",
  EMAIL: "rios04enrique@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Enrique Rios' Astro Nano based portfolio, a modified version of the original theme by Mark Horn.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work Experience",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/enriiexposed"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/enrique-rios-rodriguez",
  }
];
