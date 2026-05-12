import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavActions = () => {
  return (
    <div className="flex gap-2">
      <Link
        to="/login"
        className="bg-linear-to-r from-[#FFA228] to-[#FF6432] px-9 py-0.5 rounded-full text-white font-medium font-ubuntu"
      >
        Login
      </Link>
      <button className="bg-linear-to-r from-[#FFA228] to-[#FF6432] p-2 rounded-full text-white font-medium font-ubuntu cursor-pointer">
        <FaOpencart />
      </button>
    </div>
  );
};

export default NavActions;
