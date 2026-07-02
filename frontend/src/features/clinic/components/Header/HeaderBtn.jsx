// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaCalendarCheck } from "react-icons/fa";

// export default function HeaderBtn() {
//   return (
//     <motion.div
//       whileHover={{
//         scale: 1.05,
//       }}
//       whileTap={{
//         scale: 0.96,
//       }}
//     >
//       <Link
//         to="/appointment"
//         className="
//           group
//           relative
//           overflow-hidden
//           inline-flex
//           items-center
//           gap-3
//           rounded-full
//           bg-gradient-to-r
//           from-[#081A33]
//           to-[#0F4C81]
//           px-6
//           py-3
//           font-semibold
//           text-white
//           shadow-lg
//           transition-all
//           duration-300
//           hover:shadow-blue-500/30
//         "
//       >
//         {/* Shine Effect */}

//         <span
//           className="
//             absolute
//             inset-0
//             -translate-x-full
//             bg-gradient-to-r
//             from-transparent
//             via-white/30
//             to-transparent
//             transition-transform
//             duration-1000
//             group-hover:translate-x-full
//           "
//         />

//         <FaCalendarCheck className="relative z-10 text-lg" />

//         <span className="relative z-10">
//           Book Appointment
//         </span>
//       </Link>
//     </motion.div>
//   );
// }

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";

export default function HeaderBtn() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        to="/appointment"
        className="
          group
          relative
          inline-flex
          items-center
          gap-2
          overflow-hidden
          rounded-full
          bg-gradient-to-r
          from-[#081A33]
          to-[#0F4C81]
          px-4
          py-2
          text-sm
          font-medium
          text-white
          shadow-md
          transition-all
          duration-300
          hover:shadow-blue-500/20
        "
      >
        {/* Shine Effect */}
        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />

        <FaCalendarCheck className="relative z-10 text-sm" />

        <span className="relative z-10 whitespace-nowrap">
          Book Appointment
        </span>
      </Link>
    </motion.div>
  );
}