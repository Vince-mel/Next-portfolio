import React from 'react'
import Link from 'next/link';
import Logo from '@/components/Logo';


function Navbar() {

  const sectionLinks = [
    {name:"About", link: "/#about"},
    {name:"Esperienze", link: "/#experience"},
    {name:"Lavoro", link: "/#work"},
    {name:"Contatti", link: "/#contact"},
  ]

  return (
    <nav>
      <div className="wrapper">
        <div className="brand">
          <Link href="">
            <Logo />
             </Link>
        </div>
        <div className="nav-items">
          <ul className='nav-items-list'>
            {sectionLinks.map(({name,link})=> (
              <li key={name} className="nav-items-list-items">
                <Link href={link} className='nav-items-list-link'>
                  {name}
                </Link>
              </li>

            ))}
          </ul>
        </div>
      </div>
   </nav>




  )
}

export default Navbar;