
// import { Link } from "react-router-dom";

// export default function CourseCard({ course }) {
//   return (
//     <div
//       className="
//         bg-white
//         border border-gray-200
//         rounded-xl
//         overflow-hidden
//         hover:shadow-lg
//         transition-all
//         duration-300
//         flex
//         flex-col
//         h-full
//       "
//     >
//       {/* Thumbnail */}
//       <div className="h-[145px] overflow-hidden bg-gray-100">
//         <img
//           src={
//             course.thumbnail ||
//             "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000"
//           }
//           alt={course.title}
//           className="
//             w-full
//             h-full
//             object-cover
//             transition-transform
//             duration-300
//             hover:scale-105
//           "
//         />
//       </div>

//       {/* Content */}
//       <div className="p-2.5 flex flex-col flex-1">
//         {/* Title */}
//         <h2
//           className="
//             text-[16px]
//             font-bold
//             text-[#1c1d1f]
//             leading-5
//             line-clamp-2
//             min-h-[42px]
//           "
//         >
//           {course.title}
//         </h2>

//         {/* Instructor */}
//         <p className="text-[12px] text-gray-500 mt-1 truncate">
//           {course.instructor || "Odisha Polyclinic"}
//         </p>

//         {/* Description */}
//         <p
//           className="
//             text-[12px]
//             text-gray-600
//             mt-2
//             line-clamp-2
//             min-h-[36px]
//           "
//         >
//           {course.description ||
//             "Comprehensive medical training designed to build practical clinical skills and theoretical knowledge."}
//         </p>

//         {/* Category */}
//         <div className="mt-2">
//           <span
//             className="
//               inline-block
//               px-2
//               py-0.5
//               rounded
//               bg-[#e5f9f8]
//               text-[#1a504c]
//               text-[10px]
//               font-medium
//             "
//           >
//             {course.category || "Medical Course"}
//           </span>
//         </div>

//         {/* Duration */}
//         <p className="text-[11px] text-gray-500 mt-1">
//           {course.duration || "Self Paced"}
//         </p>

//         {/* Price */}
//         <div className="mt-2 flex items-center gap-2">
//           <span className="text-[22px] font-bold text-[#1c1d1f]">
//             ₹{course.price || 0}
//           </span>

//           {course.originalPrice && (
//             <span className="text-[12px] text-gray-400 line-through">
//               ₹{course.originalPrice}
//             </span>
//           )}
//         </div>

//         {/* Status */}
//         <div className="mt-1">
//           <span
//             className={`inline-flex px-2 py-0.5 rounded text-[10px] font-medium ${
//               course.status?.toLowerCase() === "published"
//                 ? "bg-green-100 text-green-700"
//                 : "bg-yellow-100 text-yellow-700"
//             }`}
//           >
//             {course.status || "Published"}
//           </span>
//         </div>

//         {/* Button */}
//         <Link
//           to={`/learning/course/${course.id}`}
//           className="
//             mt-3
//             block
//             w-full
//             text-center
//             border border-[#1a504c]
//             text-[#1a504c]
//             py-1.5
//             rounded-md
//             text-sm
//             font-medium
//             hover:bg-[#1a504c]
//             hover:text-white
//             transition
//           "
//         >
//           Details
//         </Link>
//       </div>
//     </div>
//   );
// }



import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full font-sans">
      {/* Thumbnail */}
      <div className="h-40 overflow-hidden bg-gray-50 relative">
        <img
          src={
            course.thumbnail ||
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000"
          }
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Category Badge overlay on image */}
        <div className="absolute top-2.5 left-2.5">
          <span className="bg-white/90 backdrop-blur-xs text-teal-800 text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-xs">
            {course.category || "Medical"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Instructor & Duration */}
          <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1.5">
            <span className="truncate max-w-[120px]">
              {course.instructor || "Odisha Polyclinic"}
            </span>
            <span>{course.duration || "Self Paced"}</span>
          </div>

          {/* Title */}
          <h2 className="text-xs font-bold text-gray-900 leading-snug line-clamp-2 min-h-[32px]">
            {course.title}
          </h2>

          {/* Description */}
          <p className="text-[11px] text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
            {course.description ||
              "Comprehensive medical training designed to build practical clinical skills and theoretical knowledge."}
          </p>
        </div>

        {/* Footer: Price & Action */}
        <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-bold text-gray-900">
                ₹{course.price || 0}
              </span>
              {course.originalPrice && (
                <span className="text-[10px] text-gray-400 line-through">
                  ₹{course.originalPrice}
                </span>
              )}
            </div>
          </div>

          <Link
            to={`/learning/course/${course.id}`}
            className="bg-teal-700 text-white text-[11px] font-medium px-3.5 py-1.5 rounded-lg hover:bg-teal-800 transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}