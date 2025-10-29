//eslint-disable-next-line
import { motion, AnimatePresence, scale } from "framer-motion"
import { ShineBorder } from "./ui/shine-border";
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";
import { TbCircleDashedCheck } from "react-icons/tb";
import { TbCircleDashedX } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useRef();

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000)

      return () => clearTimeout(timer);
    }
  }, [showToast])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then((res) => {
        console.log('SUCCESS!', res);
        setShowToast(true);
        res.status === 200 ? setIsSuccess(true) : setIsSuccess(false);
      }
      )
      .catch((error) => {
        console.log('FAILED...', error);
      })
  };

  return (
    <div className="p-5 md:p-10">
      {/* title */}
      <div className=" flex flex-row-reverse justify-center items-center gap-2">
        <motion.hr
          initial={{ width: 0, originX: 1 }}
          whileInView={{ width: "50%" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="border border-x-0 border-b-0 border-t border-blue-700"
        />
        <motion.p initial={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }} whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className={"whitespace-nowrap text-sm md:text-3xl cursor-default text-blue-500 font-semibold"}>Contact with me</motion.p>
        <motion.hr
          initial={{ width: 0, originX: 1 }}
          whileInView={{ width: '50%' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="border border-x-0 border-b-0 border-t border-blue-700"
        />
      </div>

      {/* form */}
      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-5 my-10">

        {/* name */}
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="space-y-2">
          <p className="text-xs">Type your name hare</p>
          <div className="relative rounded-xl p-3 bg-blue-400/10">
            <input type="text" name="name" className=" placeholder:text-xs placeholder:text-gray-400 focus:outline-none w-full text-xs" placeholder="Your name" />
            <ShineBorder shineColor="blue" />
          </div>
        </motion.div>

        {/* gmail */}
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} viewport={{ once: true }} className="space-y-2">
          <p className="text-xs">Type your gmail hare</p>
          <div className="relative rounded-xl p-3 bg-blue-400/10">
            <input type="text" name="email" className=" placeholder:text-xs placeholder:text-gray-400 focus:outline-none w-full text-xs" placeholder="Your gmail" />
            <ShineBorder shineColor="blue" />
          </div>
        </motion.div>

        {/* describe */}
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.9 }} viewport={{ once: true }} className="space-y-2">
          <p className="text-xs">Describe what you want say</p>
          <div className="relative rounded-xl p-3 bg-blue-400/10">
            <textarea
              className="placeholder:text-xs placeholder:text-gray-400 focus:outline-none w-full text-xs overflow-hidden resize-none"
              placeholder="Describe"
              name="message"
              rows={10}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
            />
            <ShineBorder shineColor="blue" />
          </div>
        </motion.div>

        {/* submit */}
        <motion.button type="submit" initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} viewport={{ once: true }} className="text-sm bg-blue-600 p-4 rounded-xl w-full max-w-xl shadow-md hover:shadow-blue-500/60 hover:shadow-xl transition-shadow duration-300">Submit</motion.button>
      </form>

      <AnimatePresence>
        {
          showToast && (
            <motion.div initial={{ y: -40, opacity: 0, scale: 0.5 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: -40, opacity: 0, scale: 0.5 }} transition={{ duration: 0.5 }} className="fixed top-5 left-1/2 -translate-x-1/2">
              <div className="relative rounded-xl">
                <div className="p-4 backdrop-blur-sm bg-white/7 rounded-xl w-[90vw] md:w-lg z-50 text-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isSuccess ? <TbCircleDashedCheck className="text-xl" /> : <TbCircleDashedX className="text-xl" />}
                    <p>{isSuccess ? "Thanks for your feedback" : "Something went wrong."}</p>
                  </div>
                  <div onClick={() => setShowToast(false)}>
                    <IoClose className="text-xl cursor-pointer" />
                  </div>
                </div>
                <ShineBorder shineColor="blue" />
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default Contact;