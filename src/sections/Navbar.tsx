import React from 'react'
import Link from 'next/link';
import Logo from '@/components/Logo';
import Button from '@/components/Button';


function Navbar() {

  const sectionLinks = [
    {name:"About", link: "/#about"},
    {name:"Progetti", link: "/#project"},
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
          <div className="nav-items-button">
            <Button text="Curriculum" link="http://localhost/cv.pdf"/>
          </div>
        </div>
      </div>
   </nav>




  )
}

export default Navbar;