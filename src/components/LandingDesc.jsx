import { motion } from "framer-motion";
import { Lightning } from "../assets";

const LandingDesc = () => {
  return (
    <motion.div
      className="flex flex-col gap-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="font-ubuntu text-7xl font-black text-white w-4/6 leading-tight"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        The Fastest Pizza&nbsp;
        <motion.img
          src={Lightning}
          alt="Lightning"
          className="inline-block align-middle"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        />
        &nbsp;Delivery
      </motion.h1>

      <motion.p
        className="text-[#A3A3A3] w-2/5 font-ubuntu"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        We will deliver juicy pizza for your family in 30 minutes, if the
        courier is late - <span className="text-white">pizza is free</span>!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
      >
        <motion.button
          className="bg-linear-to-r from-[#FF6432] to-[#FFA228] text-white font-ubuntu font-medium py-2 px-12 rounded-full cursor-pointer"
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 25px rgba(255, 162, 40, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Order Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default LandingDesc;
