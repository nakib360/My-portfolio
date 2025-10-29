import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import nakib360Logo from "../assets/Nakib-Logo2.png"
// eslint-disable-next-line
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [showSlide, setShowSlide] = useState(false);

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Skills", path: "/skills" },
        { label: "Projects", path: "/projects" },
        // { label: "Experience", path: "/experience" },
        { label: "Services", path: "/services" },
        { label: "Education", path: "/education" },
        { label: "Contact", path: "/contact" },
        { label: "Certifications", path: "/certifications" },
    ];


    return (
        <div className="p-4">
            <div className=" flex items-center gap-2 justify-between">
                <motion.img initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="w-20 h-10 object-cover" src={nakib360Logo} alt="" />
                <motion.div initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.1 }} viewport={{ once: true }} className="hidden md:flex items-center gap-5 cursor-pointer font-bold">
                    {
                        navLinks.map((nav, idx) => (
                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, ease: "easeInOut" }} key={idx}><NavLink to={nav.path} className={({ isActive }) => isActive ? `cursor-pointer text-blue-500 transition-colors` : `cursor-pointer hover:text-blue-500 transition-colors`} >{nav.label}</NavLink></motion.div>
                        ))
                    }
                </motion.div>
                <motion.button initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="hidden md:block px-5 py-3 bg-blue-500 rounded-xl text-white shadow-md hover:shadow-blue-500/60 hover:shadow-lg transition-shadow duration-300">
                    <Link to={"/contact"}>Hire me</Link>
                </motion.button>

                <motion.div initial={{ opacity: 0, filter: "blur(10px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }} className="md:hidden">
                    <HiOutlineMenuAlt3 onClick={() => setShowSlide(true)} className="cursor-pointer text-3xl md:hidden" />
                </motion.div>

                <AnimatePresence>
                    {
                        showSlide && <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4 }}
                            className="fixed z-50 top-0 left-0 backdrop-blur-md bg-blue-500/15 h-screen w-screen">
                            <CgClose onClick={() => setShowSlide(false)} className="absolute z-50 right-6 top-4 cursor-pointer text-3xl md:hidden" />

                            <motion.div
                                initial="hidden"
                                animate="visible"
                                transition={{ staggerChildren: 0.1 }}
                                className="flex flex-col items-start p-10 gap-3"
                            >
                                {navLinks.map((nav, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={{
                                            hidden: { opacity: 0, x: 40 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                    >
                                        <NavLink
                                            to={nav.path}
                                            onClick={() => setShowSlide(false)}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "cursor-pointer text-blue-500 transition-colors"
                                                    : "cursor-pointer hover:text-blue-500 transition-colors"
                                            }
                                        >
                                            {nav.label}
                                        </NavLink>
                                    </motion.div>
                                ))}
                            </motion.div>

                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Header;