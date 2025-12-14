"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };


  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);


  return (
    <section className="container mx-auto mt-20" id="about">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl text-[#1a1a1a] font-bold mb-10 text-center"
      >
        About <span className="text-[#0084b2]"> Me </span>
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10"
      >
        {[
          { icon: "📍", title: "Location", text: "Lahore, Pakistan" },
          { icon: "🎓", title: "Education", text: "BS - Computer Science" },
          { icon: "💼", title: "Experience", text: "7+ Years" },
          {
            icon: "🚀",
            title: "Projects Completed",
            text: "30+ Large Projects",
          },
          { icon: "⭐", title: "Client Satisfaction", text: "100%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            className="bg-[#f3f3f3] rounded-2xl shadow-lg p-6 text-center hover:-translate-y-2 hover:bg-white transition-all duration-300"
          >
            <div className="flex justify-center items-center w-12 h-12 mx-auto rounded-full bg-primary/10 mb-4">
              <span className=" text-2xl">{item.icon}</span>
            </div>
            <h3 className="text-lg font-bold text-[#0084b2]  mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[#1a1a1a]">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between mt-12 px-6 bg-white"


      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex  justify-center md:justify-start items-center mb-10 md:mb-0 md:w-1/2"
        >
          <Image
            src="/About.png"
            height={400}
            width={500}
            alt="About Image"
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 w-full  md:w-2/3 lg:w-3/4  max-w-[400px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 text-[#1a1a1a] space-y-6"
        >
          {/* VIDEO TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl sm:text-3xl text-[#1a1a1a]  mb-3 text-center sm:text-start"
          >
            <strong className="font-semibold hover-underline-blue">Farrukh Hafeez</strong> |{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">
              Full-Stack Developer
            </strong>
          </motion.h2>


          {/* VIDEO PLAYER */}
          <div
            id="video-section"
            className="relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-300 mt-6"
            ref={containerRef}
          >
            <video
              ref={videoRef}
              className="w-full h-full"
              preload="metadata"
              poster="/Thumbnail.png"
              controlsList="nodownload"
              controls
            >
              <source src="/video/Best.mp4" type="video/mp4" />
            </video>
          </div>



          {/* VIDEO DESCRIPTION */}
          <p className="text-base sm:text-lg leading-relaxed text-[#1a1a1a]">
            Experienced{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">
              Full-Stack Developer
            </strong>{" "}
            specializing in building{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">
              responsive websites
            </strong>,{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">
              secure admin dashboards
            </strong>, and{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">
              AI-powered SaaS applications
            </strong>.
            I work with modern technologies including{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">React</strong>,{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">AngularJS</strong>,{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">Next.js</strong>,{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">Node.js</strong>,{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">MongoDB</strong>,{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">Ruby on Rails</strong>,{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">PHP</strong>, and{" "}
            <strong className="text-[#0084b2] font-semibold hover-underline-black">Python</strong>.
            My focus is on developing{" "}
            <strong className="font-semibold text-[#1a1a1a] hover-underline-blue">
              intelligent, dependable solutions
            </strong>{" "}
            that enable businesses to{" "}
            <strong className="font-semibold text-[#1a1a1a] hover-underline-blue">
              grow and operate efficiently
            </strong>.
          </p>


        </motion.div>


      </motion.div >


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-[#1a1a1a] space-y-6 mt-12"
      >
        <p className="text-base sm:text-lg leading-relaxed text-[#1a1a1a]">
          I&apos;m a passionate and results-driven{" "}
          <strong className="text-[#0084b2] font-semibold hover-underline-black">
            Software Developer
          </strong>{" "}
          with a{" "}
          <strong className="text-[#0084b2] font-semibold hover-underline-black">
            Bachelor&apos;s degree in Computer Science
          </strong>{" "}
          and years of hands-on experience crafting innovative digital solutions.
          My career journey has been fueled by curiosity for technology and a drive
          to create impactful products.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-[#1a1a1a]">
          Over the years, I&apos;ve built and delivered{" "}
          <strong className="text-[#0084b2] font-semibold hover-underline-black">
            high-performance web and mobile applications, LLMs
          </strong>,{" "}
          designed intelligent{" "}
          <strong className="text-[#0084b2] font-semibold hover-underline-black">
            AI-driven systems
          </strong>,{" "}
          and architected powerful{" "}
          <strong className="text-[#0084b2] font-semibold hover-underline-black">
            SaaS and ERP platforms
          </strong>{" "}
          for diverse industries. I ensure every product I build is{" "}
          <strong className="font-semibold text-[#1a1a1a] hover-underline-blue">
            scalable, secure
          </strong>,{" "}
          and{" "}
          <strong className="font-semibold text-[#1a1a1a] hover-underline-blue">
            user-centric
          </strong>.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-card p-6 rounded-xl border border-primary hover:shadow-md hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-code-xml w-6 h-6 text-primary"
              >
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Clean Code</h3>
            <p className="text-sm text-muted-foreground">
              Writing maintainable, scalable, and well documented code
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-primary hover:shadow-md hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-zap w-6 h-6 text-primary"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Performance</h3>
            <p className="text-sm text-muted-foreground">
              Optimizing applications for maximum speed and efficiency
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-primary hover:shadow-md hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users w-6 h-6 text-primary"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Collaboration</h3>
            <p className="text-sm text-muted-foreground">
              Working effectively in agile teams and cross functional
              environments
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-primary hover:shadow-md hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-target w-6 h-6 text-primary"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-sm text-muted-foreground">
              Staying ahead with cutting-edge technologies and methodologies
            </p>
          </div>
        </div>
      </motion.div>

      {/* <motion.div
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
          className="flex  justify-center md:justify-start items-center mb-10 md:mb-0 md:w-1/2"
        >
          <Image
            src="/About.png"
            height={400}
            width={500}
            alt="About Image"
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 w-full  md:w-2/3 lg:w-3/4  max-w-[400px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 text-[#1a1a1a] space-y-6"
        >
          <p className="text-base sm:text-lg leading-relaxed text-[#1a1a1a]">
            I&apos;m a passionate and results-driven
            <strong className="text-[#0084b2] font-semibold hover-underline-black">
              {" "}
              Software Developer
            </strong>{" "}
            with a
            <strong className="text-[#0084b2] font-semibold hover-underline-black">
              {" "}
              Bachelor&apos;s degree in Computer Science
            </strong>{" "}
            and years of hands-on experience crafting innovative digital
            solutions. My career journey has been fueled by curiosity for
            technology and a drive to create impactful products.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-[#1a1a1a]">
            Over the years, I&apos;ve built and delivered
            <strong className="text-[#0084b2] font-semibold hover-underline-black">
              {" "}
              high-performance web and mobile applications, LLMs,
            </strong>{" "}
            designed intelligent
            <strong className="text-[#0084b2] font-semibold hover-underline-black">
              {" "}
              AI-driven systems,
            </strong>{" "}
            and architected powerful
            <strong className="text-[#0084b2] font-semibold hover-underline-black">
              {" "}
              SaaS and ERP platforms
            </strong>{" "}
            for diverse industries. I ensure every product I build is
            <strong className="font-semibold text-[#1a1a1a]">
              {" "}
              scalable, secure,
            </strong>{" "}
            and
            <strong className="font-semibold text-[#1a1a1a]">
              {" "}
              user-centric.
            </strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="bg-card p-6 rounded-xl border border-primary hover:shadow-md hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code-xml w-6 h-6 text-primary"
                >
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                Writing maintainable, scalable, and well documented code
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-primary hover:shadow-md hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap w-6 h-6 text-primary"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Performance</h3>
              <p className="text-sm text-muted-foreground">
                Optimizing applications for maximum speed and efficiency
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-primary hover:shadow-md hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users w-6 h-6 text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Working effectively in agile teams and cross functional
                environments
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-primary hover:shadow-md hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-target w-6 h-6 text-primary"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Staying ahead with cutting-edge technologies and methodologies
              </p>
            </div>
          </div>
        </motion.div>


      </motion.div> */}
    </section >
  );
};

export default AboutMe;
