export const Commands = [
  {
    commandIdentifier: "web-dev",
    title: "Experience as a web developer",
    type: "web-developer",
    lines: [
      "- Working as a commercial web developer since January of 2019",
      "- Specialize on creating web platforms that allow close interaction with end user. Actively involved and interested in developing independent projects and startups. Lately been working in EdTech and E-commerce spheres.",
    ],
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
    hints: ["Type ‘projects’ to see the list of projects"],
    error: null,
  },
  {
    commandIdentifier: "bs-student",
    title: "Bussines school student",
    type: "bs-student",
    lines: [],
    lists: [],
    hints: [],
    error: null,
  },
  {
    commandIdentifier: "caffeine",
    title: "Caffeine",
    type: "caffeine-addict",
    lines: [
      "- Caffeine is a central nervous system (CNS) stimulant of the methylxanthine class. It is used as a cognitive enhancer, increasing alertness and attentional performance",
    ],
    lists: [],
    hints: [],
    error: null,
  },
  {
    commandIdentifier: "commands",
    title: "Available commands",
    type: "available-commands",
    lines: [],
    lists: [
      {
        title: "",
        items: ["web-dev", "bs-student", "caffeine", "commands", "clear"],
      },
    ],
    hints: [],
    error: null,
  },
  {
    commandIdentifier: "projects",
    title: "Projects",
    type: "projects",
    lines: [
      "<a href='https://unapp.space/' >- UnApp</a>",
      "Created frontend application using Vue Js and RESTful API using Nest Js. Was one of co-founders of the startup and was actively involved in management and bussines workflows of the team",
    ],
    lists: [],
    hints: [],
    error: null,
  },
  {
    commandIdentifier: "clear",
    title: "",
    type: "clear",
    lines: [],
    lists: [],
    hints: [],
    error: null,
  },
];
