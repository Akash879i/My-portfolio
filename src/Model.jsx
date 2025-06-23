import React, { useRef } from 'react'
import { CircleX } from 'lucide-react';
import { ReactSVG } from 'react-svg'
import node from './assets/icons/node.svg'
import Express from './assets/icons/express.svg'
import react from './assets/icons/react.svg'
import MongoDB from './assets/icons/mongodb.svg'
import coder from './assets/images/coder.svg'


function Model({onclose,bg}) {
const modelref=useRef();
console.log("Model component is running")
const onclick=(e)=>{
    if(modelref.current === e.target){
        onclose();
        console.log("closed is working")

    }
    // onclose();
        
}

return (
    <div ref={modelref} onClick={onclick} className='absolute  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
    
    <div className="flex w-[80%] md:[70%]  h-500px radius-10px relative pb-3 md:p-3" style={{backgroundColor:bg}}>

            <div className='w-309px h-30px top-3 absolute radius-32px  right-3 cursor-pointer '>
                <CircleX onClick={onclose}/>
            </div>
            <div className=' flex flex-col  w-100% items-center'>
              <div className='w-[85%]'>
              <h1 className='text-[#1788ae] mt-4 md:mt-7 text-[1.5em] '>ABOUT ME</h1>
                <p className='my-3'>Hi! I'm Akash, a passionate and self-driven web developer currently pursuing my B.Tech in Computer Science. I specialize in building clean, responsive, and user-friendly web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
</p><p className='my-3'>
I also enjoy crafting intuitive UI/UX designs using Figma, blending functionality with aesthetics. Whether it’s a dynamic dashboard, a school management portal, or a responsive landing page — I love turning ideas into real, working products.
</p><p className='my-3'>
I’m constantly learning and experimenting with new technologies to expand my skillset and build impactful projects.</p>

                <ul className="flex flex-wrap text-sm  " >
            <li
              className="border rounded-[50px] border-[#999] border-solid  px-[0.4em] py-[0.8em] mr-[0.5em] mb-[0.5em]  text-xs "
            >
              #react.js
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #express.js
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #node.js
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #swiper.js
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #mongoDB
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #css   .
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #javascript
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #figma
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #html
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #tailwind
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #figma
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #git
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #github
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #bootstrap
            </li>
            <li
              className="border rounded-[50px] border-[#999]   px-[0.4em] py-[0.8em] mb-[0.5em] mr-[0.5em]  text-sm md:text-xs"
            >
              #php
            </li>
         
            
            </ul>
            <div>
                <h2 className='text-[#1788ae] lg:mt-12 md:mt-7 mt-3 text-[1.5em]'>MERN STACK</h2>



                <div className='flex   items-center gap-4 mt-2 md:mt-6'>
                    <div className='flex flex-col items-center '>
                        <ReactSVG src={MongoDB} />
                <h2 className='text-[#47a248] text-xl mt-2'>M</h2>
                      
                    </div>

                    <div className='flex flex-col items-center '>
                        <ReactSVG src={Express} />
                <h2 className='text-[#b62626] text-xl  mt-2'>E</h2>

                       
                    </div>

                    <div className='flex flex-col items-center '>
                        <ReactSVG src={react} />
                <h2 className='text-[#61dafb] text-xl  mt-2'>R</h2>
                 
                </div>
                    
                    <div className='flex flex-col items-center '>
                        <ReactSVG src={node} />
                <h2 className='text-[#8CC84B] text-xl  mt-2'>N</h2>

                  
                </div>



                </div>

            </div>
              </div>
    
            </div>
            
            <div className='flex flex-col w-90% items-center justify-center'>
            <div className=''>
                
                <ReactSVG className='lg:w-[450px] md:w-[300px]  pt-20' src={coder} />
                    
            </div>
            </div>
        </div>
        
    </div>
        )
}

export default Model
