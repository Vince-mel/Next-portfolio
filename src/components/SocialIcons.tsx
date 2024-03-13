import { link } from 'fs';
import Link from 'next/link';
import { title } from 'process';
import React from 'react'
import { FiGithub, FiInstagram,FiLinkedin, } from 'react-icons/fi'
import { RiDiscordLine } from "react-icons/ri";


function SocialIcons() {
 
    const socialIcons =[

        { name:"Github", icon: < FiGithub />, link: "https://github.com/Vince-mel" },
        { name:"LinkedIn", icon: < FiLinkedin />, link: "https://www.linkedin.com/in/vincenzo-melillo-developer/" },
        { name:"Istagram", icon: < FiInstagram />, link: "https://www.instagram.com/vincello08/" },
        { name:"Discord", icon: < RiDiscordLine   />, link: "https://discord.com/invite/BxEcsdfM" },

    ];




    return (
        <div className="social-icons">
          <ul className="social-icons-list">
            {socialIcons.map(({ name, icon, link }) => (
              <li key={name} title={name} className='social-icons-list-item'>
                <Link href={link} target='_blank' className='social-icons-list-item-link'>{icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default SocialIcons;