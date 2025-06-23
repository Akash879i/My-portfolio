import React from 'react'
import { ReactSVG } from 'react-svg'
import Contactus from './assets/images/contact-me.svg'
import Express from './assets/icons/x.svg'
import Name from './assets/icons/user.svg'
import Email from './assets/icons/at-symbol.svg'
import Message from './assets/icons/chat.svg'


function Contact() {
return (
    <section className='max-w-screen-xl mx-auto px-4 pb-12'>
        <h2
        className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md"
    >
        Let's Connect
    </h2>

    <div className="flex flex-col md:flex-row items-center mt-10 ">
        <div className="w-[100%]">
        <ReactSVG className='w-50px' src={Contactus} />
        </div>
        <form className="w-full" name="contactUS" netlify>
          <label
            for="name"
            className="flex  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            > <ReactSVG className='' src={Name} /> Name</label>
          <div className="relative mb-4">
            <div
              className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
           {/*  */}
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your name"
            />
          </div>
          <label
            for="email"
            className="flex  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ><ReactSVG className='' src={Email} /> Email</label
          >
          <div className="relative mb-4">
            <div
              className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            >
               {/*  */}
            </div>
            <input
              type="text"
              id="email"
              name="email"
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@gmail.com"
            />
          </div>
          <label
            for="message"
            className="flex  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            ><ReactSVG className='' src={Message} /> Message</label
          >
          <div className="relative mb-4">
            <div
              className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
            ></div>
            <textarea
              id="message"
              name="message"
              rows="8"
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder='Type you message here'
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
          <ReactSVG className='' src={Express} /> Send Message
          </button>
        </form>
      </div>

    
    </section>
)
}

export default Contact
