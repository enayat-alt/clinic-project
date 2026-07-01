import { motion } from "framer-motion";
import {
  FaPlus,
  FaHeartbeat,
  FaStethoscope,
  FaCapsules,
} from "react-icons/fa";

export default function FloatingBackground() {
  return (
    <>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081A33] via-[#0D2D56] to-[#123E73]" />

        {/* Large Gradient Blob 1 */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-36 -left-36 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]"
        />

        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-[100px]"
        />

        {/* Blob 3 */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 left-1/2 h-64 w-64 rounded-full border border-white/5"
        />
      </div>

      {/* Floating Medical Icons */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-24 left-12 text-white/10 text-4xl"
      >
        <FaHeartbeat />
      </motion.div>

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-20 top-40 text-cyan-300/20 text-5xl"
      >
        <FaPlus />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-24 left-24 text-blue-300/10 text-5xl"
      >
        <FaStethoscope />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-28 right-40 text-white/10 text-4xl"
      >
        <FaCapsules />
      </motion.div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10" />
    </>
  );
}
