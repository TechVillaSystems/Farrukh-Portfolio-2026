import { skillsArray } from '@/utils/skills'
import React from 'react'
import Hover3DImage from './hover-3d-image'
import { Github, Facebook, Instagram, Mail, Phone, Globe } from 'lucide-react'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section className="md:container mx-auto bg-baseColor text-headingColor sm:py-5 px-6">
            <div className="flex flex-col-reverse sm:flex-row items-center  justify-between py-10">
                <div className="content w-full sm:w-1/2 text-center sm:text-start">
                    <h2 className="text-xl sm:text-3xl mt-3 md:mt-0 md:text-left text-center font-bold mb-4 text-[#0084b2]  typing-effect">
                        Full-Stack Developer
                    </h2>


                    <h2 className="text-3xl sm:text-5xl text-headingColor font-bold mb-4">
                        Farrukh Hafeez 👋
                    </h2>

                    <div className="flex flex-wrap gap-2  justify-center sm:justify-start sm mb-4">
                        {skillsArray.map((ele: string, index: number) => (
                            <span
                                key={index}
                                className="inline-block px-3 py-1 text-primaryColor border  rounded-full text-sm font-medium hover:bg-[#1a1a1a] hover:text-[#FFFFFF]! transition-colors duration-300 cursor-pointer"
                            >
                                {ele}
                            </span>
                        ))}
                    </div>

                    <p
                        className="text-sm mb-6 text-[#1a1a1a] transition-all duration-500 ease-in-out hover:[text-shadow:0_1px_3px_rgba(26,26,26,0.35)]"
                    >
                        I’m a Full-Stack Developer with over 7+ years of experience delivering
                        high-quality, scalable, and user-focused web solutions. Skilled in React,
                        AngularJS, Next.js, Node.js, MongoDB, Ruby on Rails, PHP and Python. I
                        specialize in building responsive websites, custom admin dashboards, and
                        AI-powered SaaS applications that align with business goals.
                    </p>


                    <div className="flex gap-3 justify-center  mb-8  sm:justify-start">
                        <a
                            href="https://github.com/FarrukhHafeezFH"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Github
                                size={24}
                                className="text-primaryColor transition-all duration-300 group-hover:scale-125 group-hover:stroke-[#1a1a1a]"
                            />
                        </a>


                        <a
                            href="https://www.facebook.com/FarrukhHafeezFH/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Facebook
                                size={24}
                                className="text-primaryColor transition-all duration-300 group-hover:scale-125 group-hover:stroke-[#1a1a1a]"
                            />
                        </a>

                        <a
                            href="https://www.instagram.com/farrukhhafeezfh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Instagram
                                size={24}
                                className="text-primaryColor transition-all duration-300 group-hover:scale-125 group-hover:stroke-[#1a1a1a]"
                            />
                        </a>

                        <a href="mailto:Farrukhhafeez48@gmail.com" className="group">
                            <Mail
                                size={24}
                                className="text-primaryColor transition-all duration-300 group-hover:scale-125 group-hover:stroke-[#1a1a1a]"
                            />
                        </a>

                        <a
                            href="https://wa.me/923353574786"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Phone
                                size={24}
                                className="text-primaryColor transition-all duration-300 group-hover:scale-125 group-hover:stroke-[#1a1a1a]"
                            />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Globe
                                size={24}
                                className="text-primaryColor transition-all duration-300 group-hover:scale-125 group-hover:stroke-[#1a1a1a]"
                            />
                        </a>
                    </div>


                    <div className="flex gap-4 justify-center text-center sm:text-start sm:justify-start">
                        <a
                            href="https://cal.com/farrukhhafeez"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block cursor-pointer relative overflow-hidden border  text-baseColor bg-primaryColor rounded-3xl py-3 px-8 font-medium transition-all duration-200 ease-out group hover:scale-105 hover:border-black"
                        >
                            <span className="relative z-10 transition-colors duration-200 group-hover:text-headingColor">
                                Book A Free Call
                            </span>
                            <span className="absolute left-0 top-0 h-full w-0 bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full"></span>
                        </a>

                        <Link
                            href={'/#project'}
                            className="cursor-pointer relative overflow-hidden border  text-baseColor bg-primaryColor rounded-3xl py-3 px-8 font-medium transition-all duration-200 ease-out group hover:scale-105 hover:border-black"
                        >
                            <span className="relative z-10 transition-colors duration-200 group-hover:text-headingColor">
                                View My Work
                            </span>
                            <span className="absolute left-0 top-0 h-full w-0 bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full"></span>
                        </Link>
                    </div>


                </div>

                <Hover3DImage />
            </div>
        </section>
    )
}

export default HeroSection
