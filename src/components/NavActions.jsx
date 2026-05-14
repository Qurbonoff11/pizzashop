import { motion } from "framer-motion";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavActions = () => {
  return (
    <div className="flex items-center gap-3">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="/login"
          className="inline-block bg-linear-to-r from-[#FFA228] to-[#FF6432] px-8 py-2 rounded-full text-white font-medium font-ubuntu shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300"
        >
          Login
        </Link>
      </motion.div>

      <motion.button
        whileHover={{
          scale: 1.1,
          rotate: 8,
          boxShadow: "0px 0px 20px rgba(255, 162, 40, 0.45)",
        }}
        whileTap={{ scale: 0.9 }}
        className="relative bg-linear-to-r from-[#FFA228] to-[#FF6432] p-3 rounded-full text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 cursor-pointer"
      >
        <FaOpencart className="text-xl" />

        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-[#FF6432] text-xs font-bold flex items-center justify-center">
          2
        </span>
      </motion.button>
    </div>
  );
};

export default NavActions;
