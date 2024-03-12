import React from 'react'

function Project() {

    const Projects = [
        {
          image:"/public/theway.png",
          image2:"/public/thway2.png",
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

        {
            image:"/public/spotify.jpeg",
          projectName: "Spotify clone",
            Description: "Un piccolo esempio di clone della UI di Spotify con operazioni CRUD",
            Tech: [
              "React",
              "Redux",
              "Javascript",
             
            ],
            Links: {
              github: "https://github.com/Vince-mel/spotify-react-redux",
              demo: "https://vincefy.vercel.app/",
            }
          },


          {
            image:"/public/theway.png",
            projectName: "Netflix clone UI",
            Description: "Un piccolo esempio di clone della UI di netflix con operazioni CRUD",
            Tech: [
              "React",
              "Redux",
              "Javascript",
           
            ],
            Links: {
              github: "https://github.com/Vince-mel/netflix-clone-react",
              demo: "netflix-clone-react-livid.vercel.app",
            }
          },

          {
            image:"/public/Meteoday.png",
            projectName: "Meteoday",
            Description: "Piccola web-app Meteo per vedere le previsioni del tempo tramite posizione o ricerca, mostra anche il resto dei giorni della settimana. La UI è da rimodellare, l'esercizio si basava sull'utilizzo di vere API meteo",
            Tech: [
              "React",
              "Redux",
              "Javascript",
            
            ],
            Links: {
              github: "https://github.com/Vince-mel/weather-react-app",
              demo: "weather-react-app-mocha.vercel.app",
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