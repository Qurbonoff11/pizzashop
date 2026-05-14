import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const links = [
  { text: "Home", path: "/" },
  { text: "Menu", path: "/menu" },
  { text: "Events", path: "/events" },
  { text: "About Us", path: "/about" },
];

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-8">
      {links.map(({ text, path }) => (
        <li key={path} className="relative">
          <NavLink to={path}>
            {({ isActive }) => (
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`relative font-ubuntu font-medium text-base transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#FFA228] to-[#FF6432] bg-clip-text text-transparent"
                    : "text-[#A3A3A3] hover:text-white"
                }`}
              >
                {text}

                {/* Active underline dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute left-1/2 -bottom-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#FFA228] to-[#FF6432]"
                    style={{ x: "-50%" }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </motion.div>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
