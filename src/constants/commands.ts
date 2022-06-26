export const Commands = [
  {
    commandIdentifier: "work",
    title: "Experience as a web developer",
    type: "web-developer",
    lines: [
      "- Working as a commercial web developer since January of 2019",
      "- Specialize on creating web platforms that allow close interaction with end user. Actively involved and interested in developing independent projects and startups. Lately been working in EdTech and E-commerce spheres.",
    ],
    projects: [],
    lists: [
      {
        title: "-  Skills",
        items: [
          "JavaScript",
          "TypeScript",
          "Vue js",
          "Nuxt js",
          "Node js",
          "Nest js",
          "Express js  ",
          "HTML",
          "CSS",
        ],
      },
    ],
    imagePath: "",
    hints: ["Type ‘projects’ to see the list of projects"],
    error: "",
  },
  {
    commandIdentifier: "student",
    title: "Bussines school student",
    type: "student",
    lines: [
      "- Istanbul University bachelor degree student. Currenly studing my first year at bussines administration school.",
    ],
    projects: [],
    lists: [],
    imagePath: "/assets/istanbul-university.40e16a10.jpg",
    hints: [],
    error: "",
  },
  {
    commandIdentifier: "caffeine",
    title: "Caffeine",
    type: "caffeine-addict",
    lines: [
      "- Caffeine is a central nervous system (CNS) stimulant of the methylxanthine class. It is used as a cognitive enhancer, increasing alertness and attentional performance",
    ],
    projects: [],
    lists: [],
    imagePath: "",
    hints: [],
    error: "",
  },
  {
    commandIdentifier: "commands",
    title: "Available commands",
    type: "available-commands",
    lines: [],
    projects: [],
    lists: [
      {
        title: "",
        items: ["work", "student", "caffeine", "commands", "projects", "clear"],
      },
    ],
    imagePath: "",
    hints: [],
    error: "",
  },
  {
    commandIdentifier: "projects",
    title: "Projects",
    type: "projects",
    lines: [],
    projects: [
      {
        linkTitle: "UnApp",
        link: "https://unapp.space",
        description:
          "Educational platform for university admission process preparation.",
        content:
          "Created frontend application using Vue Js and RESTful API using Nest Js. Was one of co-founders of the startup and was actively involved in management and bussines decisions of the team. Implemented the online payment system",
      },
      {
        linkTitle: "Sali Market",
        link: "https://sali.market",
        description: "Online shop for plumber equipment sale.",
        content:
          "Created online platform for selling plumbing equipment. Developed responsive frontend application using Nuxt Js framework. Created user interface design and designed MySql database architecture. Created RESTful API using Nest js framework and Knex js ORM. Configured SSR data fetch. Used TypeScript to integrate typing for every layer of application.",
      },
    ],
    lists: [],
    imagePath: "",
    hints: [""],
    error: "",
  },
  {
    commandIdentifier: "clear",
    title: "",
    type: "clear",
    lines: [],
    projects: [],
    lists: [],
    imagePath: "",
    hints: [],
    error: "",
  },
];
