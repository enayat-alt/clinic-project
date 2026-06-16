// import { Link } from "react-router-dom";

// export default function LearningHomeCourseCard({ course }) {
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
//       {/* Course Image */}
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
//             transition
//             duration-500
//             hover:scale-110
//           "
//         />
//       </div>

//       {/* Card Content */}
//       <div className="p-6 flex flex-col flex-1">
//         {/* Category */}
//         <span
//           className="
//             inline-block
//             w-fit
//             bg-[#e5f9f8]
//             text-[#1a504c]
//             px-3
//             py-1
//             rounded-full
//             text-sm
//             font-medium
//           "
//         >
//           {course.category || "Medical Course"}
//         </span>

//         {/* Title */}
//         <h3
//           className="
//             text-2xl
//             font-bold
//             mt-4
//             text-gray-800
//             line-clamp-2
//             min-h-[64px]
//           "
//         >
//           {course.title}
//         </h3>

//         {/* Description */}
//         <p
//           className="
//             text-gray-600
//             mt-3
//             line-clamp-3
//             min-h-[72px]
//           "
//         >
//           {course.description}
//         </p>

//         {/* Bottom */}
//         <div className="mt-auto">
//           {/* Stats */}
//           <div
//             className="
//               mt-4
//               flex
//               justify-between
//               text-sm
//               text-gray-500
//             "
//           >
//             <span>
//               Chapters: {course.Chapters?.length || 0}
//             </span>

//             <span>
//               Lessons:{" "}
//               {course.Chapters?.reduce(
//                 (total, chapter) =>
//                   total +
//                   (chapter.Lessons?.length || 0),
//                 0
//               ) || 0}
//             </span>
//           </div>

//           {/* Price */}
//           <div className="flex items-center justify-between mt-6">
//             <span className="text-3xl font-bold text-[#1a504c]">
//               ₹{course.price || 0}
//             </span>

//             <span className="text-sm text-gray-500">
//               Lifetime Access
//             </span>
//           </div>

//           {/* Button */}
//           <Link
//             to={`/learning/course/${course.id}`}
//             className="
//               block
//               text-center
//               mt-6
//               w-full
//               bg-[#1a504c]
//               text-white
//               py-3
//               rounded-xl
//               font-semibold
//               hover:bg-black
//               transition
//             "
//           >
//             View Course
//           </Link>
//         </div>
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
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        flex
        flex-col
        h-full
      "
    >
      {/* Course Image */}
      <div className="overflow-hidden">
        <img
          src={
            course.thumbnail ||
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000"
          }
          alt={course.title}
          className="
            h-36
            w-full
            object-cover
            transition
            duration-300
            hover:scale-105
          "
        />
      </div>

      {/* Card Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category */}
        <span
          className="
            inline-block
            w-fit
            bg-[#e5f9f8]
            text-[#1a504c]
            px-2
            py-0.5
            rounded-full
            text-[11px]
            font-medium
          "
        >
          {course.category || "Medical Course"}
        </span>

        {/* Title */}
        <h3
          className="
            text-lg
            font-bold
            mt-2
            text-gray-800
            line-clamp-2
            min-h-[48px]
            leading-6
          "
        >
          {course.title}
        </h3>

        {/* Description */}
        <p
          className="
            text-sm
            text-gray-600
            mt-2
            line-clamp-2
            min-h-[40px]
          "
        >
          {course.description}
        </p>

        {/* Stats */}
        <div
          className="
            mt-3
            flex
            justify-between
            text-xs
            text-gray-500
          "
        >
          <span>
            {course.Chapters?.length || 0} Chapters
          </span>

          <span>
            {course.Chapters?.reduce(
              (total, chapter) =>
                total + (chapter.Lessons?.length || 0),
              0
            ) || 0}{" "}
            Lessons
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-[#1a504c]">
            ₹{course.price || 0}
          </span>

          <span className="text-xs text-gray-500">
            Lifetime
          </span>
        </div>

        {/* Button */}
        <Link
          to={`/learning/course/${course.id}`}
          className="
            block
            text-center
            mt-4
            w-full
            bg-[#1a504c]
            text-white
            py-2
            rounded-lg
            text-sm
            font-semibold
            hover:bg-black
            transition
          "
        >
          View Course
        </Link>
      </div>
    </div>
  );
}