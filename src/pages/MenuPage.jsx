import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import MenuTabBar from "../components/MenuTabBar";

const MenuPage = () => {
  return (
    <motion.section
      className="container mx-auto min-h-screen flex flex-col items-center gap-10 pt-32 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-ubuntu font-black text-white"
          animate={{
            textShadow: [
              "0 0 0px rgba(255,162,40,0)",
              "0 0 20px rgba(255,162,40,0.25)",
              "0 0 0px rgba(255,162,40,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Our Menu
        </motion.h1>

        <motion.p
          className="max-w-2xl text-[#A3A3A3] font-ubuntu text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
        >
          Discover our delicious pizzas, burgers, fries, and drinks — freshly
          prepared with premium ingredients.
        </motion.p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.6,
        }}
      >
        <MenuTabBar />
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full flex-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.7,
        }}
      >
        <Outlet />
      </motion.div>
    </motion.section>
  );
};

export default MenuPage;
