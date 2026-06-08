
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function CourseContent() {
//   const { courseId } = useParams();

//   const [course, setCourse] = useState(null);

//   // Chapter State
//   const [chapterTitle, setChapterTitle] =
//     useState("");

//   // Lesson State
//   const [activeChapterId, setActiveChapterId] =
//     useState(null);

//   const [lessonTitle, setLessonTitle] =
//     useState("");

//   const [lessonType, setLessonType] =
//     useState("video");

//   const [lessonUrl, setLessonUrl] =
//     useState("");

//   useEffect(() => {
//     loadCourse();
//   }, [courseId]);

//   const loadCourse = () => {
//     const courses =
//       JSON.parse(localStorage.getItem("courses")) ||
//       [];

//     const selectedCourse = courses.find(
//       (course) => course.id === Number(courseId)
//     );

//     setCourse(selectedCourse);
//   };

//   // Add Chapter
//   const handleAddChapter = () => {
//     if (!chapterTitle.trim()) {
//       alert("Please enter chapter title");
//       return;
//     }

//     const courses =
//       JSON.parse(localStorage.getItem("courses")) ||
//       [];

//     const updatedCourses = courses.map((course) => {
//       if (course.id === Number(courseId)) {
//         return {
//           ...course,
//           chapters: [
//             ...(course.chapters || []),
//             {
//               id: Date.now(),
//               title: chapterTitle,
//               lessons: [],
//             },
//           ],
//         };
//       }

//       return course;
//     });

//     localStorage.setItem(
//       "courses",
//       JSON.stringify(updatedCourses)
//     );

//     setChapterTitle("");
//     loadCourse();
//   };

//   // Delete Chapter
//   const handleDeleteChapter = (chapterId) => {
//     const confirmDelete = window.confirm(
//       "Delete this chapter?"
//     );

//     if (!confirmDelete) return;

//     const courses =
//       JSON.parse(localStorage.getItem("courses")) ||
//       [];

//     const updatedCourses = courses.map((course) => {
//       if (course.id === Number(courseId)) {
//         return {
//           ...course,
//           chapters: course.chapters.filter(
//             (chapter) => chapter.id !== chapterId
//           ),
//         };
//       }

//       return course;
//     });

//     localStorage.setItem(
//       "courses",
//       JSON.stringify(updatedCourses)
//     );

//     loadCourse();
//   };

//   // Add Lesson
//   const handleAddLesson = (chapterId) => {
//     if (!lessonTitle.trim()) {
//       alert("Please enter lesson title");
//       return;
//     }

//     const courses =
//       JSON.parse(localStorage.getItem("courses")) ||
//       [];

//     const updatedCourses = courses.map((course) => {
//       if (course.id === Number(courseId)) {
//         return {
//           ...course,
//           chapters: course.chapters.map((chapter) => {
//             if (chapter.id === chapterId) {
//               return {
//                 ...chapter,
//                 lessons: [
//                   ...(chapter.lessons || []),
//                   {
//                     id: Date.now(),
//                     title: lessonTitle,
//                     type: lessonType,
//                     url: lessonUrl,
//                   },
//                 ],
//               };
//             }

//             return chapter;
//           }),
//         };
//       }

//       return course;
//     });

//     localStorage.setItem(
//       "courses",
//       JSON.stringify(updatedCourses)
//     );

//     setLessonTitle("");
//     setLessonType("video");
//     setLessonUrl("");
//     setActiveChapterId(null);

//     loadCourse();
//   };

//   // Delete Lesson
//   const handleDeleteLesson = (
//     chapterId,
//     lessonId
//   ) => {
//     const confirmDelete = window.confirm(
//       "Delete this lesson?"
//     );

//     if (!confirmDelete) return;

//     const courses =
//       JSON.parse(localStorage.getItem("courses")) ||
//       [];

//     const updatedCourses = courses.map((course) => {
//       if (course.id === Number(courseId)) {
//         return {
//           ...course,
//           chapters: course.chapters.map((chapter) => {
//             if (chapter.id === chapterId) {
//               return {
//                 ...chapter,
//                 lessons: chapter.lessons.filter(
//                   (lesson) =>
//                     lesson.id !== lessonId
//                 ),
//               };
//             }

//             return chapter;
//           }),
//         };
//       }

//       return course;
//     });

//     localStorage.setItem(
//       "courses",
//       JSON.stringify(updatedCourses)
//     );

//     loadCourse();
//   };

//   if (!course) {
//     return (
//       <div className="bg-white rounded-2xl border p-10 text-center">
//         <h2 className="text-2xl font-semibold">
//           Course Not Found
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">
//           {course.title}
//         </h1>

//         <p className="text-gray-500 mt-2">
//           Manage Chapters & Lessons
//         </p>
//       </div>

//       {/* Add Chapter */}
//       <div className="bg-white border rounded-2xl p-6 shadow-sm mb-8">
//         <h2 className="text-xl font-semibold mb-4">
//           Add Chapter
//         </h2>

//         <div className="flex flex-col md:flex-row gap-3">
//           <input
//             type="text"
//             value={chapterTitle}
//             onChange={(e) =>
//               setChapterTitle(e.target.value)
//             }
//             placeholder="Chapter Title"
//             className="flex-1 border rounded-xl px-4 py-3"
//           />

//           <button
//             onClick={handleAddChapter}
//             className="bg-[#1a504c] text-white px-6 py-3 rounded-xl"
//           >
//             Add Chapter
//           </button>
//         </div>
//       </div>

//       {/* Chapters */}
//       <div className="space-y-5">
//         {course.chapters?.length > 0 ? (
//           course.chapters.map((chapter) => (
//             <div
//               key={chapter.id}
//               className="bg-white border rounded-2xl p-6 shadow-sm"
//             >
//               <div className="flex flex-col md:flex-row md:justify-between gap-4">
//                 <div>
//                   <h3 className="text-xl font-semibold">
//                     {chapter.title}
//                   </h3>

//                   <p className="text-gray-500 mt-1">
//                     Lessons:{" "}
//                     {chapter.lessons?.length || 0}
//                   </p>
//                 </div>

//                 <div className="flex gap-2 flex-wrap">
//                   <button
//                     onClick={() =>
//                       setActiveChapterId(chapter.id)
//                     }
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg"
//                   >
//                     Add Lesson
//                   </button>

//                   <button
//                     onClick={() =>
//                       handleDeleteChapter(
//                         chapter.id
//                       )
//                     }
//                     className="bg-red-500 text-white px-4 py-2 rounded-lg"
//                   >
//                     Delete Chapter
//                   </button>
//                 </div>
//               </div>

//               {/* Lesson Form */}
//               {activeChapterId === chapter.id && (
//                 <div className="mt-5 border-t pt-5 space-y-3">
//                   <input
//                     type="text"
//                     placeholder="Lesson Title"
//                     value={lessonTitle}
//                     onChange={(e) =>
//                       setLessonTitle(
//                         e.target.value
//                       )
//                     }
//                     className="w-full border rounded-lg px-4 py-3"
//                   />

//                   <select
//                     value={lessonType}
//                     onChange={(e) =>
//                       setLessonType(
//                         e.target.value
//                       )
//                     }
//                     className="w-full border rounded-lg px-4 py-3"
//                   >
//                     <option value="video">
//                       Video
//                     </option>

//                     <option value="pdf">
//                       PDF
//                     </option>
//                   </select>

//                   <input
//                     type="text"
//                     placeholder="Video / PDF URL"
//                     value={lessonUrl}
//                     onChange={(e) =>
//                       setLessonUrl(
//                         e.target.value
//                       )
//                     }
//                     className="w-full border rounded-lg px-4 py-3"
//                   />

//                   <div className="flex gap-2">
//                     <button
//                       onClick={() =>
//                         handleAddLesson(
//                           chapter.id
//                         )
//                       }
//                       className="bg-green-600 text-white px-5 py-2 rounded-lg"
//                     >
//                       Save Lesson
//                     </button>

//                     <button
//                       onClick={() =>
//                         setActiveChapterId(
//                           null
//                         )
//                       }
//                       className="bg-gray-500 text-white px-5 py-2 rounded-lg"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {/* Lessons */}
//               {chapter.lessons?.length > 0 && (
//                 <div className="mt-5 border-t pt-5">
//                   <h4 className="font-semibold mb-4">
//                     Lessons
//                   </h4>

//                   <div className="space-y-3">
//                     {chapter.lessons.map(
//                       (lesson) => (
//                         <div
//                           key={lesson.id}
//                           className="border rounded-xl p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3"
//                         >
//                           <div>
//                             <h5 className="font-medium">
//                               {lesson.title}
//                             </h5>

//                             <p className="text-sm text-gray-500">
//                               {lesson.type.toUpperCase()}
//                             </p>
//                           </div>

//                           <div className="flex gap-2 flex-wrap">
//                             {lesson.url && (
//                               <a
//                                 href={
//                                   lesson.url
//                                 }
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm"
//                               >
//                                 Open
//                               </a>
//                             )}

//                             <button
//                               onClick={() =>
//                                 handleDeleteLesson(
//                                   chapter.id,
//                                   lesson.id
//                                 )
//                               }
//                               className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm"
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </div>
//                       )
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))
//         ) : (
//           <div className="bg-white border rounded-2xl p-10 text-center">
//             <h3 className="text-xl font-semibold">
//               No Chapters Yet
//             </h3>

//             <p className="text-gray-500 mt-2">
//               Create your first chapter above.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ChapterCard from "../components/ChapterCard";

export default function CourseContent() {
  const { courseId } = useParams();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    loadCourse();
  }, [courseId]);

  const loadCourse = () => {
    const courses =
      JSON.parse(localStorage.getItem("courses")) ||
      [];

    const selectedCourse = courses.find(
      (course) => course.id === Number(courseId)
    );

    setCourse(selectedCourse);
  };

  const handleDeleteChapter = (chapterId) => {
    const confirmDelete = window.confirm(
      "Delete this chapter?"
    );

    if (!confirmDelete) return;

    const courses =
      JSON.parse(localStorage.getItem("courses")) ||
      [];

    const updatedCourses = courses.map((course) => {
      if (course.id === Number(courseId)) {
        return {
          ...course,
          chapters: course.chapters.filter(
            (chapter) => chapter.id !== chapterId
          ),
        };
      }

      return course;
    });

    localStorage.setItem(
      "courses",
      JSON.stringify(updatedCourses)
    );

    loadCourse();
  };

  const handleDeleteLesson = (
    chapterId,
    lessonId
  ) => {
    const confirmDelete = window.confirm(
      "Delete this lesson?"
    );

    if (!confirmDelete) return;

    const courses =
      JSON.parse(localStorage.getItem("courses")) ||
      [];

    const updatedCourses = courses.map((course) => {
      if (course.id === Number(courseId)) {
        return {
          ...course,
          chapters: course.chapters.map(
            (chapter) => {
              if (chapter.id === chapterId) {
                return {
                  ...chapter,
                  lessons: chapter.lessons.filter(
                    (lesson) =>
                      lesson.id !== lessonId
                  ),
                };
              }

              return chapter;
            }
          ),
        };
      }

      return course;
    });

    localStorage.setItem(
      "courses",
      JSON.stringify(updatedCourses)
    );

    loadCourse();
  };

  if (!course) {
    return (
      <div className="bg-white rounded-2xl border p-10 text-center">
        <h2 className="text-2xl font-semibold">
          Course Not Found
        </h2>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            {course.title}
          </h1>

          <p className="text-gray-500">
            Manage Chapters & Lessons
          </p>
        </div>

        <Link
          to={`/admin/add-chapter/${course.id}`}
          className="bg-[#1a504c] text-white px-5 py-3 rounded-xl"
        >
          Add Chapter
        </Link>
      </div>

      {course.chapters?.length > 0 ? (
        <div className="space-y-5">
          {course.chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              courseId={course.id}
              onDeleteChapter={
                handleDeleteChapter
              }
              onDeleteLesson={
                handleDeleteLesson
              }
            />
          ))}
        </div>
      ) : (
        <div className="bg-white border rounded-2xl p-10 text-center">
          <h3 className="text-xl font-semibold">
            No Chapters Yet
          </h3>

          <p className="text-gray-500 mt-2">
            Create your first chapter.
          </p>
        </div>
      )}
    </div>
  );
}