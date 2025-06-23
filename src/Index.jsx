import React from 'react'
import { ReactSVG } from 'react-svg'
import Namelogo from './assets/name-logo.svg'
import Namelogoblack from './assets/images/name-logo-white.svg'
import phone from './assets/icons/phone.svg'
import sun from './assets/icons/sun.svg'
import youtube from './assets/icons/youtube.svg'
import moon from './assets/icons/moon.svg'
import whatapp from './assets/icons/whatsapp.svg'
import linkedin from './assets/icons/linkedin.svg'
import github from './assets/icons/github.svg'
import twitter from './assets/icons/twitter.svg'
import instagram from './assets/icons/instagram.svg'
import Alogo from './assets/images/name-logo-favicon.svg'
import Arrow from './assets/icons/right-arrow.svg'
import raddit from './assets/icons/raddit.svg'

import { useEffect,useState } from 'react'
import Model from './Model'

function Index({isTrue,setIsTrue,textcolor,bg,enableScrolling}) {
    const [showModel,setShowModel]=useState(false)

    function scrollToSection() 
    { enableScrolling();
        window.scrollTo({ top: document.getElementById('section').offsetTop, behavior: 'smooth' }); }
    return (
        <div className='  h-full w-full overflow-hidden'>
    <pointer-particles class="absolute"></pointer-particles>

            <section className='flex flex-col justify-between h-screen bg-black text-white'>
                <header className="flex  items-center w-full justify-between px-4 mt-4 max-w-screen-xl mx-auto" >
                    <ReactSVG src={Namelogoblack} />
                    {/* style={{backgroundColor: bg,color:textcolor}} */}
                    <div className='flex space-x-4 relative'>
                        <ReactSVG className={!isTrue ? "hidden" : "" + " hover:cursor-pointer"} src={sun} onClick={()=>setIsTrue(!isTrue)} />
                        <ReactSVG className={isTrue ? 'hidden' : ''+ " hover:cursor-pointer"} src={moon} onClick={()=>setIsTrue(!isTrue)} />
                        
                        <ReactSVG className='hover:cursor-pointer' src={phone} />
                        <ReactSVG className='text-white hover:cursor-pointer' src={whatapp} />
                    </div>
                </header>

                <div className='-mt-10 flex relative'>
                    <div className='w-full px-4 max-w-screen-xl mx-auto  '>

                        <ReactSVG className=' pointer-events-none absolute top-0 left-1/2 w-[400px]   -translate-x-1/2 -translate-y-[60px] sm:-translate-y-[100px] sm:w-[400px] md:w-[500px] md:-translate-y-[90px] ' src={Namelogo} />

                        <div className='relative ml-4 md:ml-12'>
                            <h1 className='pointer-events-none text-[24px] md:text-[64px] font-["Spartan"] mr-2 '>AKASH PRAJAPATI</h1>
                            <p className='font-["Merriweather"] text-xl italic my-4 md:my-8 mt-2'>Mern Stack Developer</p>
                            
                            <button onClick={()=>setShowModel(true)} className='bg-[#4595eb] bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] py-2 px-5 rounded-[5px] font-extrabold relative hover:scale-110 ease-in-out duration-100 group'> About Me
                                <ReactSVG className='absolute top-1/2 -translate-y-1/2 -right-6 group-hover:-right-9  ease-in-out duration-100 ' src={Arrow} />
                            </button>
                        </div>
                    </div>
                    <ul className='ml-auto space-y-6 text-[#b0b2c3] absolute right-8'>
                        <li className='w-7 hover:text-white'>
                            <a href="https://www.linkedin.com/in/akash-prajapati-012751282"><ReactSVG src={linkedin} /></a>
                        </li>
                        <li className='w-7 hover:text-white'>
                            <ReactSVG src={youtube} />
                        </li>
                        <li className='w-7 hover:text-white'>
                            <ReactSVG src={instagram} />
                        </li>
                        <li className='w-7 hover:text-white'>
                            <ReactSVG src={raddit} />
                        </li>
                        <li className='w-7 hover:text-white'>
                            <ReactSVG src={github} />
                        </li>
                    </ul>
                </div>
                
                <button className='bg-[#4595eb] bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] py-2 px-5 rounded-[5px] font-extrabold relative hover:scale-110 ease-in-out duration-100 group self-center mb-16' onClick={() => { scrollToSection();  }}> Latest Works
                    <ReactSVG className='absolute left-1/2 -translate-x-1/2 top-11 group-hover:top-12  ease-in-out duration-100 rotate-90' src={Arrow}  />
                </button>
                {showModel && <Model bg={bg}  onclose={()=>setShowModel(false)}/>}

            </section>
            <div id='section'></div>
            </div>
    )
}

export default Index
