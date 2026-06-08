// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function CourseDetails() {
//   const { courseId } = useParams();
//   const navigate = useNavigate();

//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     const courses = JSON.parse(localStorage.getItem("courses")) || [];

//     const selectedCourse = courses.find(
//       (course) => course.id === Number(courseId),
//     );

//     setCourse(selectedCourse);
//   }, [courseId]);

//   if (!course) {
//     return (
//       <div className="max-w-6xl mx-auto p-10 text-center">
//         <h2 className="text-3xl font-bold">Course Not Found</h2>
//       </div>
//     );
//   }

//   const totalLessons =
//     course.chapters?.reduce(
//       (total, chapter) => total + (chapter.lessons?.length || 0),
//       0,
//     ) || 0;

//   return (
//     <div className="bg-gray-50 min-h-screen py-10">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Hero Card */}
//         <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
//           <div className="grid lg:grid-cols-2">
//             {/* Thumbnail */}
//             <div>
//               <img
//                 src={
//                   course.thumbnail ||
//                   "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200"
//                 }
//                 alt={course.title}
//                 className="w-full h-full min-h-[350px] object-cover"
//               />
//             </div>

//             {/* Details */}
//             <div className="p-8">
//               <span className="inline-block bg-[#e5f9f8] text-[#1a504c] px-4 py-2 rounded-full text-sm font-medium">
//                 {course.category || "Medical Course"}
//               </span>

//               <h1 className="text-4xl font-bold mt-4 text-gray-800">
//                 {course.title}
//               </h1>

//               <p className="mt-4 text-gray-600 leading-7">
//                 {course.description || "No course description available."}
//               </p>

//               <div className="mt-6">
//                 <span className="text-4xl font-bold text-[#1a504c]">
//                   ₹{course.price || 0}
//                 </span>
//               </div>

//               <div className="grid grid-cols-3 gap-4 mt-8">
//                 <div className="bg-gray-50 p-4 rounded-xl text-center">
//                   <h3 className="text-2xl font-bold text-[#1a504c]">
//                     {course.chapters?.length || 0}
//                   </h3>
//                   <p className="text-sm text-gray-500">Chapters</p>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-xl text-center">
//                   <h3 className="text-2xl font-bold text-[#1a504c]">
//                     {totalLessons}
//                   </h3>
//                   <p className="text-sm text-gray-500">Lessons</p>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-xl text-center">
//                   <h3 className="text-2xl font-bold text-[#1a504c]">
//                     Lifetime
//                   </h3>
//                   <p className="text-sm text-gray-500">Access</p>
//                 </div>
//               </div>

//               {/* <button className="mt-8 w-full bg-[#1a504c] text-white py-4 rounded-xl font-semibold hover:bg-black transition">
//                 Enroll Now
//               </button> */}
//               <button
//                 onClick={() => {
//                   console.log("clicked");
//                   navigate(`/learning/enroll/${course.id}`);
//                 }}
//                 className="mt-8 w-full bg-[#1a504c] text-white py-4 rounded-xl font-semibold"
//               >
//                 Enroll Now
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Course Content */}
//         <div className="mt-10">
//           <h2 className="text-3xl font-bold mb-6">Course Content</h2>

//           {course.chapters?.length > 0 ? (
//             course.chapters.map((chapter, index) => (
//               <details
//                 key={chapter.id}
//                 className="bg-white border rounded-2xl p-5 mb-4 shadow-sm"
//               >
//                 <summary className="cursor-pointer font-semibold text-lg flex justify-between">
//                   <span>
//                     Chapter {index + 1}: {chapter.title}
//                   </span>

//                   <span className="text-sm text-gray-500">
//                     {chapter.lessons?.length || 0} Lessons
//                   </span>
//                 </summary>

//                 <div className="mt-4 space-y-3">
//                   {chapter.lessons?.length > 0 ? (
//                     chapter.lessons.map((lesson) => (
//                       <div
//                         key={lesson.id}
//                         className="flex justify-between items-center border rounded-xl p-4"
//                       >
//                         <div>
//                           <h4 className="font-medium">{lesson.title}</h4>

//                           <p className="text-sm text-gray-500">
//                             {lesson.type?.toUpperCase()}
//                           </p>
//                         </div>

//                         <span className="bg-[#e5f9f8] text-[#1a504c] px-3 py-1 rounded-full text-sm">
//                           {lesson.type}
//                         </span>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-gray-500">No lessons available</p>
//                   )}
//                 </div>
//               </details>
//             ))
//           ) : (
//             <div className="bg-white rounded-2xl p-8 text-center">
//               No chapters available.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
