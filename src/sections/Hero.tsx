import React from 'react'
import Button from '@/components/Button'

function Hero() {
  return (
    <div className="hero">
        <h1 className="hero-title">
            Salve, mi chiamo 
        </h1>
        <h2 className="hero-title-large">
            Vincenzo Melillo.
        </h2>
        <h3 className="hero-title-large hero-title-sub">
            Creo soluzione per il web.
        </h3>
        <p className="hero-text">
        Sono un Full Stack Developer con competenze nella creazione di contenuti digitali di alta qualità. Attualmente, mi sto concentrando sullo sviluppo di prodotti accessibili e incentrati sulle esigenze degli Utenti, studiando e approfondendo nuove tecnologie.

        </p>
        <div className="hero-button">
            <Button text="Esplora il mio Github" link="https://github.com/Vince-mel"></Button>
        </div>
    </div>
  )
}

export default Hero