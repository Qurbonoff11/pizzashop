import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Bgimg1, Bgimg2, Bgimg3 } from "../assets";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <main className="h-screen bg-[#1F0800] relative overflow-hidden">
        <img
          src={Bgimg2}
          alt="background image select-none"
          className="absolute bottom-3/4 left-3/5 z-0 seelect-none"
        />
        <img
          src={Bgimg3}
          alt="background image select-none"
          className="absolute top-3/5 left-1/5 seelect-none"
        />
        <img
          src={Bgimg1}
          alt="background image select-none"
          className="absolute top-0 left-0 seelect-none"
        />
        <img
          src={Bgimg1}
          alt="background image select-none"
          className="absolute bottom-0 right-25 seelect-none"
        />
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
