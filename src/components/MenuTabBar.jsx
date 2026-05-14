import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  { name: "Show All", path: "/menu" },
  { name: "Meat", path: "/menu/meat" },
  { name: "Vegetarian", path: "/menu/vegetarian" },
  { name: "Sea products", path: "/menu/sea" },
  { name: "Mushroom", path: "/menu/mushroom" },
];

const MenuTabBar = () => {
  return (
    <div className="w-full flex justify-center font-ubuntu">
      <div className="relative flex gap-14 px-6 py-2 rounded-xl">
        {tabs.map((tab) => {
          const isRoot = tab.path === "/menu";

          return (
            <NavLink
              key={tab.name}
              to={tab.path}
              end={isRoot}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition ${
                  isActive ? "text-white" : "text-gray-500"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {tab.name}

                  <span className="absolute inset-0 rounded-lg hover:bg-[#FFA228]/10 transition" />

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#FFA228] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTabBar;
