import { motion } from "framer-motion";

export const AnimatedPin = () => {
  return (
    <div className="relative w-full h-[400px]">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: [0.5, 1.2, 1],
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-8 h-8 bg-amber-500 rounded-full" />
        <div
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-amber-500"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.1, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-16 h-16 bg-amber-500/20 rounded-full" />
      </motion.div>
    </div>
  );
};