//eslint-disable-next-line
import { motion, AnimatePresence, scale } from "framer-motion"
import { ShineBorder } from "./ui/shine-border";
import { useEffect, useState } from "react";
import { TbCircleDashedCheck } from "react-icons/tb";
import { TbCircleDashedX } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000)

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const contactData = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const access_key = "cbfde203-2e68-4f04-a5c0-fba96183c27a";

    if(!name.trim() || !email.trim() || !message.trim()){
      setPending(false);
      return;
    }else{
      axios.post("https://api.web3forms.com/submit", {
        access_key, name, email, message
      })
        .then(data => {
          if (data.status === 200) {
            setIsSuccess(true);
          }
          setShowToast(true)
          e.target.reset();
          setPending(false);
        });
    }
  }

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
      <form onSubmit={contactData} className="max-w-xl mx-auto space-y-5 my-10">

        {/* name */}
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} viewport={{ once: true }} className="space-y-2">
          <p className="text-xs">Type your name here</p>
          <div className="relative rounded-xl p-3 bg-blue-400/10">
            <input type="text" name="name" className=" placeholder:text-xs placeholder:text-gray-400 focus:outline-none w-full text-xs" placeholder="Your name" />
            <ShineBorder shineColor="blue" />
          </div>
        </motion.div>

        {/* gmail */}
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} viewport={{ once: true }} className="space-y-2">
          <p className="text-xs">Type your gmail here</p>
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
        <motion.button type="submit" onClick={() => setPending(true)} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1 }} viewport={{ once: true }} className="cursor-pointer flex justify-center items-center text-sm bg-blue-600 p-4 rounded-xl w-full max-w-xl shadow-md hover:shadow-blue-500/60 hover:shadow-xl transition-shadow duration-300">
          {
            pending ? <div className="m-0.5 w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div> : "Submit"
          }
        </motion.button>
      </form>

      <AnimatePresence>
        {
          showToast && (
            <motion.div initial={{ y: -40, opacity: 0, scale: 0.5 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: -40, opacity: 0, scale: 0.5 }} transition={{ duration: 0.5 }} className="fixed z-50 top-5 left-1/2 -translate-x-1/2">
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