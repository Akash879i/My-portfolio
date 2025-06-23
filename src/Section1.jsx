import React from 'react'
import mackbook from './image/WeatherApp.png';
import mackbook1 from './image/macbook1.png';
import School from './image/School.png';
import Todo from './image/Todo.png';





function Section1({textcolor,bg}) {
    return (
        <section className='max-w-screen-xl mx-auto px-4 mb-5 relative 'style={{color:textcolor}}>
            <h2 className={`text-3xl sm:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-4 border-[#1788ae]`} style={{backgroundColor: bg}}>Latest Works</h2>

            {/* First Work */}

            <div
        className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div
          className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://centonianpublicschool.in/"
          className="flex w-full relative justify-center sm:justify-start"
        >
          <div
            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200"
          >
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_20px_rgba(59,130,246,0.75)]"
              src={School}
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >School site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
            School Site
          </h3>
          <span className="text-[#459bd5] text-base md:text-lg"
            >(School Website)</span
          >
          <p className="text-justify text-sm md:text-base mt-2" style={{color:textcolor}}>
            A fully responsive and dynamic website developed for a school to showcase its information, admission process, facilities, and updates. Designed to be user-friendly for parents, students, and staff, ensuring smooth navigation and easy access to key resources.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2" style={{color:textcolor}}>
            <li
              className="border rounded-[50px] border-[#999]   px-[10px] py-[5px] text-sm md:text-base"
            >
              #react.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #express.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #node.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #mongoDB
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #javascript
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #figma
            </li>
              <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #emailjs
            </li>
          </ul>
        </div>
            </div>

            {/* Second Work */}

            <div
                className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
            >
                <div className="order-2 sm:order-1 w-full">
                    <h3 className="text-[#47afa1] font-bold text-2xl md:text-4xl">
                        Weather Forecast
                    </h3>
                    <span className="text-[#47afa1] text-base md:text-lg"
                    >(Weather forecasting)</span>
                    <p className="text-justify text-sm md:text-base mt-2">
                        A clean, user-friendly weather forecast application that provides real-time weather updates for any city worldwide. It fetches and displays weather data such as temperature, humidity, wind speed, and conditions using a public weather API.
                    </p>

                    <ul className="flex flex-wrap gap-2 mt-2">
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #react.js
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #tailwind
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #api
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #css
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #javascript
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #figma
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #material ui
                        </li>
                    </ul>
                </div>
                <div
                    className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"
                ></div>
                <div
                    className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-white z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
                ></div>
                <a
                    href="https://weathercastingaap.netlify.app/"
                    className="sm:order-2 flex w-full relative justify-center sm:justify-start"
                >
                    <div
                        className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
                    >
                        <img
                            className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_20px_rgba(59,130,246,0.75)]"
                            src={mackbook}
                            alt=""
                        />
                        <span
                            className="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                        >Weather Forecast
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-external-link"
                            >
                                <path
                                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                ></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </span>
                    </div>
                </a>
            </div>

            {/* Third Work */}

            <div
        className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative"
      >
        <div
          className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"
        ></div>
        <div
          className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
        ></div>
        <a
          href="https://07todos.netlify.app/"
          className="flex w-full relative justify-center sm:justify-start"
        >
          <div
            className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200"
          >
            <img
              className="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_20px_rgba(59,130,246,0.75)]"
              src={Todo}
              alt=""
            />
            <span
              className="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
              >Todos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-external-link"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </span>
          </div>
        </a>

        <div className="w-full">
          <h3 className="text-[#459bd5] font-bold text-2xl md:text-4xl">
            Todo App
          </h3>
          <span className="text-[#459bd5] text-base md:text-lg"
            >(Todos Manager)</span
          >
          <p className="text-justify text-sm md:text-base mt-2">
            A simple and elegant To-Do List web application built to help users manage their daily tasks with ease. Designed with a clean UI and smooth interactions, the app allows users to add, edit, delete, and mark tasks as completed.
          </p>

          <ul className="flex flex-wrap gap-2 mt-2">
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #react.js
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #css
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #javascript
            </li>
            <li
              className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
            >
              #figma
            </li>
          </ul>
        </div>
            </div>

            {/* Fourth Work */}

                
            <div
                className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative"
            >
                <div className="order-2 sm:order-1 w-full">
                    <h3 className="text-[#47afa1] font-bold text-2xl md:text-4xl">
                        Web Dev English
                    </h3>
                    <span className="text-[#47afa1] text-base md:text-lg"
                    >(Coaching and Consulting)</span
                    >
                    <p className="text-justify text-sm md:text-base mt-2">
                        Being a lead developer, revamped the site to a highly responsive,
                        and interactive website. Created new features and pages. Worked as a
                        team with product manager and ux designer.
                    </p>

                    <ul className="flex flex-wrap gap-2 mt-2">
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #react.js
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #express.js
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #node.js
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #mongoDB
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #css
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #javascript
                        </li>
                        <li
                            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
                        >
                            #figma
                        </li>
                    </ul>
                </div>
                <div
                    className="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"
                ></div>
                <div
                    className="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-white z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
                ></div>
                <a
                    href="#"
                    className="sm:order-2 flex w-full relative justify-center sm:justify-start"
                >
                    <div
                        className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto"
                    >
                        <img
                            className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_20px_rgba(59,130,246,0.75)]"
                            src={mackbook}
                            alt=""
                        />
                        <span
                            className="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
                        >Web Dev English
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="feather feather-external-link"
                            >
                                <path
                                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                ></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </span>
                    </div>
                </a>
            </div>

            {/* Vertical line */}

        <div 
        className="w-[2px] absolute hidden md:block bg-[#1788ae] top-0 bottom-0 left-1/2 -translate-x-1/2">
        </div>

        </section>
    )
}

export default Section1
