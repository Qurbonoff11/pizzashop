import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

const links = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Menu",
    path: "/menu",
  },
  {
    text: "Events",
    path: "/events",
  },
  {
    text: "About Us",
    path: "/about",
  },
];

const NavLinks = () => {
  return (
    <ul className="flex gap-6">
      {links.map(({ text, path }) => (
        <li key={nanoid()} className="relative">
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "font-medium font-ubuntu bg-linear-to-tr from-[#FFA228] to-[#FF6432] bg-clip-text text-transparent before:content-[''] before:absolute before:w-1.5 before:h-1.5 before:bg-linear-to-tr before:from-[#FFA228] before:to-[#FF6432] before:rounded-full before:-bottom-1.5 before:left-0 before:right-0 before:mx-auto duration-300"
                : "font-medium font-ubuntu bg-[#A3A3A3] bg-clip-text text-transparent duration-300 hover:bg-linear-to-tr hover:from-[#FFA228] hover:to-[#FF6432] hover:bg-clip-text hover:text-transparent transition-all"
            }
          >
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
