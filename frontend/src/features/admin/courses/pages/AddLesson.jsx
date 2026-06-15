
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateLessonMutation } from "../services/lessonApi";

export default function AddLesson() {
  const { courseId, chapterId } = useParams();

  const navigate = useNavigate();

  const [lessonTitle, setLessonTitle] =
    useState("");

  const [
    lessonDescription,
    setLessonDescription,
  ] = useState("");

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
        description: lessonDescription,
        type: lessonType,
        fileUrl: lessonUrl,
        chapterId: Number(chapterId),
        duration: "",
        order: 1,
      }).unwrap();

      alert("Lesson created successfully");

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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Add Lesson
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Add a new lesson to this chapter
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
          {/* Lesson Title */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
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

          {/* Lesson Description */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Lesson Description
            </label>

            <textarea
              rows={5}
              value={lessonDescription}
              onChange={(e) =>
                setLessonDescription(
                  e.target.value
                )
              }
              placeholder="Enter lesson description"
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

          {/* Lesson Type */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Lesson Type
            </label>

            <select
              value={lessonType}
              onChange={(e) =>
                setLessonType(
                  e.target.value
                )
              }
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            >
              <option value="video">
                Video
              </option>

              <option value="pdf">
                PDF
              </option>
            </select>
          </div>

          {/* URL */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              {lessonType === "video"
                ? "Video URL"
                : "PDF URL"}
            </label>

            <input
              type="text"
              value={lessonUrl}
              onChange={(e) =>
                setLessonUrl(
                  e.target.value
                )
              }
              placeholder={
                lessonType === "video"
                  ? "https://youtube.com/..."
                  : "https://example.com/file.pdf"
              }
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
                : "Save Lesson"}
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