import React from 'react'
import Link from 'next/link'


function Email() {
  return (
    <div className='email'>
        <Link href="mailto:melillo.vinc@gmail.com" className='email-link'>melillo.vinc@gmail.com</Link>
    </div>
  )
}

export default Email