import React from 'react'
import { ReactSVG } from 'react-svg'
import linkedin from './assets/icons/linkedin.svg'
import github from './assets/icons/github.svg'
import twitter from './assets/icons/twitter.svg'
import instagram from './assets/icons/instagram.svg'
import twitterx from './assets/icons/twitter-x.svg'
import Message from './assets/icons/chat.svg'
import youtube from './assets/icons/youtube.svg'
import raddit from './assets/icons/raddit.svg'




function Footer() {
  return (
    <footer className="flex flex-col items-center pb-10">
      <p className="text-xs text-gray-300">Akash Prajapati © 2025</p>
      <div className="black-logo my-4">
     {/* <ReactSVG  src={linkedin} /> */}
      </div>
      <ul className="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3]">
        <li>
          <a href="https://www.linkedin.com/in/akash-prajapati-012751282" target="_blank">

          <ReactSVG className="w-5 hover:text-white" src={linkedin} />

          </a>
        </li>
        <li>
        <ReactSVG className="w-5 hover:text-white" src={raddit } />
       

        </li>
        <li>
          <a href="https://www.instagram.com/.akash.5?igsh=djE1M3dxMWVkdGE=">

          <ReactSVG className="w-5 hover:text-white" src={instagram } />

          </a>
        </li>
        <li>
          <a href="" target="_blank">

          <ReactSVG className="w-5 hover:text-white" src={Message } />

          </a>
        </li>
        <li>
          <a href="">

          <ReactSVG className="w-5 hover:text-white" src={youtube } />

          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
