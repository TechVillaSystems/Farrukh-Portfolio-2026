'use client'
import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

const skillstechnologies = () => {
    const tools = [
        { name: "Mongo DB", icon: "/icons/mongodb.png" },
        { name: "Express JS", icon: "/icons/Express.png" },
        { name: "React JS", icon: "/icons/React.png" },
        { name: "Node JS", icon: "/icons/nodejs.png" },
        { name: "React Native", icon: "/icons/React.png" },
        { name: "Nest Js", icon: "/icons/nest.js.png" },
        { name: "Javascript", icon: "/icons/JavaScript.png" },
        { name: "Python", icon: "/icons/python.png" },
        { name: "HTML 5", icon: "/icons/HTML5.png" },
        { name: "CSS 3", icon: "/icons/css.png" },
        // { name: "Wordpress", icon: "/icons/wordpress.png" },
        { name: "PHP", icon: "/icons/php.png" },
        { name: "Angular JS", icon: "/icons/angular.png" },
        { name: "Next JS", icon: "/icons/Next.js.png" },
        { name: "Django", icon: "/icons/django.png" },
        { name: "Docker", icon: "/icons/docker.png" },
        { name: "Kubernetes", icon: "/icons/kubernetes.png" },
        { name: "AWS", icon: "/icons/aws.png" },
        { name: "Azure", icon: "/icons/azure.png" },
        { name: "Terraform", icon: "/icons/terraform.png" },
        { name: "TensorFlow", icon: "/icons/tensorflow.png" },
        { name: "PyTorch", icon: "/icons/pytorch.png" },
        { name: "MLflow", icon: "/icons/mlflowicon.png" },
        { name: "Langchain", icon: "/icons/langchain.png" },
        { name: "n8n", icon: "/icons/n8n.png" },
    ];

    return (
        <section className="container mx-auto mt-20" id="skillstechnologies">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl sm:text-5xl text-[#1a1a1a] font-bold mb-10 text-center"
            >
                Skills & <span className="text-[#0084b2]"> Technologies </span>
            </motion.h2>

            {/* <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <p className="text-lg sm:text-2xl leading-relaxed text-primary text-center">
                    The tools and technologies I use to bring innovative ideas to life
                </p>
            </motion.div> */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-between py-16 px-6 bg-white"
            >

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex  md:justify-start items-center mb-10 md:mb-0 md:w-1/2"
                >

                    <Image
                        src="/SkillsImage.JPG"
                        height={400}
                        width={500}
                        alt="Skills Image "
                        className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 w-full   md:w-3/4  max-w-[400px]"
                    />

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="md:w-1/2 text-[#1a1a1a] space-y-6"
                >
                    <motion.div
                        className="grid grid-cols-2 gap-3 md:grid-cols-3  xl:grid-cols-4 mt-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.08 },
                            },
                        }}
                    >
                        {tools.map((tool) => (
                            <motion.div
                                key={tool.name}
                                className="flex items-center px-3 py-3 border tools rounded-lg border-primary bg-white transition-all duration-200"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 0 15px 3px rgba(0,132,178,0.5)",
                                }}
                                whileTap={{ scale: 0.97 }}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <Image
                                    className="w-8 h-8 md:w-10 md:h-10"
                                    width={60}
                                    height={30}
                                    alt={tool.name}
                                    src={tool.icon}
                                />
                                <p className="ml-2 text-base font-medium text-secondary md:ml-1">
                                    {tool.name}
                                </p>
                            </motion.div>

                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default skillstechnologies;
