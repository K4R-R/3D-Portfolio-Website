import {
   mobile,
   backend,
   creator,
   web,
   javascript,
   html,
   css,
   reactjs,
   tailwind,
   nodejs,
   mongodb,
   git,
   meta,
   starbucks,
   tesla,
   shopify,
   pitchpoint,
   dynamic,
   codepen,
   threejs,
   iitg,
   school,
   springboot,
   express
 } from "../assets";
 
 export const navLinks = [
   {
     id: "about",
     title: "About",
   },
   {
     id: "skills",
     title: "Skills",
   },
   {
     id: "projects",
     title: "Projects",
   },
   {
     id: "contact",
     title: "Contact",
   },
 ];
 
 const services = [
   {
     title: "Web Developer",
     icon: web,
   },
   {
     title: "Game Developer",
     icon: mobile,
   },
   {
     title: "Backend Developer",
     icon: creator,
   },
   {
     title: "Fullstack Developer",
     icon: backend,
   },
 ];
 
 const technologies = [
   {
     name: "HTML 5",
     icon: html,
   },
   {
     name: "CSS 3",
     icon: css,
   },
   {
     name: "JavaScript",
     icon: javascript,
   },
   {
     name: "React JS",
     icon: reactjs,
   },
   {
     name: "Tailwind CSS",
     icon: tailwind,
   },
   {
     name: "Node JS",
     icon: nodejs,
   },
   {
    name: "Express",
    icon: express,
   },
   {
     name: "MongoDB",
     icon: mongodb,
   },
   {
     name: "Three JS",
     icon: threejs,
   },
   {
     name: "git",
     icon: git,
   },
   {
     name: "Spring Boot",
     icon: springboot,
   },
 ];
 
 const education = [
   {
     title: "Indian Institute of Technology, Guwahati",
     degree: "BTech, Engineering Physics",
     grade: "6.63 CPI",
     icon: iitg,
     iconBg: "#AAA6C3",
     date: "Nov 2021 - May 2025",
     description: "I am pursuing a B.Tech in Engineering Physics at IIT Guwahati, with a CPI of 6.63 over six semesters.Some of my coursework includes Mathematical Physics, Computational Physics, Introduction to Computing and Computing Laboratory. In addition to my academic pursuits, I am actively involved in extracurricular activities. I am a part of the Events Team for Alcheringa, one of the largest cultural fests in India. Furthermore, I am a member of the Game Development and Esports Club, where I explore my passion for gaming and game development.",
   },
   {
     title: "St. Joseph's Co-Ed School, Bhopal",
     degree: "CBSE, PCM with PE",
     grade: "94.8%",
     icon: school,
     iconBg: "#AAA6C3",
     date: "April 2019 - March 2020",
     description: "I completed my 12th grade at St. Joseph's Co-ed School, Bhopal, pursuing PCM with Physical Education and achieving a score of 94.8%."
   },
   {
    title: "St. Joseph's Co-Ed School, Bhopal",
    degree: "CBSE, Boards",
    grade: "87.2%",
    icon: school,
    iconBg: "#AAA6C3",
    date: "April 2017 - March 2018",
    description: "I completed my 10th grade at St. Joseph's Co-ed School, Bhopal,where I achieved a score of 87.2%."
   }
 ];
 
 
 
 const projects = [
   {
     name: "Pitch Point",
     description:
       "The website connects investors with startups, streamlining discovery and engagement for both parties. Investors can explore and evaluate startups based on their preferences.",
     tags: [
       {
         name: "react",
         color: "blue-text-gradient",
       },
       {
         name: "mongodb",
         color: "green-text-gradient",
       },
       {
         name: "nodejs",
         color: "pink-text-gradient",
       },
       {
         name: "express",
         color: "blue-text-gradient",
       }
     ],
     image: pitchpoint,
     source_code_link: "https://github.com/K4R-R/Pitch-Point",
   },
   {
     name: "Dynamic Chat App",
     description:
       "Created a chat website featuring user-friendly registration, profile image management, and real-time online status updates for seamless communication.",
     tags: [
       {
         name: "nodejs",
         color: "pink-text-gradient",
       },
       {
         name: "mongodb",
         color: "green-text-gradient",
       },
       {
         name: "express",
         color: "blue-text-gradient",
       },
     ],
     image: dynamic,
     source_code_link: "https://github.com/K4R-R/Dynamic-Chat-Application",
   },
   {
     name: "Codepen Clone",
     description:
       "A simplified clone of CodePen, designed for experimenting with HTML, CSS, and JavaScript code snippets in a sandbox environment. The image is having the code of a weather API.",
     tags: [
       {
         name: "react",
         color: "blue-text-gradient",
       },
       {
         name: "css",
         color: "pink-text-gradient",
       },
     ],
     image: codepen,
     source_code_link: "https://github.com/K4R-R/codepen-clone",
   },
 ];
 
 export { services, technologies, education, projects };