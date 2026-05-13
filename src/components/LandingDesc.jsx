import { Lightning } from "../assets";

const LandingDesc = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-ubuntu text-7xl font-black text-white w-4/6 ">
        The Fastest Pizza&nbsp;
        <img
          src={Lightning}
          alt="Lightning"
          className="inline-block align-middle"
        />
        &nbsp;Delivery
      </h1>
      <p className="text-[#A3A3A3] w-2/5 font-ubuntu">
        We will deliver juicy pizza for your family in 30 minutes, if the
        courier is late - <span className="text-white">pizza is free</span>!
      </p>
      <div>
        <button className="bg-linear-to-r from-[#FF6432] to-[#FFA228] text-white font-ubuntu font-medium py-2 px-12 rounded-full  cursor-pointer hover:scale-105 transition-transform duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default LandingDesc;
