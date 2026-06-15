
// import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { useCreateChapterMutation } from "../services/chapterApi";

// export default function AddChapter() {
//   const { courseId } = useParams();
//   const navigate = useNavigate();

//   const [chapterTitle, setChapterTitle] = useState("");
//   const [description, setDescription] = useState("");

//   const [createChapter, { isLoading }] =
//     useCreateChapterMutation();

//   const handleSubmit = async () => {
//     if (!chapterTitle.trim()) {
//       alert("Please enter chapter title");
//       return;
//     }

//     try {
//       await createChapter({
//         title: chapterTitle,
//         description,
//         courseId: Number(courseId),
//         order: 1,
//       }).unwrap();

//       alert("Chapter Created Successfully");

//       navigate(
//         `/admin/courses/${courseId}/content`
//       );
//     } catch (error) {
//       console.log(error);

//       alert(
//         error?.data?.message ||
//           "Failed to create chapter"
//       );
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto">
//       <div className="bg-white rounded-2xl border p-8 shadow-sm">
//         <h1 className="text-3xl font-bold mb-2">
//           Add Chapter
//         </h1>

//         <p className="text-gray-500 mb-6">
//           Create a new chapter for this course.
//         </p>

//         <div className="space-y-4">
//           {/* Chapter Title */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Chapter Title
//             </label>

//             <input
//               type="text"
//               value={chapterTitle}
//               onChange={(e) =>
//                 setChapterTitle(e.target.value)
//               }
//               placeholder="Enter chapter title"
//               className="w-full border rounded-xl px-4 py-3 focus:outline-none"
//             />
//           </div>

//           {/* Chapter Description */}
//           <div>
//             <label className="block mb-2 font-medium">
//               Chapter Description
//             </label>

//             <textarea
//               value={description}
//               onChange={(e) =>
//                 setDescription(e.target.value)
//               }
//               placeholder="Enter chapter description"
//               rows={4}
//               className="w-full border rounded-xl px-4 py-3 focus:outline-none resize-none"
//             />
//           </div>

//           <div className="flex gap-3">
//             <button
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className="bg-[#1a504c] text-white px-6 py-3 rounded-xl"
//             >
//               {isLoading
//                 ? "Saving..."
//                 : "Save Chapter"}
//             </button>

//             <button
//               onClick={() =>
//                 navigate(
//                   `/admin/courses/${courseId}/content`
//                 )
//               }
//               className="bg-gray-300 px-6 py-3 rounded-xl"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateChapterMutation } from "../services/chapterApi";

export default function AddChapter() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [chapterTitle, setChapterTitle] = useState("");
  const [description, setDescription] = useState("");

  const [createChapter, { isLoading }] =
    useCreateChapterMutation();

  const handleSubmit = async () => {
    if (!chapterTitle.trim()) {
      alert("Please enter chapter title");
      return;
    }

    try {
      await createChapter({
        title: chapterTitle,
        description,
        courseId: Number(courseId),
        order: 1,
      }).unwrap();

      alert("Chapter created successfully");

      navigate(
        `/admin/courses/${courseId}/content`
      );
    } catch (error) {
      console.log(error);

      alert(
        error?.data?.message ||
          "Failed to create chapter"
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Add Chapter
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Create a new chapter for this course
        </p>
      </div>

      {/* Card */}
      <div
        className="
          bg-white dark:bg-slate-800
          rounded-2xl
          border border-slate-100 dark:border-slate-700
          shadow-sm
          p-6
        "
      >
        <div className="space-y-6">
          {/* Chapter Title */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Chapter Title
            </label>

            <input
              type="text"
              value={chapterTitle}
              onChange={(e) =>
                setChapterTitle(e.target.value)
              }
              placeholder="Enter chapter title"
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Description */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Chapter Description
            </label>

            <textarea
              rows={5}
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              placeholder="Enter chapter description"
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
                resize-none
              "
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="
                inline-flex items-center
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                px-5 py-2.5
                rounded-xl
                text-sm
                font-medium
                transition
                disabled:opacity-50
              "
            >
              {isLoading
                ? "Saving..."
                : "Save Chapter"}
            </button>

            <button
              type="button"
              onClick={() =>
                navigate(
                  `/admin/courses/${courseId}/content`
                )
              }
              className="
                inline-flex items-center
                bg-slate-200
                hover:bg-slate-300
                dark:bg-slate-700
                dark:hover:bg-slate-600
                text-slate-700
                dark:text-slate-200
                px-5 py-2.5
                rounded-xl
                text-sm
                font-medium
                transition
              "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}