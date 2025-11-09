//eslint-disable-next-line
import { easeIn, motion } from "framer-motion";
import { ShineBorder } from "./ui/shine-border";

import { FaLaptopCode } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { MdDashboardCustomize } from 'react-icons/md';
import { RiShieldKeyholeFill } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import { IoChatbubblesSharp } from 'react-icons/io5';
import { MdWeb } from 'react-icons/md';
import { AiOutlineBug } from 'react-icons/ai';
import { BiData } from 'react-icons/bi';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { useState } from "react";


const Services = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const services = [
        {
            icon: FaLaptopCode,
            title: 'Full-Stack Web Development',
            description: 'Build complete MERN web apps — fast, secure, and scalable.'
        },
        {
            icon: TbApi,
            title: 'API Development & Integration',
            description: 'Custom REST APIs, third-party integrations like Stripe, Google Maps, etc.'
        },
        {
            icon: MdDashboardCustomize,
            title: 'Admin Dashboard / CMS',
            description: 'Custom dashboards for managing content, users, and analytics with modern UI.'
        },
        {
            icon: RiShieldKeyholeFill,
            title: 'Authentication System',
            description: 'Secure login/register systems using JWT, Firebase, or OAuth.'
        },
        {
            icon: FaShoppingCart,
            title: 'E-commerce Development',
            description: 'Complete online store with cart, checkout, and payment gateway integration.'
        },
        // {
        //     icon: IoChatbubblesSharp,
        //     title: 'Real-time Chat & Notifications',
        //     description: 'Socket.io or Firebase-based live chat and instant notification systems.'
        // },
        {
            icon: MdWeb,
            title: 'Portfolio / Landing Page Design',
            description: 'Responsive, SEO-friendly landing pages and personal portfolios.'
        },
        {
            icon: AiOutlineBug,
            title: 'Bug Fixing & Optimization',
            description: 'Fix UI, backend, or performance issues and optimize existing MERN projects.'
        },
        // {
        //     icon: BiData,
        //     title: 'Database Design & Management',
        //     description: 'Design, model, and optimize MongoDB databases for performance and scalability.'
        // },
        {
            icon: FaCloudUploadAlt,
            title: 'Deployment & Hosting',
            description: 'Deploy apps on Vercel, Render, Firebase, Netlify etc.'
        }
    ]

    return (
        <div className="p-5 md:p-10">
            <div className="flex items-center gap-2">
                <motion.hr
                    initial={{ width: 0, originX: 0 }}
                    whileInView={{ width: '16%' }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="border border-x-0 border-b-0 border-t border-blue-700"
                />
                <p className={"whitespace-nowrap text-sm md:text-xl cursor-default text-blue-500 font-semibold"}>Services I provide</p>

                <motion.hr
                    initial={{ width: 0, originX: 1 }}
                    whileInView={{ width: '83%' }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="border border-x-0 border-b-0 border-t border-blue-700"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
                {
                    services.map((service, idx) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: easeIn }}
                                viewport={{ once: true, amount: 0.4 }}
                                onMouseEnter={() => setHoverIndex(idx)}
                                onMouseLeave={() => setHoverIndex(null)}
                                key={idx}
                                className="relative cursor-default p-6 py-10 bg-blue-500/10 rounded-xl hover:shadow-lg shadow-blue-500/20 transition-shadow overflow-hidden"
                            >
                                <ShineBorder shineColor="blue" />

                                <motion.div
                                    initial={{ x: -40, opacity: 0.4 }}
                                    animate={hoverIndex === idx ? { x: 0, opacity: 1 } : { x: -40, opacity: 0.4 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute top-1/2 right-10 -translate-y-1/2 text-blue-400/40 text-8xl z-0 pointer-events-none"
                                >
                                    <Icon />
                                </motion.div>

                                <div className="relative z-10">
                                    <p className="text-sm md:text-xl text-blue-500 font-semibold">{service.title}</p>
                                    <p className="text-xs md:text-sm text-gray-400">{service.description}</p>
                                </div>
                            </motion.div>

                        )
                    })
                }
            </div>
        </div>
    );
};

export default Services;