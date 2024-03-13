import React from 'react'
import Button from '@/components/Button'
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero">
          <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
            Salve, mi chiamo 

            </motion.h1>
        
            <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
            Vincenzo Melillo.
        </motion.h2>
        <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        
            Creo soluzione per il web.
        </motion.h3>
        <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        Sono un Full Stack Developer con competenze nella creazione di contenuti digitali di alta qualità. Attualmente, mi sto concentrando sullo sviluppo di prodotti accessibili e incentrati sulle esigenze degli Utenti, studiando e approfondendo nuove tecnologie.

        </motion.p>
        <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
            <Button text="Esplora il mio Github" link="https://github.com/Vince-mel"></Button>
        </motion.div>
    </div>
  )
}

export default Hero