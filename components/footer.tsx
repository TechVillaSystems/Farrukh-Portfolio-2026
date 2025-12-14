'use client'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <section className="md:container mx-auto bg-baseColor text-headingColor sm:py-5 px-6 py-10">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row md:items-center justify-between py-8  bg-white gap-5"
            >
                <div className='sm:w-3/5'>
                   <Link href={"/"}>
                    <Image
                        src={"/Logo/logo_transparent.png"}
                        alt="Farrukh Hafeez"
                        width={80}
                        height={100}
                        className="cursor-pointer"
                    />
                   </Link>

                    <p  className="text-sm mb-6 text-[#1a1a1a] transition-all duration-500 ease-in-out hover:[text-shadow:0_1px_3px_rgba(26,26,26,0.35)]">   I’m a Full-Stack Developer with over 7+ years of experience delivering
                        high-quality, scalable, and user-focused web solutions. Skilled in React,
                        AngularJS, Next.js, Node.js, MongoDB, Ruby on Rails, PHP and Python. I
                        specialize in building responsive websites, custom admin dashboards, and
                        AI-powered SaaS applications that align with business goals.</p>
                </div>

                <div>
                    <div className="space-y-2">
                        <Link href='/#' className="text-sm relative cursor-pointer  font-semibold text-[#0084b2] hover:text-[#1a1a1a] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#1a1a1a] after:transition-all after:duration-300 hover:after:w-[40px] block">
                            Home
                        </Link>

                        <Link href='/#about' className="text-sm relative cursor-pointer  font-semibold text-[#0084b2] hover:text-[#1a1a1a] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#1a1a1a] after:transition-all after:duration-300 hover:after:w-[42px] block">
                            About
                        </Link>

                        <Link href='/#skillstechnologies' className="text-sm relative cursor-pointer  font-semibold text-[#0084b2] hover:text-[#1a1a1a] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#1a1a1a] after:transition-all after:duration-300 hover:after:w-[40px] block">
                            Skills
                        </Link>

                        <Link href='/#project' className="text-sm relative cursor-pointer  font-semibold text-[#0084b2] hover:text-[#1a1a1a] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#1a1a1a] after:transition-all after:duration-300 hover:after:w-full block">
                            Projects
                        </Link>

                        <Link href='/#contact' className="text-sm relative cursor-pointer  font-semibold text-[#0084b2] hover:text-[#1a1a1a] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#1a1a1a] after:transition-all after:duration-300 hover:after:w-full block">
                            Contact
                        </Link>
                    </div>
                </div>



            </motion.div>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-5 "><p className="text-primary text-sm hover:underline">© 2026 Farrukh Hafeez. All rights reserved.</p></div>

        </section>
    )
}
