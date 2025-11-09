import nakib from "../assets/Nakib.jpg"
import TypingText from "./ui/shadcn-io/typing-text";
import { TextGenerateEffect } from "./ui/shadcn-io/text-generate-effect";
import { ShineBorder } from "./ui/shine-border";
// eslint-disable-next-line
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router";

const About = () => {


    return (
        <div className="px-5 md:px-20 py-10 overflow-x-hidden">
            <div className="flex-col flex md:flex-row items-start md:items-center gap-10">
                <motion.div initial={{ y: 30, opacity: 0, filter: "blur(10px)" }} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="relative self-center md:self-auto inline-block rounded-full shrink-0">
                    <img className=" w-40 h-40 md:w-50 md:h-50 rounded-full object-cover" src={nakib} alt="" />
                    <ShineBorder shineColor="blue" />
                    <motion.div animate={{ rotate: "-360deg" }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute -inset-2 border-4 inline-block border-t-transparent border-l-transparent border-r-transparent p-2 rounded-full border-blue-500">
                    </motion.div>
                    <motion.div animate={{ rotate: "360deg" }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute -inset-4 border-4 inline-block border-t-transparent border-l-transparent border-b-transparent p-2 rounded-full border-blue-500">
                    </motion.div>
                </motion.div>

                <div>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-start items-center gap-1 overflow-hidden whitespace-nowrap w-full"
                    >
                        <p className="font-bold text-[clamp(1rem,4.5vw,2rem)]">
                            Nakib 360
                        </p>

                        <TypingText
                            text={[
                                "The Frontend Developer",
                                "The Backend Developer",
                                "The Full stack Developer",
                                "The MERN stack Developer",
                            ]}
                            typingSpeed={10}
                            pauseDuration={1500}
                            showCursor={false}
                            cursorCharacter="|"
                            className="font-bold text-[clamp(1rem,4.5vw,2rem)]"
                            textColors={["#3b82f6", "#8b5cf6", "#06b6d4", "#8b5cf6"]}
                            variableSpeed={{ min: 50, max: 120 }}
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="bg-white px-[0.045rem] py-2.5 md:py-[1.2em]"
                        />
                    </motion.div>

                    <div className="space-y-3">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.3 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <FaGithub onClick={() => window.open("https://github.com/nakib360", "_blank")} className="hover:text-blue-400 md:text-2xl" />
                            <FaFacebook onClick={() => window.open("https://www.facebook.com/share/1Czo8TDz4r/", "_blank")} className="hover:text-blue-400 md:text-2xl" />
                            <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/muhammad-nakib-uddin-565b61381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")} className="hover:text-blue-400 md:text-2xl" />
                        </motion.div>

                        <motion.button
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.4 }}
                            viewport={{ once: true }}
                            className="md:hidden text-sm px-3 py-1 bg-blue-500 rounded-sm text-white shadow-md hover:shadow-blue-500/60 hover:shadow-lg transition-shadow duration-300"
                        >
                            <Link to={"/contact"}>Hire me</Link>
                        </motion.button>
                    </div>
                </div>

            </div>
            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} viewport={{ once: true }} className="relative text-sm md:text-xl mt-10 p-3 rounded-xl bg-blue-500/20 overflow-hidden">
                <ShineBorder shineColor="blue" />

                <TextGenerateEffect
                    words="Hello, I'm Muhammad Nakib Uddin, also known as Nakib 360 — sounds cool, right? I'm a MERN Stack web developer from Bangladesh, and web development is my true passion. I have recently completed my web development training, and I'm currently an HSC candidate. These days, I write code every day to keep my skills sharp and consistent. I'm preparing for my future with dedication and aim to build a strong career in software engineering."
                    duration={0.1}
                    staggerDelay={0.1}
                    filter={true}
                />
            </motion.div>
        </div>
    );
};

export default About;