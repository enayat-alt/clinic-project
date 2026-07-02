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
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081A33] via-[#0D2D56] to-[#123E73]" />

        {/* Blob 1 */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-24
            -left-24
            h-72
            w-72
            rounded-full
            bg-blue-500/20
            blur-3xl

            sm:h-80
            sm:w-80

            lg:h-[420px]
            lg:w-[420px]
          "
        />

        {/* Blob 2 */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            right-0
            h-64
            w-64
            rounded-full
            bg-cyan-400/10
            blur-3xl

            sm:h-72
            sm:w-72

            lg:h-[360px]
            lg:w-[360px]
          "
        />

        {/* Decorative Circle */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            top-1/3
            hidden
            h-48
            w-48
            -translate-x-1/2
            rounded-full
            border
            border-white/5

            lg:block
          "
        />
      </div>

      {/* Floating Icons */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-6
          top-20
          text-3xl
          text-white/10

          sm:left-10
          sm:text-4xl

          lg:left-16
        "
      >
        <FaHeartbeat />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-6
          top-32
          hidden
          text-4xl
          text-cyan-300/20

          md:block

          lg:right-20
          lg:text-5xl
        "
      >
        <FaPlus />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-20
          left-10
          hidden
          text-4xl
          text-blue-300/10

          lg:block
        "
      >
        <FaStethoscope />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-24
          right-12
          hidden
          text-3xl
          text-white/10

          xl:block
        "
      >
        <FaCapsules />
      </motion.div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />
    </>
  );
}