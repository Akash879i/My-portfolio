import React, { useRef, useState } from 'react'
import { ReactSVG } from 'react-svg'
import Contactus from './assets/images/contact-me.svg'
import Express from './assets/icons/send_button.png'
import Name from './assets/icons/user.svg'
import Email from './assets/icons/at-symbol.svg'
import Message from './assets/icons/chat.svg'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef()
  const [success, setSuccess] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_l1qsu9n', // replace with your EmailJS service ID
        'template_ptu1jhs', // replace with your EmailJS template ID
        form.current,
        'cachLjrWoB5sGzX6-' // replace with your EmailJS public key
      )
      .then(
        (result) => {
          setSuccess(true)
          form.current.reset()
        },
        (error) => {
          setSuccess(false)
        }
      )
  }

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
        <form
          className="w-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <label
            htmlFor="name"
            className="flex  mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            <ReactSVG className='' src={Name} /> Name
          </label>
          <div className="relative mb-4">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter your name"
            />
          </div>
          <label
            htmlFor="email"
            className="flex  mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            <ReactSVG className='' src={Email} /> Email
          </label>
          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@gmail.com"
            />
          </div>
          <label
            htmlFor="message"
            className="flex  mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            <ReactSVG className='' src={Message} /> Message
          </label>
          <div className="relative mb-4">
            <textarea
              id="message"
              name="message"
              rows="8"
              required
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder='Type your message here'
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-full text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
          >
            <img src={Express} alt="" className='w-6 mr-3' /> Send Message
          </button>
          {success === true && (
            <p className="text-green-600 mt-2">Message sent successfully!</p>
          )}
          {success === false && (
            <p className="text-red-600 mt-2">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact