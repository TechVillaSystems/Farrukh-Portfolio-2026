"use client";
import { sendEmail } from "@/actions";
import { motion } from "framer-motion";
import { Calendar, Facebook, Github, Globe, Instagram, LinkedinIcon, Mail, Phone, SendIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { useActionState } from "react";
import toast from "react-hot-toast";

export default function ContactUs() {
  const initialState = { success: null as null | boolean };
  const [state, formAction, isPending] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);


  useEffect(() => {
    if (state.success === true) {
      toast.success("✅ Message sent successfully!");
      formRef.current?.reset(); // 👈 reset form fields
    } else if (state.success === false) {
      toast.error("❌ Failed to send message. Try again later.");
    }
  }, [state.success]);
  return (
    <section
      className="md:container mx-auto bg-baseColor text-headingColor sm:py-5 px-6 md:py-10"
      id="contact"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl text-[#1a1a1a] font-bold md:mb-10 text-center"
      >
        Connect <span className="text-[#0084b2]"> With Me </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between py-16 bg-white gap-10 rounded-2xl px-6"
      >
        {/* LEFT SIDE — CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-2/4 w-full flex flex-col justify-center"
        >
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a
                  href="mailto:farrukhhafeezdev@gmail.com"
                  className="text-primary hover:underline"
                >
                  farrukhhafeezdev@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <a href="tel:+923353574786" className="text-primary hover:underline">
                  +92 335 35 74 786
                </a>
              </div>
            </div>

            {/* Schedule Meeting */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Schedule Meeting</p>
                <a
                  href="https://cal.com/farrukhhafeez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Book a Time Slot
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              <a
                href="https://github.com/FarrukhHafeez-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Github
                  size={24}
                  className="text-primaryColor transition-all duration-300 group-hover:scale-125 group-hover:stroke-[#1a1a1a]"
                />
              </a>
              <a href="mailto:farrukhhafeezdev@gmail.com" className="group">
                <Mail
                  size={24}
                  className="text-primaryColor transition-all duration-300 group-hover:scale-125 group-hover:stroke-[#1a1a1a]"
                />
              </a>

              <a
                href="https://www.facebook.com/FarrukhHafeezDev/"
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
                href="https://www.instagram.com/farrukhhafeezdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Instagram
                  size={24}
                  className="text-primaryColor transition-all duration-300 group-hover:scale-125 group-hover:stroke-[#1a1a1a]"
                />
              </a>

           
              <a
                href="https://www.linkedin.com/in/farrukhhafeezdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"

              >
                <LinkedinIcon
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

              <a href="#" target="_blank" rel="noopener noreferrer" className="group">
                <Globe
                  size={24}
                  className="text-primaryColor transition-all duration-300 group-hover:scale-125 group-hover:stroke-[#1a1a1a]"
                />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-2/5 w-full"
        >
          <h2 className="flex items-center gap-2 text-xl sm:text-3xl  font-bold mb-4 text-headingColor">
            <SendIcon className="w-7 h-7 text-primary" />
            Get In <span className="text-primary"> Touch</span>
          </h2>

          <form
            action={formAction}
            className="space-y-5 "
            ref={formRef}
          >

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0084b2]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0084b2]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Write your message..."
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0084b2]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="cursor-pointer relative overflow-hidden border text-baseColor bg-primaryColor rounded-xl py-3 px-8 font-medium transition-all duration-200 ease-out group hover:scale-105 hover:border-black w-full"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-200 group-hover:text-headingColor">
                <SendIcon className="w-5 h-5 text-white transition-colors" />
                {isPending ? "Sending..." : "Send Message"}
              </span>

              <span className="absolute left-0 top-0 h-full w-0 bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>

          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
