//eslint-disable-next-line
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import html from "../assets/HTML.png";
import css from "../assets/CSS.png";
import js from "../assets/JS.png";
import axios from "../assets/Axios.png";
import jwt from "../assets/JWT.webp";
import react from "../assets/react.svg";
import firebase from "../assets/Firebase.png";
import express from "../assets/expressjs.svg";
import nodejs from "../assets/Node.js.png";
import mongoDB from "../assets/mongodb.png";
import github from "../assets/github.png";
import netlify from "../assets/netlify.png";
import gemini from "../assets/Gemini.png";
import tailwind from "../assets/Tailwind_CSS.png";
import SkillItem from "./SkillItem";

const Skills = () => {
    const skills = [
        { pr: 40, img: html, name: "HTML", percentage: 90 },
        { pr: 100, img: css, name: "CSS", percentage: 75 },
        { pr: 120, img: js, name: "JS", percentage: 70 },
        { pr: 20, img: axios, name: "Axios", percentage: 95 },
        { pr: 28, img: jwt, name: "JWT", percentage: 92 },
        { pr: 120, img: react, name: "React", percentage: 70 },
        { pr: 200, img: firebase, name: "Firebase", percentage: 60 },
        { pr: 200, img: express, name: "express.js", percentage: 60 },
        { pr: 160, img: nodejs, name: "node.js", percentage: 80 },
        { pr: 20, img: mongoDB, name: "mongoDB", percentage: 95 },
        { pr: 24, img: github, name: "Github", percentage: 93 },
        { pr: 40, img: netlify, name: "Netlify", percentage: 90 },
        { pr: 120, img: gemini, name: "Gemini", percentage: 70 },
        { pr: 20, img: tailwind, name: "Tailwind CSS", percentage: 95 },
    ];

    return (
        <div className="py-10">
            <Marquee className="gap-5 overflow-hidden">
                <motion.div className="flex gap-5 items-center py-10">
                    {skills.map((skill, idx) => (
                        <motion.img
                            key={idx}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`${skill.img === axios ? "w-11 md:w-16" : "w-15 md:w-20"} filter transition-shadow duration-300 hover:drop-shadow-[0_0_30px_rgb(59,130,246)]`}
                            src={skill.img}
                            alt={skill.name}
                        />
                    ))}
                </motion.div>
            </Marquee>

            <motion.div
                transition={{ staggerChildren: 0.2 }}
                className="px-5 md:px-10 mt-20 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {skills.map((skill, idx) => (
                    <SkillItem key={idx} skill={skill} />
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
