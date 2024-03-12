import React from 'react'

function Project() {

    const Projects = [
        {
          image:"",
          projectName: "The Waystone",
          Description: "Web-App-blog con login e utenti Admin, User e dashboard di gestione. Permette di scrivere articoli e commentarli, oltre ad avere profili utenti",
          Tech: [
            "React",
            "Redux",
            "Typescript",
            "Java",
            "Spring Data JPA",
            "JWT",
            "PostgreSQL"
          ],
          Links: {
            github: "https://github.com/Vince-mel/Capstone-frontend",
            demo: "",
          }
        },
    ],


  return (
    <div className="projects" id='projects'>
        <div className="title">
            <h2>Alcuni dei miei progetti: </h2>
        </div>

    </div>
  )
}

export default Project