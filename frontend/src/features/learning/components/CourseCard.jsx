// import { Link } from "react-router-dom";

// export default function CourseCard({ course }) {
//   return (
//     <div
//       className="
//         bg-white
//         rounded-3xl
//         overflow-hidden
//         shadow-lg
//         hover:shadow-2xl
//         transition-all
//         duration-300
//         hover:-translate-y-2
//         flex
//         flex-col
//         h-full
//       "
//     >
//       {/* Image */}
//       <div className="overflow-hidden">
//         <img
//           src={
//             course.thumbnail ||
//             "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000"
//           }
//           alt={course.title}
//           className="
//             h-56
//             w-full
//             object-cover
//             transition-transform
//             duration-500
//             hover:scale-110
//           "
//         />
//       </div>

//       {/* Content */}
//       <div className="p-6 flex flex-col flex-1">
//         {/* Category & Status */}
//         <div className="flex justify-between items-center gap-3 mb-4">
//           <span
//             className="
//               bg-[#e5f9f8]
//               text-[#1a504c]
//               px-3
//               py-1
//               rounded-full
//               text-xs
//               font-semibold
//             "
//           >
//             {course.category || "Medical Course"}
//           </span>

//           <span className="text-xs text-gray-500">
//             {course.status || "Published"}
//           </span>
//         </div>

//         {/* Title */}
//         <h2
//           className="
//             text-xl
//             font-bold
//             text-[#1a504c]
//             line-clamp-2
//             min-h-[56px]
//           "
//         >
//           {course.title}
//         </h2>

//         {/* Instructor & Duration */}
//         <div className="mt-4 min-h-[72px] space-y-2">
//           <p className="text-gray-600">
//             Instructor: {course.instructor || "Odisha Polyclinic"}
//           </p>

//           <p className="text-gray-600">
//             Duration: {course.duration || "Self Paced"}
//           </p>
//         </div>

//         {/* Bottom Section */}
//         <div className="mt-auto">
//           {/* Price */}
//           <p className="text-2xl font-bold text-[#1a504c] mt-4">
//             ₹{course.price || 0}
//           </p>

//           {/* Button */}
//           <div className="mt-6">
//             <Link
//               to={`/learning/course/${course.id}`}
//               className="
//                 block
//                 w-full
//                 text-center
//                 border
//                 border-[#1a504c]
//                 text-[#1a504c]
//                 py-3
//                 rounded-xl
//                 font-medium
//                 hover:bg-[#e5f9f8]
//                 transition
//               "
//             >
//               Details
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div
      className="
        bg-white
        border border-gray-200
        rounded-xl
        overflow-hidden
        hover:shadow-lg
        transition-all
        duration-300
        flex
        flex-col
        h-full
      "
    >
      {/* Thumbnail */}
      <div className="h-[145px] overflow-hidden bg-gray-100">
        <img
          src={
            course.thumbnail ||
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000"
          }
          alt={course.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-2.5 flex flex-col flex-1">
        {/* Title */}
        <h2
          className="
            text-[16px]
            font-bold
            text-[#1c1d1f]
            leading-5
            line-clamp-2
            min-h-[42px]
          "
        >
          {course.title}
        </h2>

        {/* Instructor */}
        <p className="text-[12px] text-gray-500 mt-1 truncate">
          {course.instructor || "Odisha Polyclinic"}
        </p>

        {/* Description */}
        <p
          className="
            text-[12px]
            text-gray-600
            mt-2
            line-clamp-2
            min-h-[36px]
          "
        >
          {course.description ||
            "Comprehensive medical training designed to build practical clinical skills and theoretical knowledge."}
        </p>

        {/* Category */}
        <div className="mt-2">
          <span
            className="
              inline-block
              px-2
              py-0.5
              rounded
              bg-[#e5f9f8]
              text-[#1a504c]
              text-[10px]
              font-medium
            "
          >
            {course.category || "Medical Course"}
          </span>
        </div>

        {/* Duration */}
        <p className="text-[11px] text-gray-500 mt-1">
          {course.duration || "Self Paced"}
        </p>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[22px] font-bold text-[#1c1d1f]">
            ₹{course.price || 0}
          </span>

          {course.originalPrice && (
            <span className="text-[12px] text-gray-400 line-through">
              ₹{course.originalPrice}
            </span>
          )}
        </div>

        {/* Status */}
        <div className="mt-1">
          <span
            className={`inline-flex px-2 py-0.5 rounded text-[10px] font-medium ${
              course.status?.toLowerCase() === "published"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {course.status || "Published"}
          </span>
        </div>

        {/* Button */}
        <Link
          to={`/learning/course/${course.id}`}
          className="
            mt-3
            block
            w-full
            text-center
            border border-[#1a504c]
            text-[#1a504c]
            py-1.5
            rounded-md
            text-sm
            font-medium
            hover:bg-[#1a504c]
            hover:text-white
            transition
          "
        >
          Details
        </Link>
      </div>
    </div>
  );
}