import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {


const projectsData = [
    {
      image: "/thway2.png",
      projectName: "The Waystone",
      projectLink: "https://github.com/Vince-mel/Capstone-frontend",
      projectDescription:"Web-App-blog con login e utenti Admin, User e dashboard di gestione. Permette di scrivere articoli e commentarli, oltre ad avere profili utenti",
      projectTech: [
        "React",
        "Redux",
        "Typescript",
        "Java",
        "Spring Data JPA",
        "JWT",
        "PostgreSQL",
      ],
      projectExternalLinks: {
        github: "https://github.com/Vince-mel/Capstone-frontend",
        externalLink: "https://github.com/Vince-mel/Capstone-frontend",
      },
    },
    {
      image: "/spotify.jpeg",
      projectName: "Spotify clone",
      projectLink: "https://vincefy.vercel.app/",
      projectDescription: "Un piccolo esempio di clone della UI di Spotify con operazioni CRUD",
      projectTech: [
        "React",
        "Redux",
        "Javascript",
       
      ],
      projectExternalLinks: {
        github: "https://github.com/Vince-mel/spotify-react-redux",
        externalLink: "https://vincefy.vercel.app/",
      },
    },
    {
      image: "/netflix.png",
      projectName: "Netflix clone UI",
      projectLink: "https://netflix-clone-react-4i9s303vb-vincenzo-melillos-projects.vercel.app/",
      projectDescription:
        "Clone UI di Netflix.",
      projectTech: [
        "React",
        "Node.js",
        "Firebase",
        "MongoDB",
        "Express",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "https://github.com/Vince-mel/netflix-clone-react",
        externalLink: "https://netflix-clone-react-4i9s303vb-vincenzo-melillos-projects.vercel.app/",
      },
    },

    {
        image: "/meteoday.jpeg",
        projectName: "Meteoday",
        projectLink: "https://weather-react-app-mocha.vercel.app/",
        projectDescription:  "Piccola web-app Meteo per vedere le previsioni del tempo tramite posizione o ricerca, mostra anche il resto dei giorni della settimana. La UI è da rimodellare, l'esercizio si basava sull'utilizzo di vere API meteo",
        projectTech: [
          "React",
          "Redux",
          "Javascript",
         
        ],
        projectExternalLinks: {
          github: "https://github.com/Vince-mel/weather-react-app",
          externalLink: "https://weather-react-app-mocha.vercel.app/",
        },
      },
];

return (
  <div className="projects" id="project">
    <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
      <h2>Alcuni dei miei lavori</h2>
    </motion.div>
    <div className="projects-container">
      {projectsData.map(({
        image,
        projectDescription,
        projectLink,
        projectExternalLinks,
        projectName,
        projectTech,
      }, index) => (
        <motion.div
        className="project"
        key={projectName}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
          <div className="project-image">
            <div className="project-image-overlay"></div>
            <div className="project-image-container">
              <Image src={image} fill alt={projectName} quality={100} />
            </div>
          </div>
          <div className="project-info">
            <p className="project-info-overline">Nome del progetto</p>
            <h3 className="project-info-title">{projectName}</h3>
            <div className="project-info-description">
              <p>{projectDescription}</p>
            </div>
            <ul className="project-info-tech-list">
              {projectTech.map((tech) => (
                <li className="project-info-tech-list-item" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>
            <ul className="project-info-links">
              <li className="project-info-links-item">
                <Link href={projectExternalLinks.github} className="project-info-links-item-link">
                  <FiGithub />
                </Link>
              </li>
              {index !== 0 && ( // Questo controllo condizionale esclude il primo elemento
                <li className="project-info-links-item">
                  <Link href={projectExternalLinks.externalLink} className="project-info-links-item-link">
                    <span className="demo">Demo </span>
                    
                  </Link>
                </li>
              )}
            
            </ul>
          </div>
        </motion.div>
      
      
      ))}
    </div>
  </div>
);
}

export default Projects;