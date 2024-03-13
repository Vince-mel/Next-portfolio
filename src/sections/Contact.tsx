import React from 'react'
import Button from '@/components/Button'
import { motion } from "framer-motion";


function Contact() {
  return (
    <motion.div
    className="contact"
    id="contact"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    variants={{
      visible: { opacity: 1, y: -50 },
      hidden: { opacity: 0, y: 0 },
    }}
  >

      <h2 className="contact-title">
  Vuoi contattarmi?
</h2>
<h2 className="contact-sub-title">Scrivimi!</h2>
<p className="contact-text">
Sono disponibile a candidature per nuove opportunità di lavoro e desideroso di ampliare le mie competenze. La mia passione  mi motiva a esplorare nuovi ambiti e a sfidare i miei limiti crescendo professionalmente. Se la tua azienda è alla ricerca di qualcuno che sia entusiasta di crescere e contribuire in modo significativo al vostro team, non esitate a contattarmi. Sono pronto a intraprendere nuove sfide e a portare il mio entusiasmo e la mia dedizione in nuovi progetti.</p>
<div className="contact-but">
<Button text="Invia Email" link="mailto:melillo.vinc@gmail.com"></Button>
</div>


    </motion.div>
  )
}

export default Contact