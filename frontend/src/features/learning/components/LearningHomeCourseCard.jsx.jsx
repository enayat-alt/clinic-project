
// import { Link } from "react-router-dom";

// export default function LearningHomeCourseCard({ course }) {
//   return (
//     <div
//       className="
//         bg-white
//         rounded-2xl
//         overflow-hidden
//         shadow-md
//         hover:shadow-xl
//         transition-all
//         duration-300
//         hover:-translate-y-1
//         flex
//         flex-col
//         h-full
//       "
//     >
//       {/* Course Image */}
//       <div className="overflow-hidden">
//         <img
//           src={
//             course.thumbnail ||
//             "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000"
//           }
//           alt={course.title}
//           className="
//             h-36
//             w-full
//             object-cover
//             transition
//             duration-300
//             hover:scale-105
//           "
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-4 flex flex-col flex-1">
//         {/* Category */}
//         <span
//           className="
//             inline-block
//             w-fit
//             bg-[#e5f9f8]
//             text-[#1a504c]
//             px-2
//             py-0.5
//             rounded-full
//             text-[11px]
//             font-medium
//           "
//         >
//           {course.category || "Medical Course"}
//         </span>

//         {/* Title */}
//         <h3
//           className="
//             text-lg
//             font-bold
//             mt-2
//             text-gray-800
//             line-clamp-2
//             min-h-[48px]
//             leading-6
//           "
//         >
//           {course.title}
//         </h3>

//         {/* Description */}
//         <p
//           className="
//             text-sm
//             text-gray-600
//             mt-2
//             line-clamp-2
//             min-h-[40px]
//           "
//         >
//           {course.description}
//         </p>

//         {/* Stats */}
//         <div
//           className="
//             mt-3
//             flex
//             justify-between
//             text-xs
//             text-gray-500
//           "
//         >
//           <span>
//             {course.Chapters?.length || 0} Chapters
//           </span>

//           <span>
//             {course.Chapters?.reduce(
//               (total, chapter) =>
//                 total + (chapter.Lessons?.length || 0),
//               0
//             ) || 0}{" "}
//             Lessons
//           </span>
//         </div>

//         {/* Price */}
//         <div className="flex items-center justify-between mt-4">
//           <span className="text-2xl font-bold text-[#1a504c]">
//             ₹{course.price || 0}
//           </span>

//           <span className="text-xs text-gray-500">
//             Lifetime
//           </span>
//         </div>

//         {/* Button */}
//         <Link
//           to={`/learning/course/${course.id}`}
//           className="
//             block
//             text-center
//             mt-4
//             w-full
//             bg-[#1a504c]
//             text-white
//             py-2
//             rounded-lg
//             text-sm
//             font-semibold
//             hover:bg-black
//             transition
//           "
//         >
//           View Course
//         </Link>
//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function LearningHomeCourseCard({ course }) {
  return (
    <div
      className="
        bg-white
        border border-gray-100
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-md
        transition-all
        duration-300
        flex
        flex-col
        h-full
        font-sans
        p-3
      "
    >
      {/* Course Image & Premium Badge */}
      <div className="h-40 w-full overflow-hidden rounded-xl relative bg-gray-50">
        <img
          src={
            course.thumbnail ||
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000"
          }
          alt={course.title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-300
            hover:scale-105
          "
        />
        {/* Premium Badge Overlay */}
        <div className="absolute top-2.5 left-2.5">
          <span className="bg-purple-600 text-white text-[10px] font-semibold px-2 py-1 rounded-md shadow-xs flex items-center gap-1 w-fit">
            👑 Premium
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-3 pb-1 px-1 flex flex-col flex-1 justify-between">
        <div>
          {/* Title */}
          <h3
            className="
              text-sm
              font-bold
              text-gray-900
              line-clamp-2
              min-h-[40px]
              leading-snug
            "
          >
            {course.title}
          </h3>

          {/* Instructor / Subtitle */}
          <p className="text-[11px] text-gray-500 mt-1 truncate">
            {course.instructor || "Odisha Polyclinic"}
          </p>

          {/* Tags & Rating Row */}
          <div className="flex items-center gap-1.5 mt-2.5 flex-wrap">
            <span className="bg-teal-50 text-teal-800 text-[10px] font-medium px-2 py-0.5 rounded border border-teal-100">
              Bestseller
            </span>
            <span className="bg-gray-50 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded border border-gray-200">
              {course.category || "Course"}
            </span>
            <span className="text-[10px] font-medium text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100 flex items-center gap-0.5">
              ★ 4.8
            </span>
            <span className="text-[10px] text-gray-400">
              ({course.Chapters?.length || 12} chapters)
            </span>
          </div>
        </div>

        {/* Price & Action Footer */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-gray-900">
              ₹{course.price || 0}
            </span>
            {course.originalPrice && (
              <span className="text-[11px] text-gray-400 line-through">
                ₹{course.originalPrice}
              </span>
            )}
          </div>

          <Link
            to={`/learning/course/${course.id}`}
            className="
              bg-teal-700
              text-white
              px-3.5
              py-1.5
              rounded-lg
              text-xs
              font-medium
              hover:bg-teal-800
              transition
            "
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}