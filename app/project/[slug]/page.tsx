import Footer from "@/components/footer";
import ImageSlider from "@/components/image-slider";
import Navbar from "@/components/navbar";
import { Projects } from "@/data/project";
import React from "react";
import { notFound } from "next/navigation";



export async function generateMetadata({ params }: { params: Promise<{ slug: string }>;}) {
  const { slug } =await params;
  const project = Projects.find((p) => p.slug === slug);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";


  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project does not exist.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `Farrukh Hafeez - ${project.name.charAt(0).toUpperCase() + project.name.slice(1)}`,
    description: project.description,
    alternates: {
      canonical: `${baseUrl}/project/${slug}`,
    },
    openGraph: {
      title: project.name,
      description: project.description?.slice(0, 150),
      url: `${baseUrl}/project/${slug}`,
      images: [
        {
          url: `${baseUrl}${project.images[0]}`,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
      type: "website",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = Projects.find((ele) => ele.slug == slug);
  // ✅ Trigger Next.js 404 page
  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <section className="md:container mx-auto bg-baseColor text-headingColor sm:py-5 px-6 py-10">
        <div className="text-center space-y-12">
          <div className="space-y-8">
            {/* <div className="inline-flex items-center px-4 py-2 bg-[#0084b2]/10 border border-[#0084b2]/20 rounded-full mb-6">
              <span className="text-[#0084b2] text-sm font-medium">
                Featured Project
              </span>
            </div> */}
            <h1 className="text-5xl lg:text-6xl font-bold text-secondaryColor mb-6 leading-tight capitalize">
              {project.name}
            </h1>
            <p className="text-[#1a1a1a] text-xl leading-relaxed mb-8 max-w-4xl mx-auto" dangerouslySetInnerHTML={{ __html: project.description }}>
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {/* Live Link */}
              {project.live_link && (
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-[#0084b2] hover:bg-[#0084b2]/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#0084b2]/25"
                >
                  <span className="absolute left-0 top-0 h-full w-0 bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  <div className="relative z-10 flex items-center">
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
                      className="lucide lucide-globe w-5 h-5 mr-3"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    <span className="group-hover:text-white">View Live Preview</span>
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
                      className="lucide lucide-external-link w-4 h-4 ml-2 opacity-70"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </div>
                </a>
              )}
              {project.android_link && (
                <a
                  href={project.android_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-[#0084b2] hover:bg-[#0084b2]/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#0084b2]/25"
                >

                  <span className="absolute left-0 top-0 h-full w-0 bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  <div className="relative z-10 flex items-center">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                      className="text-white w-6 h-6 mr-3"
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

                    <span className="group-hover:text-white">View Android</span>
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
                      className="lucide lucide-external-link w-4 h-4 ml-2 opacity-70"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </div>
                </a>
              )}
              {project.ios_link && (
                <a
                  href={project.ios_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-[#0084b2] hover:bg-[#0084b2]/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#0084b2]/25"
                >

                  <span className="absolute left-0 top-0 h-full w-0 bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                  <div className="relative z-10 flex items-center">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-white mr-3"
                    >

                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 1a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4 -4V5a4 4 0 0 0 -4 -4H5Zm-0.5 8.086a1 1 0 1 1 2 0 1 1 0 0 1 -2 0ZM14.25 11c0 -0.914 0.836 -2.25 2.75 -2.25 0.735 0 1.4 0.357 1.855 0.736 0.235 0.196 0.442 0.42 0.597 0.653 0.141 0.211 0.298 0.517 0.298 0.861h-1.5c0 0.037 0.005 0.059 0.006 0.064a0.5 0.5 0 0 0 -0.052 -0.093 1.639 1.639 0 0 0 -0.31 -0.332c-0.294 -0.246 -0.63 -0.389 -0.894 -0.389 -1.081 0 -1.248 0.658 -1.25 0.749 -0.003 -0.004 -0.002 0 0 0.001l0 -0.001a0.672 0.672 0 0 0 0.21 0.143c0.286 0.143 0.696 0.249 1.222 0.38l0.045 0.012c0.466 0.116 1.034 0.258 1.483 0.483 0.472 0.236 1.04 0.683 1.04 1.483 0 0.914 -0.836 2.25 -2.75 2.25 -1.914 0 -2.75 -1.336 -2.75 -2.25h1.5c0 0.086 0.164 0.75 1.25 0.75 1.081 0 1.248 -0.658 1.25 -0.749 0.003 0.004 0.002 0 0 -0.001l0 0.001a0.672 0.672 0 0 0 -0.21 -0.143c-0.286 -0.143 -0.696 -0.249 -1.222 -0.38l-0.045 -0.012c-0.466 -0.116 -1.034 -0.258 -1.483 -0.483 -0.472 -0.236 -1.04 -0.683 -1.04 -1.483Zm-5.5 1.25c0 -1.173 0.85 -2 1.75 -2s1.75 0.827 1.75 2 -0.85 2 -1.75 2 -1.75 -0.827 -1.75 -2Zm1.75 -3.5c-1.86 0 -3.25 1.636 -3.25 3.5s1.39 3.5 3.25 3.5 3.25 -1.636 3.25 -3.5 -1.39 -3.5 -3.25 -3.5Zm-5.75 7V10.5h1.5v5.25h-1.5Z"
                      />
                    </svg>


                    <span className="group-hover:text-white">View Iphone</span>
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
                      className="lucide lucide-external-link w-4 h-4 ml-2 opacity-70"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </div>
                </a>
              )}


            </div>



            <ImageSlider images={project.images} name={project.name} />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8 mt-10">
          <div className="bg-darkColorV2 rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-[#0084b2] rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-[#1a1a1a]">
                Technologies &amp;
                <span className="text-[#0084b2]"> Tools </span>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.skills.map((ele, index) => (
                <div
                  key={index}
                  className="group bg-darkColorV3 hover:bg-darkColorV1 border border-gray-600 hover:border-[#0084b2]/50 rounded-xl px-4 py-3 text-center transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-[#1a1a1a] font-medium text-sm group-hover:text-[#0084b2]">
                    {ele}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-darkColorV2 rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-[#0084b2] rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold text-[#1a1a1a]">
                Project <span className="text-[#0084b2]"> Overview </span>
              </h2>
            </div>
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: project.description }}></p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
