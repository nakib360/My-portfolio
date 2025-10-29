//eslint-disable-next-line
import { easeIn, motion } from "framer-motion"
import baitushSharaf from "../assets/BatushSharaf.png"
import baitushSharaf_campus from "../assets/bait_campus.jpeg"
import Nesaria from "../assets/Nesaria.png"
import Nesaria_campus from "../assets/Nesaria_campus.jpeg"
import { ShineBorder } from "./ui/shine-border";

const Education = () => {
    const education = [
        { campus: Nesaria_campus, img: Nesaria, name: "Nesaria M.A Kamil Madrasah, Chittagong", degree: "SSC", result: "GPA 5.00" },
        { campus: baitushSharaf_campus, img: baitushSharaf, name: "Baitush Sharaf Ideal Kamil Madrasah, Chittagong", degree: "HSC", result: "Pending" },
    ]
    return (
        <div className="p-5 md:p-10 pb-0 overflow-hidden">
            <div className="flex flex-row-reverse items-center gap-2 overflow-hidden">
                <motion.hr
                    initial={{ width: 0, originX: 0 }}
                    whileInView={{ width: '16%' }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="border border-x-0 border-b-0 border-t border-blue-700"
                />
                <p className={"whitespace-nowrap text-sm md:text-xl cursor-default text-blue-500 font-semibold"}>Education</p>
                <motion.hr
                    initial={{ width: 0, originX: 1 }}
                    whileInView={{ width: '83%' }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="border border-x-0 border-b-0 border-t border-blue-700"
                />
            </div>

            <div className="flex flex-col gap-4 py-10">
                {
                    education.map((degree, idx) => {
                        return (
                            <motion.div key={idx} className={`relative w-full md:w-4/6 rounded-2xl ${idx % 2 === 0 ? "self-center md:self-start" : "self-center md:self-end"}`} initial={idx % 2 === 0 ? { x: -50, opacity: 0 } : { x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: easeIn }} viewport={{ once: true, amount: 0.4 }}>
                                <ShineBorder shineColor="blue" className={"overflow-hidden"} />
                                <div className="p-0.5 ">
                                    <img className="absolute inset-0 p-0.5 h-full w-full object-cover rounded-2xl z-0" src={degree.campus} alt="" />
                                    <div className="relative z-10">
                                        <div className="absolute inset-0 bg-linear-to-tl from-black to-transparent rounded-2xl"></div>
                                        <div className="relative z-20 p-4">
                                            <img className="w-30 md:w-50" src={degree.img} alt="" />
                                            <div className="flex flex-col justify-end items-end p-3 text-end md:mt-20">
                                                <p className="text-blue-400 font-semibold text-sm md:text-2xl">{degree.name}</p>
                                                <p className="text-gray-400 text-xs md:text-sm">{degree.degree}</p>
                                                <p className="text-gray-400 text-xs md:text-sm">{degree.result}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Education;