import { FaAnglesRight } from "react-icons/fa6";
import { useState } from "react";
import { ShineBorder } from "./ui/shine-border";
import jobStock from "../assets/jobstock.png"
import sportStore from "../assets/sportstore.png"
import NA_Ai from "../assets/NA Ai.jpg"
import Rafid from "../assets/S M Rafid Ayman.png";
// eslint-disable-next-line
import { easeIn, motion } from "framer-motion";

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const projects = [
        { img: jobStock, repo: "https://github.com/nakib360/Jobstock-full-stack-website-.git", LiveLink: "https://job-stock-668d6.web.app", SiteName: "JOB-Stock", Description: "Full‑stack job marketplace where candidates submit resumes and track applications with real‑time updates." },
        { img: sportStore, repo: "https://github.com/nakib360/sport-store.git", LiveLink: "https://sport-store-af469.web.app/", SiteName: "Sport Shop", Description: "End‑to‑end e‑commerce experience for sports gear, featuring filtered search, cart, and secure checkout flows." },
        { img: NA_Ai, repo: "https://github.com/nakib360/sport-store.git", LiveLink: "https://na--ai.web.app/", SiteName: "NA Ai", Description: "Multimodal generative assistant combining Gemini and ChatGPT so users can ask anything via text or voice." },
        { img: Rafid, repo: "https://github.com/nakib360/sport-store.git", LiveLink: "https://rafid-ayman.web.app", SiteName: "S M Rafid Ayman", Description: "Portfolio site for S M Rafid Ayman, spotlighting his Bangladesh & International based graphics design work and contact options." }
    ];

    return (
        <div className="p-5 md:p-10 space-y-10 ">
            <div className=" flex flex-row-reverse items-center gap-2">
                <motion.hr
                    initial={{ width: 0, originX: 0 }}
                    whileInView={{ width: '16%' }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="border border-x-0 border-b-0 border-t border-blue-700"
                />
                <p className={"whitespace-nowrap text-sm md:text-xl cursor-default text-blue-500 font-semibold"}>Projects</p>
                <motion.hr
                    initial={{ width: 0, originX: 1 }}
                    whileInView={{ width: '83%' }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="border border-x-0 border-b-0 border-t border-blue-700"
                />
            </div>
            <div className="">
                <motion.div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map((project, idx) => (
                        <motion.div key={idx} initial={idx % 2 === 0 ? { x: -50, opacity: 0 } : { x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: easeIn }} viewport={{ once: true, amount: 0.4 }}>
                            <motion.div
                                initial={{ y: 0 }}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.5 }}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative cursor-pointer rounded-2xl p-5 bg-blue-500/10 hover:shadow-lg shadow-blue-500/20 transition-shadow overflow-hidden"
                            >
                                <ShineBorder shineColor="blue" />
                                <div onClick={() => window.open(project.LiveLink, "_blank")}>
                                    <p className="text-blue-500 font-bold">{project.SiteName}</p>
                                    <p className="text-sm text-gray-400">{project.Description}</p>
                                    {/* <iframe src={project.LiveLink} frameBorder="0" scrolling="no" className="w-full h-50 md:h-100 rounded-xl mt-5 border border-blue-900"></iframe> */}
                                    <img className="w-full rounded-xl mt-5 border border-blue-900 object-cover" src={project.img} alt="" />
                                </div>
                                <motion.div
                                    initial={{ x: -40, opacity: 0 }}
                                    animate={hoveredIndex === idx ? { x: 0, opacity: 0.4 } : { x: -40, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute top-5 right-5"
                                >
                                    <FaAnglesRight className="text-5xl text-blue-500" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
