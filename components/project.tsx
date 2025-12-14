'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Projects } from '@/data/project';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Project() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  function truncateHTML(html: string, maxLength: number): string {
    if (typeof window === "undefined") {
      // If running on the server (SSR), return a simple slice to avoid DOM usage
      const textOnly = html.replace(/<[^>]*>?/gm, "");
      return textOnly.length > maxLength
        ? textOnly.slice(0, maxLength) + "..."
        : textOnly;
    }

    const div = document.createElement("div");
    div.innerHTML = html;

    let truncated = "";
    let totalLength = 0;

    function traverse(node: ChildNode): boolean {
      for (const child of Array.from(node.childNodes)) {
        if (child.nodeType === Node.TEXT_NODE) {
          const remaining = maxLength - totalLength;
          if (remaining <= 0) return true;

          const text = child.textContent?.slice(0, remaining) || "";
          truncated += text;
          totalLength += text.length;

          if (totalLength >= maxLength) return true;
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          const element = child as HTMLElement;
          const tag = element.nodeName.toLowerCase();
          const attrs = Array.from(element.attributes)
            .map((attr) => ` ${attr.name}="${attr.value}"`)
            .join("");

          truncated += `<${tag}${attrs}>`;

          const done = traverse(child);
          truncated += `</${tag}>`;

          if (done) return true;
        }
      }
      return false;
    }

    traverse(div);
    return truncated + (totalLength >= maxLength ? "..." : "");
  }

  return (
    <section className="container mx-auto mt-20" id="project">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl text-[#1a1a1a] font-bold mb-10 text-center"
      >
        Personal <span className="text-[#0084b2]">Projects</span>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-16"
      >
        {Projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden border border-gray-200 flex flex-col cursor-pointer"
            onClick={() => {

              router.push(`/project/${project.slug}`)

            }}
          >
            <div className="relative h-56 overflow-hidden group">
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />


            </div>

            {/* Project Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-headingColor mb-2">
                {project.name}
              </h3>
              <p
                className="text-sm text-gray-600 mb-4 flex-grow"
                dangerouslySetInnerHTML={{
                  __html: isClient
                    ? truncateHTML(project.description, 100)
                    : project.description.replace(/<[^>]*>?/gm, "").slice(0, 100) + "...",
                }}
              ></p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.skills.slice(0, 6).map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-[#0084b2]/10 text-[#0084b2] font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {project.skills.length > 6 && (
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-500 rounded-full">
                    +{project.skills.length - 6}
                  </span>
                )}
              </div>

              {/* Bottom Action Buttons */}
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                {project.live_link && <a
                  href={project.live_link}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}

                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#0084b2] font-semibold hover:underline"
                >
                  Live Preview <ExternalLink className="w-4 h-4" />
                </a>}
                {project.android_link && <a
                  href={project.android_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#0084b2] font-semibold hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    stroke="currentColor"
                  >
                    <g id="Layer_2" data-name="Layer 2">

                      <g id="icons_Q2" data-name="icons Q2">
                        <g>
                          <path d="M7.7,16.2A2.7,2.7,0,0,0,5,18.9V30.3a2.8,2.8,0,0,0,1.2,2.3,2.6,2.6,0,0,0,1.5.4,2.7,2.7,0,0,0,2.2-1.1l.2-.3.3-.7v-12A2.7,2.7,0,0,0,7.7,16.2Z" />
                          <path d="M29.6,6l1.9-3.4c0-.1.1-.1.1-.2a.8.8,0,0,0-.2-.4h-.5l-2,3.5a4.9,4.9,0,0,0-1.7-.6,13.6,13.6,0,0,0-3.6-.5H21.8a12.9,12.9,0,0,0-3.5,1L16.4,2.2A.5.5,0,0,0,16,2h-.2a.4.4,0,0,0-.1.3v.2L17.6,6h0a11.8,11.8,0,0,0-4.4,3.9l-.5.8-.6,1.4a8.9,8.9,0,0,0-.7,3.6H35.8A11.1,11.1,0,0,0,29.6,6ZM18.1,11.4A1.1,1.1,0,0,1,17,10.3a1.1,1.1,0,0,1,1.1-1,1.1,1.1,0,0,1,1,1A1.1,1.1,0,0,1,18.1,11.4Zm11.1,0a1,1,0,0,1-1-1.1,1,1,0,0,1,2,0A1,1,0,0,1,29.2,11.4Z" />
                          <path d="M11.5,16.8V34.4a2.9,2.9,0,0,0,2.9,2.9h2v6A2.6,2.6,0,0,0,18,45.8h1.1l1-.2a2.7,2.7,0,0,0,1.7-2.5v-6h3.7v6a2.7,2.7,0,1,0,5.4,0v-6h2a3.5,3.5,0,0,0,1.7-.6,2.9,2.9,0,0,0,1.2-2.3V16.8Z" />
                          <path d="M42.2,18.9a2.6,2.6,0,0,0-2.1-2.6h-.6a2.7,2.7,0,0,0-2.7,2.7V30.3a2.7,2.7,0,1,0,5.4,0Z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <ExternalLink className="w-4 h-4" />
                </a>
                }

                {project.ios_link && <a
                  href={project.ios_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#0084b2] font-semibold hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >

                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 1a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4 -4V5a4 4 0 0 0 -4 -4H5Zm-0.5 8.086a1 1 0 1 1 2 0 1 1 0 0 1 -2 0ZM14.25 11c0 -0.914 0.836 -2.25 2.75 -2.25 0.735 0 1.4 0.357 1.855 0.736 0.235 0.196 0.442 0.42 0.597 0.653 0.141 0.211 0.298 0.517 0.298 0.861h-1.5c0 0.037 0.005 0.059 0.006 0.064a0.5 0.5 0 0 0 -0.052 -0.093 1.639 1.639 0 0 0 -0.31 -0.332c-0.294 -0.246 -0.63 -0.389 -0.894 -0.389 -1.081 0 -1.248 0.658 -1.25 0.749 -0.003 -0.004 -0.002 0 0 0.001l0 -0.001a0.672 0.672 0 0 0 0.21 0.143c0.286 0.143 0.696 0.249 1.222 0.38l0.045 0.012c0.466 0.116 1.034 0.258 1.483 0.483 0.472 0.236 1.04 0.683 1.04 1.483 0 0.914 -0.836 2.25 -2.75 2.25 -1.914 0 -2.75 -1.336 -2.75 -2.25h1.5c0 0.086 0.164 0.75 1.25 0.75 1.081 0 1.248 -0.658 1.25 -0.749 0.003 0.004 0.002 0 0 -0.001l0 0.001a0.672 0.672 0 0 0 -0.21 -0.143c-0.286 -0.143 -0.696 -0.249 -1.222 -0.38l-0.045 -0.012c-0.466 -0.116 -1.034 -0.258 -1.483 -0.483 -0.472 -0.236 -1.04 -0.683 -1.04 -1.483Zm-5.5 1.25c0 -1.173 0.85 -2 1.75 -2s1.75 0.827 1.75 2 -0.85 2 -1.75 2 -1.75 -0.827 -1.75 -2Zm1.75 -3.5c-1.86 0 -3.25 1.636 -3.25 3.5s1.39 3.5 3.25 3.5 3.25 -1.636 3.25 -3.5 -1.39 -3.5 -3.25 -3.5Zm-5.75 7V10.5h1.5v5.25h-1.5Z"
                    />
                  </svg>
                  <ExternalLink className="w-4 h-4" />
                </a>
                }



                <Link
                  href={`/project/${project.slug}`}
                  className="text-sm font-medium text-gray-700 hover:text-[#0084b2]"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Details →
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
