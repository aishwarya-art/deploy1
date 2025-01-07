import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Laravel Multiple Database Setup with Dynamic Database Switching",
    paragraph:
      "Defining multiple database connections in the configuration file and switch between databases based on application requirements",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Aishwarya MS",
      image: "/images/blog/profilecrop.jpg",
      designation: "Full Stack Developer",
    },
    tags: ["Dynamic Database Switching"],
    publishDate: "Oct 1,2024",
    url: "https://medium.com/devops-dev/laravel-multiple-database-setup-with-dynamic-database-switching-44cc2f86b4d9",

  },
  {
    id: 2,
    title: "Microsoft Outlook Meeting Integration - Using Graph API and Azure AD",
    paragraph:
      "Learn how to automate Outlook meeting scheduling with Microsoft Graph API, including Azure AD setup, API permissions.",
    image: "/images/blog/blog2.png",
    author: {
      name: "Aishwarya MS",
      image: "/images/blog/profilecrop.jpg",
      designation: "Full Stack Developer",
    },
    tags: ["Microsoft Graph API."],
    publishDate: "Sep 16, 2024",
    url: "https://medium.com/devops-dev/seamless-microsoft-outlook-meeting-integration-create-online-meeting-events-on-behalf-of-a-user-368e45626d9c",

  },
  {
    id: 3,
    title: "Integrating Firebase Firestore with React JS for Database using Firebase Console",
    paragraph:
      "Enabling seamless database management for your web applications. It covers setup, configuration, and essential CRUD operations",
    image: "/images/blog/blog3.webp",
    author: {
      name: "Aishwarya MS",
      image: "/images/blog/profilecrop.jpg",
      designation: "Full Stack Developer",
    },
    tags: ["Database"],
    publishDate: "Sep 26, 2024",
    url: "https://medium.com/devops-dev/using-firebase-firestore-with-react-js-for-database-0412d3009ce7",

  },
];
export default blogData;
