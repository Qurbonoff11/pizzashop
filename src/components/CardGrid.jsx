import { motion } from "framer-motion";

const CardGrid = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full">
      {data.map((pizza, index) => (
        <motion.div
          key={pizza.id}
          className="group relative w-full sm:w-[48%] lg:w-[23%] overflow-hidden rounded-3xl bg-[#1F0C09] border border-white/5 shadow-lg"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          whileHover={{
            y: -12,
            scale: 1.04,
            rotate: 0.3,
            boxShadow: "0 25px 50px rgba(255, 100, 50, 0.25)",
            transition: {
              duration: 0.45,
              ease: "easeOut",
            },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-[#FF6432]/0 via-[#FF6432]/0 to-[#FFA228]/0 group-hover:from-[#FF6432]/10 group-hover:to-[#FFA228]/10 transition-all duration-700 pointer-events-none" />

          <div className="overflow-hidden">
            <motion.img
              src={pizza.image}
              alt={pizza.name}
              className="h-52 w-full object-cover"
              whileHover={{
                scale: 1.12,
                rotate: 1.5,
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            />
          </div>

          <div className="p-5 relative z-10">
            <motion.h2
              className="text-xl font-bold font-ubuntu text-white"
              whileHover={{
                x: 4,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              {pizza.name}
            </motion.h2>

            <p className="text-gray-400 text-sm mt-2 leading-relaxed line-clamp-2">
              {pizza.ingredients.join(", ")}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <motion.p
                className="text-2xl font-bold bg-linear-to-r from-[#FFA228] to-[#FF6432] bg-clip-text text-transparent"
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.3,
                  delay: 0.05,
                }}
              >
                ${pizza.price}
              </motion.p>

              <motion.button
                className="px-4 py-2 rounded-full bg-linear-to-r from-[#FFA228] to-[#FF6432] text-white text-sm font-semibold shadow-md cursor-pointer"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 20px rgba(255, 162, 40, 0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.35,
                  delay: 0.1,
                }}
              >
                Order
              </motion.button>
            </div>
          </div>

          <div className="absolute top-0 -left-full w-full h-0.5 bg-linear-to-r from-transparent via-white/60 to-transparent group-hover:left-full transition-all duration-1000" />
        </motion.div>
      ))}
    </div>
  );
};

export default CardGrid;
