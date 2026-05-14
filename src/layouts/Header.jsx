import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Logo } from "../assets";
import NavActions from "../components/NavActions";
import NavLinks from "../components/NavLinks";

const Header = () => {
  return (
    <motion.header
      className="w-full absolute top-0 left-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-6">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="block">
            <motion.img
              src={Logo}
              alt="Pizza Shop Logo"
              className="cursor-pointer"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </Link>
        </motion.div>

        {/* Navigation Links */}
        <NavLinks />

        {/* Actions */}
        <NavActions />
      </nav>
    </motion.header>
  );
};

export default Header;
