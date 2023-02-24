import gmailIcon from "@/assets/icons/social-networks/gmail.svg";
import instagramIcon from "@/assets/icons/social-networks/instagram.svg";
import linkedinIcon from "@/assets/icons/social-networks/linkedin.svg";
import telegramIcon from "@/assets/icons/social-networks/telegram.svg";
import githubIcon from "@/assets/icons/social-networks/github.svg";

export const COMMANDS = {
  "GET GENERAL INFORMATION": {
    title: "Replicant Number <span style='color: #1b00b2'>KD6-3.7<span/>",
    paragraphs: [
      "<span style='color: #1acc6b'>Human name: </span>Sultan Mustafin <br>",
      "<span style='color: #1acc6b'>Status: </span/>Open for work<br>",
      "<span style='color: #1acc6b'>Special abilities: </span> <br>‣ accelerated learning  ‣ bugs resistance  ‣ test writing<br>",
      "<span style='color: #1acc6b'>Experience: </span> <br>‣ work at startups  ‣ remote work  ‣ hackathons<br>",
      "<span style='color: #1acc6b'>Last identified location: </span>40.985856, 29.024999<br>",
      "<span style='color: #1acc6b'>Occupation: </span>Full stack developer<br>",
      "<span style='color: #1acc6b'>Stack: </span> <br>‣ JavaScript  ‣ TypeScript  ‣ Node Js  ‣ Vue Js 2/3  ‣ Vuex  ‣ Express Js  ‣ Nest Js  ‣ TypeORM  ‣ Socket IO  ‣ PostgreSQL  ‣ MySQL  ‣ Docker  ‣ HTML  ‣ CSS  ‣ Git<br>",
    ],
    shorterParagraphs: [
      "<span style='color: #1acc6b'>Human name: </span>Sultan Mustafin <br>",
      "<span style='color: #1acc6b'>Status: </span/>Open for work<br>",
      "<span style='color: #1acc6b'>Special abilities: </span>‣ accelerated learning  ‣ bugs resistance  ‣ test writing<br>",
      "<span style='color: #1acc6b'>Experience: </span>‣ work at startups  ‣ remote work  ‣ hackathons<br>",
      "<span style='color: #1acc6b'>Last identified location: </span>40.985856, 29.024999<br>",
      "<span style='color: #1acc6b'>Occupation: </span>Full stack developer<br>",
      "<span style='color: #1acc6b'>Stack: </span>‣ JavaScript  ‣ TypeScript  ‣ Node Js  ‣ Vue Js 2/3  ‣ Vuex  ‣ Express Js  ‣ Nest Js  ‣ TypeORM  ‣ Socket IO  ‣ PostgreSQL  ‣ MySQL  ‣ Docker  ‣ HTML  ‣ CSS  ‣ Git<br>",
    ],
  },
  "GET WORK EXPERIENCE": {
    title: "Work Experience",
    positions: [
      {
        companyName: "Bultech",
        companyUrl: "https://prosklad.kz",
        dateRange: "dec. 2021 - dec.2022",
        achievements: [
          "Created and launched intercorporate employees revenue tracking system and a CRM platform for business management",
          "Administrated a team consisting of 2 Fullstack developers and reviewed loads of code",
          "Lead transition of code base to TypeScript, developed new landing page which increased conversion by 63% on one of internal projects",
        ],
        stack: [
          "Vue Js 3",
          "Node Js",
          "Express Js",
          "Nest Js",
          "PostgreSQL",
          "TypeScript",
          "Jest",
          "Docker",
          "Socket IO",
          "TypeORM",
          "Git",
          "HTML",
          "CSS",
        ],
      },
      {
        companyName: "Sali Market",
        dateRange: "jan. 2021 - dec. 2021",
        achievements: [
          "Created and designed online plumbing equipment store, which allowed business owners to distribute product between multiple cities",
          "Developed database architecture and created RESTful API",
          "Set up development environment and created SPA with more than 25 dynamic pages",
          "Set up SSR to several static pages to enhance SEO optimization",
        ],
        stack: [
          "Vue Js",
          "Vuex",
          "Node Js",
          "Express Js",
          "Nest Js",
          "MySql",
          "TypeScript",
          "Jest",
          "Objection",
          "Git",
          "HTML",
          "CSS",
        ],
      },
      {
        companyName: "UnApp Space",
        companyUrl: "https://unapp.space",
        dateRange: "feb. 2020 - jan. 2021",
        achievements: [
          "Developed online university admission educational platform",
          "Set up S3 static file storage, created SPA with more than 10 dynamic pages",
          "Implemented online payment system which increased sales conversion by 18%",
        ],
        stack: [
          "Vue Js",
          "Vuex",
          "Node Js",
          "Express Js",
          "Nest Js",
          "MySql",
          "TypeScript",
          "TypeORM",
          "Git",
          "HTML",
          "CSS",
        ],
      },
      {
        companyName: "Linco",
        dateRange: "sept. 2019 - feb. 2020",
        achievements: [
          "Created platform for private educational institutions that allows to track student’s grades and progress",
          "Developed adaptive SPA and integrated RESTful API endpoints",
        ],
        stack: ["Vue Js", "Vuex", "MySql", "JavaScript", "Git", "HTML", "CSS"],
      },
    ],
  },
  "GET CONTACT DETAILS": {
    title: "Replicant's data exchange APIs",
    contacts: [
      {
        iconSrc: linkedinIcon,
        title: "linkedin",
        url: "https://www.linkedin.com/in/sultan-mustafin",
      },
      {
        iconSrc: telegramIcon,
        title: "telegram",
        url: "https://telegram.me/Sultan_Mus",
      },
      {
        iconSrc: githubIcon,
        title: "github",
        url: "https://github.com/Sultannis",
      },
      {
        iconSrc: instagramIcon,
        title: "intagram",
        url: "https://www.instagram.com/its.sultanmustafin",
      },
      {
        iconSrc: gmailIcon,
        title: "sultan.fb29@gmail.com",
        url: "https://www.sultan.fb29@gmail.com",
      },
    ],
  },
  "GET COMMANDS": {
    title: "Available commands",
    commands: [
      "GET GENERAL INFORMATION",
      "GET WORK EXPERIENCE",
      "GET CONTACT DETAILS",
      "GET COMMANDS",
      "DOWNLOAD CV",
      "CLEAR",
      "MUSIC",
    ],
  },
  CLEAR: null,
  "DOWNLOAD CV": null,
  "PLAY SOME MUSIC": null,
  "STOP THE MUSIC": null,
};
