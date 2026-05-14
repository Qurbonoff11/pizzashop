import { motion } from "framer-motion";
import { Fries, LandingBanner, Pizza } from "../assets";
import LandingDesc from "../components/LandingDesc";

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const LandingPage = () => {
  return (
    <section className="container mx-auto min-h-screen flex items-center justify-between gap-10 pt-24">
      <LandingDesc />

      <motion.div
        className="relative w-150 h-150 flex items-center justify-center"
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        <motion.img
          src={LandingBanner}
          alt="Landing page banner"
          className="relative z-10 max-w-full h-auto"
          {...floatingAnimation}
        />

        <motion.img
          src={Pizza}
          alt="Pizza slice"
          className="absolute -top-16 -right-16 w-56 z-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.img
          src={Fries}
          alt="Fries"
          className="absolute -bottom-16 -left-16 w-56 z-20"
          animate={{
            y: [0, -18, 0],
            rotate: [0, -6, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full -z-10" />
      </motion.div>
    </section>
  );
};

export default LandingPage;
