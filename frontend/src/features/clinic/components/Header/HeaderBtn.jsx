
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaCalendarCheck } from "react-icons/fa";

// export default function HeaderBtn() {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.98 }}
//     >
//       <Link
//         to="/appointment"
//         className="
//           group
//           relative
//           inline-flex
//           items-center
//           gap-2
//           overflow-hidden
//           rounded-full
//           bg-gradient-to-r
//           from-[#081A33]
//           to-[#0F4C81]
//           px-4
//           py-2
//           text-sm
//           font-medium
//           text-white
//           shadow-md
//           transition-all
//           duration-300
//           hover:shadow-blue-500/20
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
//             via-white/20
//             to-transparent
//             transition-transform
//             duration-700
//             group-hover:translate-x-full
//           "
//         />

//         <FaCalendarCheck className="relative z-10 text-sm" />

//         <span className="relative z-10 whitespace-nowrap">
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
          text-[13px]
          font-normal
          tracking-tight
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

        <FaCalendarCheck className="relative z-10 text-xs" />

        <span className="relative z-10 whitespace-nowrap">
          Book Appointment
        </span>
      </Link>
    </motion.div>
  );
}