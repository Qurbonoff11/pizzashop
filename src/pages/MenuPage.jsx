import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import MenuTabBar from "../components/MenuTabBar";

const MenuPage = () => {
  return (
    <motion.section
      className="container mx-auto min-h-screen flex flex-col items-center gap-10 pt-28"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 className="text-6xl font-ubuntu font-bold text-white">
        Menu
      </motion.h1>

      <MenuTabBar />

      <motion.div className="w-full flex-1">
        <Outlet />
      </motion.div>
    </motion.section>
  );
};

export default MenuPage;
