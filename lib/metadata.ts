import { AuthorType, SiteMetaData } from "@/types";

import { socialProfiles } from "./social-data";

export const BASE_URL =
  `https://${process.env.VERCEL_URL}` ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  `http://localhost:${process.env.PORT || 3000}`;

export const defaultAuthor: AuthorType = {
  name: "Toby",
  handle: "@gmail.com",
  socialProfiles,
  email: "jiangjianwen082@gmail.com",
  website: "https://nextjs.org",
  jobTitle: "Full-stack developer",
  company: "Self-Employ",
  availableForWork: true,
  location: {
    city: "CA",
    media: "/losangeles.jpg",
  },
};

const defaultTitle = `${defaultAuthor.name}'s Blog`;
const defaultDescription = `I'm ${defaultAuthor.name}. Embrace new tech and skills to digitalize more things 🌴.`;

const siteMetadata: SiteMetaData = {
  title: {
    template: `%s | ${defaultTitle}`,
    default: defaultTitle,
  },
  description: defaultDescription,
  siteRepo: "https://github.com/toby082/digital-garden",
  newsletterProvider: "mailerlite",
  newsletterUrl: "https://developreneur.davidlevai.com",
  analyticsProvider: "umami",
  defaultTheme: "system",
  activeAnnouncement: true,
  announcement: {
    buttonText: "Email Me →",
    link: "mailto: jiangjianwen082@gmail.com",
  },
  postsPerPage: 10,
  postsOnHomePage: 8,
  projectsOnHomePage: 4,
};

export default siteMetadata;
