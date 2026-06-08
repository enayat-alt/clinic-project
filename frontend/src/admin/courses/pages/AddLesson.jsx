
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateLessonMutation } from "../services/lessonApi";

export default function AddLesson() {
  const { courseId, chapterId } =
    useParams();

  const navigate = useNavigate();

  const [lessonTitle, setLessonTitle] =
    useState("");

  const [lessonType, setLessonType] =
    useState("video");

  const [lessonUrl, setLessonUrl] =
    useState("");

  const [createLesson, { isLoading }] =
    useCreateLessonMutation();

  const handleSubmit = async () => {
    if (!lessonTitle.trim()) {
      alert("Please enter lesson title");
      return;
    }

    try {
      await createLesson({
        title: lessonTitle,
        type: lessonType,
        fileUrl: lessonUrl,
        chapterId: Number(chapterId),
        duration: "",
        order: 1,
      }).unwrap();

      alert("Lesson Created Successfully");

      navigate(
        `/admin/courses/${courseId}/content`
      );
    } catch (error) {
      console.log(error);

      alert(
        error?.data?.message ||
          "Failed to create lesson"
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white border rounded-2xl p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">
          Add Lesson
        </h1>

        <p className="text-gray-500 mb-6">
          Add a new lesson to this chapter.
        </p>

        <div className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Lesson Title
            </label>

            <input
              type="text"
              value={lessonTitle}
              onChange={(e) =>
                setLessonTitle(
                  e.target.value
                )
              }
              placeholder="Enter lesson title"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Lesson Type
            </label>

            <select
              value={lessonType}
              onChange={(e) =>
                setLessonType(
                  e.target.value
                )
              }
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="video">
                Video
              </option>

              <option value="pdf">
                PDF
              </option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Video / PDF URL
            </label>

            <input
              type="text"
              value={lessonUrl}
              onChange={(e) =>
                setLessonUrl(
                  e.target.value
                )
              }
              placeholder="Enter URL"
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-[#1a504c] text-white px-6 py-3 rounded-xl"
            >
              {isLoading
                ? "Saving..."
                : "Save Lesson"}
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