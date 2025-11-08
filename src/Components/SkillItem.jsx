import { useRef } from "react";
import Counter from "./Counter";
//eslint-disable-next-line
import { motion, useInView } from "framer-motion";

const SkillItem = ({ skill }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 });

    return (
        <motion.div
            ref={ref}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="flex items-center gap-2">
                <img className="w-4" src={skill.img} alt={skill.name} />
                <p className="text-white font-bold">{skill.name}</p>
            </div>

            <div className="flex items-center gap-1">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="p-1 w-full bg-blue-500 rounded-full"
                />
                <div className="text-white text-[10px]">
                    {isInView ? <Counter target={skill.percentage} /> : 0}
                </div>
            </div>
        </motion.div>
    );
};

export default SkillItem;