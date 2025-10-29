import nakib from "../assets/Nakib.jpg"
import TypingText from "./ui/shadcn-io/typing-text";
import { TextGenerateEffect } from "./ui/shadcn-io/text-generate-effect";
import { ShineBorder } from "./ui/shine-border";
// eslint-disable-next-line
import { motion } from "framer-motion"

const About = () => {


    return (
        <div className="px-5 md:px-20 py-10 overflow-x-hidden">
            <div className="flex-col flex md:flex-row items-start md:items-center gap-10">
                <motion.div initial={{ y: 30, opacity: 0, filter: "blur(10px)" }} whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="relative inline-block rounded-full shrink-0">
                    <img className=" w-40 h-40 md:w-50 md:h-50 rounded-full object-cover" src={nakib} alt="" />
                    <ShineBorder shineColor="blue"/>
                    <motion.div animate={{ rotate: "-360deg" }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute -inset-2 border-4 inline-block border-t-transparent border-l-transparent border-r-transparent p-2 rounded-full border-blue-500">
                    </motion.div>
                    <motion.div animate={{ rotate: "360deg" }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute -inset-4 border-4 inline-block border-t-transparent border-l-transparent border-b-transparent p-2 rounded-full border-blue-500">
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-start items-center gap-2 overflow-hidden whitespace-nowrap w-full"
                >
                    <p className="font-bold text-[clamp(1rem,4vw,2rem)]">
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
                        className="font-bold text-[clamp(1rem,4vw,2rem)]"
                        textColors={["#3b82f6", "#8b5cf6", "#06b6d4", "#8b5cf6"]}
                        variableSpeed={{ min: 50, max: 120 }}
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="bg-white px-0.5 py-3 md:py-[1.2em]"
                    />
                </motion.div>

            </div>
            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} viewport={{ once: true }} className="relative mt-10 p-3 rounded-xl bg-blue-500/20 overflow-hidden">
                <ShineBorder shineColor="blue" />

                <TextGenerateEffect
                    words="Hello, I’m Muhammad Nakib Uddin, also known as Nakib 360 — sounds cool, right? I’m a MERN Stack web developer from Bangladesh, and web development is my true passion. I have recently completed my web development training, and I’m currently a HSC candidate. These days, I write code every day to keep my skills sharp and consistent. I’m preparing for my future with dedication and aim to build a strong career in software engineering."
                    duration={0.1}
                    staggerDelay={0.1}
                    filter={true}
                />
            </motion.div>
        </div>
    );
};

export default About;