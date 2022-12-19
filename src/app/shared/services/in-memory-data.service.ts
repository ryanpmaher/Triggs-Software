import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const pages = [
      {
        id: 1,
        name: "intro",
        tagline: "Credentials",
        title: "We bring a duality of diverse industry experience",
        description:
          "Stephen Maher got his Masters in Computer Science and for the last 30 year has been a lead software engineer at NASA Goddard Space Flight Center. His son, Ryan Maher graduated from THE Ohio State University and has been a software engineer at Capital One bank for the last 4 years.",
      },
      {
        id: 2,
        name: "clients",
        tagline: "TRUST",
        title: "Companies who use our services",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
      },
      {
        id: 3,
        name: "services",
        tagline: "Why Triggs?",
        title: "Bringing Immediate Value to your Company",
        description:
          "As a small software firm, Triggs Software current only takes one client at a time giving them their sole and undivided focus. We are a young and hungry company devoted to giving clients meaningful results at a fair price. Our number one priority is growing our reputation of giving our customers quality services."
      },
      {
        id: 4,
        name: "testimonials",
        tagline: "FEEDBACK",
        title: "What our customers are saying",
        description: "",
      },
      {
        id: 5,
        name: "pricing",
        tagline: "YOUR CHOICE",
        title: "We have the right package for you",
        description: "",
      },
      {
        id: 6,
        name: "footer",
        tagline: "Made with ❤ by",
        developer: "Ryan Maher",
        developerlink: "andrewbateman.org",
      },
      {
        id: 7,
        name: "header",
        tagline: "A FATHER & SON SOFTWARE SOLUTIONS COMPANY",
        title:
          "Combining years of software developement experience from the public and private sector, Triggs software built to streamline and modernize your technology stack.",
        buttontext: "Discover Our Team",
        buttonlink: "/about",
        image: "banner-image-1.png",
      },
    ];
    const features = [
      {
        id: 1,
        icon: "tasks",
        title: "Data Processing",
        description:
          "Stephen's work at NASA centered around data captured by telescopes and designing systems to process and visualize this data.",
      },
      {
        id: 2,
        icon: "eye",
        title: "Technical Consulting",
        description:
          "Both Stephen and Ryan have served as internal/external software consultants at times in their career helping guide technical decisions.",
      },
      {
        id: 3,
        icon: "cloud",
        title: "Cloud Systems",
        description:
          "Ryan has spent his entire proffesional career working with Fortune 500 enterprise cloud computing systems and is a certified AWS Solutions Architect.",
      },
      {
        id: 4,
        icon: "home",
        title: "Architecture Design",
        description:
          "Both developers have designed large scale software projects and know how to navigate full stack software applications as well as embedded systems.",
      },
    ];
    const images = [
      { id: 1, name: "gallery-image-1.jpg" },
      { id: 2, name: "gallery-image-2.jpg" },
      { id: 3, name: "gallery-image-3.jpg" },
      { id: 4, name: "gallery-image-4.jpg" },
      { id: 5, name: "gallery-image-5.jpg" },
      { id: 6, name: "gallery-image-6.jpg" },
    ];
    const menu = [
      { id: 1, title: "Home", link: "/home"},
      { id: 2, title: "About", link: "/about"},
      { id: 3, title: "Services", link: "/services"},
      { id: 5, title: "Testimonials", link: "/testimonials"},
      { id: 6, title: "contact", link: "/contact"},
    ];
    const companies = [
      {
        id: 1,
        name: "Tree",
        weblink: "company-logo1.png",
        logo: "company-logo1.png",
      },
      {
        id: 2,
        name: "Fingerprint",
        weblink: "company-logo2.png",
        logo: "company-logo2.png",
      },
      {
        id: 3,
        name: "The Man",
        weblink: "company-logo3.png",
        logo: "company-logo3.png",
      },
      {
        id: 4,
        name: "Mustache",
        weblink: "company-logo4.png",
        logo: "company-logo4.png",
      },
      {
        id: 5,
        name: "Goat",
        weblink: "company-logo5.png",
        logo: "company-logo5.png",
      },
      {
        id: 6,
        name: "Justice",
        weblink: "company-logo6.png",
        logo: "company-logo6.png",
      },
      {
        id: 7,
        name: "Ball",
        weblink: "company-logo7.png",
        logo: "company-logo7.png",
      },
      {
        id: 8,
        name: "Cold",
        weblink: "company-logo8.png",
        logo: "company-logo8.png",
      },
      {
        id: 9,
        name: "Cold",
        weblink: "company-logo9.png",
        logo: "company-logo9.png",
      },
    ];
    const feedback = [
      {
        id: 1,
        name: "John Doe",
        userimage: "user-1.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "ABC",
      },
      {
        id: 2,
        name: "Roslyn Doe",
        userimage: "user-2.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "Happy Customer",
      },
      {
        id: 3,
        name: "Thomas Doe",
        userimage: "user-3.jpg",
        comments:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        company: "Happy Customer",
      },
    ];
    const plans = [
      {
        id: 1,
        title: "PERSONAL",
        subtitle: "The standard version",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "19",
        currency: "₹",
        downloads: "5 Downloads",
        extensions: "2 Extensions",
        tutorials: "Tutorials",
        support: "Forum Support",
        updates: "1 year free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: false,
      },
      {
        id: 2,
        title: "STUDENT",
        subtitle: "Most popular choice",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "29",
        currency: "₹",
        downloads: "15 Downloads",
        extensions: "5 Extensions",
        tutorials: "Tutorials with files",
        support: "Forum Support",
        updates: "2 year free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: true,
      },
      {
        id: 3,
        title: "BUSINESS",
        subtitle: "For the whole team",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        price: "49",
        currency: "₹",
        downloads: "Unlimited Downloads",
        extensions: "Unlimited Downloads",
        tutorials: "HD Video Tutorials",
        support: "Chat Support",
        updates: "Lifetime free updates",
        buttontext: "BUY TODAY",
        buttonlink: "#",
        featured: false,
      },
    ];
    const websites = [
      {
        id: 1,
        link: "https://facebook.com/",
        title: "Facebook",
        target: "_blank",
        username: "Thor",
        icon: "facebook",
      },
      // {
      //   id: 2,
      //   link: "https://googleplus.com/",
      //   title: "Google+",
      //   target: "_blank",
      //   username: "+jagmohan",
      //   icon: "google-plus",
      // },
      {
        id: 3,
        link: "https://twitter.com/",
        title: "Twitter",
        target: "_blank",
        username: "joker",
        icon: "twitter",
      },
      {
        id: 4,
        link: "https://instagram.com/",
        title: "Instagram",
        target: "_blank",
        username: "superman",
        icon: "instagram",
      },
      // {
      //   id: 5,
      //   link: "https://behance.com/",
      //   title: "Behance",
      //   target: "_blank",
      //   username: "jagmohan",
      //   icon: "behance",
      // },
    ];

    return {
      menu,
      pages,
      features,
      images,
      companies,
      feedback,
      plans,
      websites,
    };
  }
}
