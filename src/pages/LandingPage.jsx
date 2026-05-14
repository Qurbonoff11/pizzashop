import { motion } from "framer-motion";
import { LandingBanner } from "../assets";
import LandingDesc from "../components/LandingDesc";

const LandingPage = () => {
  return (
    <section className="container mx-auto h-screen flex items-center justify-center gap-10">
      {/* Left side text */}
      <LandingDesc />

      {/* Right side image animation */}
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
        className="relative"
      >
        <motion.img
          src={LandingBanner}
          alt="Landing page banner"
          className="max-w-full h-auto"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default LandingPage;
