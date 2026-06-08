import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddChapter() {
  const { courseId } = useParams();

  const navigate = useNavigate();

  const [chapterTitle, setChapterTitle] =
    useState("");

  const handleSubmit = () => {
    if (!chapterTitle.trim()) {
      alert("Please enter chapter title");
      return;
    }

    const courses =
      JSON.parse(localStorage.getItem("courses")) ||
      [];

    const updatedCourses = courses.map(
      (course) => {
        if (
          course.id === Number(courseId)
        ) {
          return {
            ...course,
            chapters: [
              ...(course.chapters || []),
              {
                id: Date.now(),
                title: chapterTitle,
                lessons: [],
              },
            ],
          };
        }

        return course;
      }
    );

    localStorage.setItem(
      "courses",
      JSON.stringify(updatedCourses)
    );

    navigate(`/admin/courses/${courseId}/content`);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl border p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">
          Add Chapter
        </h1>

        <p className="text-gray-500 mb-6">
          Create a new chapter for this
          course.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">
              Chapter Title
            </label>

            <input
              type="text"
              value={chapterTitle}
              onChange={(e) =>
                setChapterTitle(
                  e.target.value
                )
              }
              placeholder="Enter chapter title"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              className="bg-[#1a504c] text-white px-6 py-3 rounded-xl"
            >
              Save Chapter
            </button>

            <button
              onClick={() =>
                navigate(
                  `/admin/courses/${courseId}/content`
                )
              }
              className="bg-gray-300 px-6 py-3 rounded-xl"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}