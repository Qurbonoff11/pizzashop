import { motion } from "framer-motion";

const CardGrid = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center w-full">
      {data.map((pizza, index) => (
        <motion.div
          key={pizza.id}
          className="bg-[#1F0c09] rounded-xl overflow-hidden w-full sm:w-[48%] lg:w-[23%] shadow-md cursor-pointer"
          // 🔥 entrance animation
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.08,
          }}
          // 🔥 hover animation
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <img
            src={pizza.image}
            className="h-48 w-full object-cover"
            alt={pizza.name}
          />

          <div className="p-4">
            <h2 className="text-xl font-bold font-ubuntu text-white">
              {pizza.name}
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              {pizza.ingredients.join(", ")}
            </p>

            <p className="text-green-600 font-bold mt-2">${pizza.price}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardGrid;
