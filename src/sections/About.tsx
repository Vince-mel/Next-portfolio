import React from 'react'
import Image from 'next/image'


function About() {
  return (
    <div className="about" id="about">
        <div className="title">
            <h2>Chi sono</h2>
        </div>
        <div className="about-grid">
            <div className="about-grid-info">
                <p className="about-grid-info-text">
                    Benvenuti! Mi presento: sono Vincenzo Melillo, un Full Stack Developer con una forte passione per l&apos;informatica,il web e la tecnologia.</p>
                <p className="about-grid-info-text">Fin da giovane, ho nutrito un forte interesse per la creazione di contenuti digitali, un percorso che mi ha permesso di acquisire un ampio ventaglio di competenze tecniche. Queste abilità, unite alla mia costante curiosità, mi rendono capace di ideare e realizzare soluzioni digitali innovative e funzionali.</p>    
                <p className="about-grid-info-text">Il mio modo di essere mi spinge a un apprendimento continuo, sempre in cerca delle ultime novità e tendenze nel vasto universo dello sviluppo web. Il mio obiettivo è non solo tenere il passo con l&apos;evoluzione tecnologica ma anticiparla, per offrire soluzioni all&apos;avanguardia.</p>  
                <p className="about-grid-info-text">Attualmente, sono in cerca di nuovi stimoli professionali e progetti entusiasmanti che possano ampliare il mio bagaglio di conoscenze e permettermi di dare il mio contributo alla comunità digitale. Se il mio profilo professionale ha suscitato il tuo interesse o se stai cercando una collaborazione, ti invito a contattarmi. Sono aperto a esplorare nuove opportunità e a confrontarmi con sfide inedite.</p>  
                <p className="about-grid-info-text">
            Qui trovi alcune delle tecnologie con le quali ho lavorato di recente:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">HTML5</li>
            <li className="about-grid-info-list-item">SASS</li>
            <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">Springboot</li>
            <li className="about-grid-info-list-item">Postgresql</li>
            <li className="about-grid-info-list-item">MySQL</li>
            </ul>
            </div>
            <div className="about-grid-photo">
                <div className="overlay">
                    <div className="overlay-border">
                        <div className="about-grid-photo-container">
                            <Image src="/profile-photo.jpeg" alt='foto profilo' fill></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About