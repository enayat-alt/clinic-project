
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import LessonCard from "./LessonCard";

export default function ChapterCard({
  chapter,
  courseId,
  onDeleteChapter,
  onDeleteLesson,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const lessonCount =
    chapter.Lessons?.length || 0;

  return (
    <div
      className="
        bg-white dark:bg-slate-800
        border border-slate-100 dark:border-slate-700
        rounded-2xl
        shadow-sm
        overflow-hidden
      "
    >
      {/* Chapter Header */}
      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          {/* Left Section */}
          <div
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="
              flex items-start gap-3
              flex-1
              cursor-pointer
            "
          >
            {/* Accordion Icon */}
            <button
              type="button"
              className="
                mt-1
                text-slate-500
                dark:text-slate-400
              "
            >
              {isOpen ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>

            {/* Chapter Details */}
            <div className="min-w-0">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {chapter.title}
              </h3>

              {chapter.description && (
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                  {chapter.description}
                </p>
              )}

              <div className="mt-3">
                <span
                  className="
                    inline-flex items-center
                    px-3 py-1
                    rounded-full
                    text-xs font-medium
                    bg-indigo-100
                    text-indigo-700
                    dark:bg-indigo-900/30
                    dark:text-indigo-300
                  "
                >
                  {lessonCount}{" "}
                  {lessonCount === 1
                    ? "Lesson"
                    : "Lessons"}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/admin/add-lesson/${courseId}/${chapter.id}`}
              className="
                inline-flex items-center justify-center
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                px-4 py-2.5
                rounded-xl
                text-sm
                font-medium
                transition
              "
            >
              Add Lesson
            </Link>

            <button
              type="button"
              onClick={() =>
                onDeleteChapter(
                  chapter.id
                )
              }
              className="
                inline-flex items-center justify-center
                bg-red-500
                hover:bg-red-600
                text-white
                px-4 py-2.5
                rounded-xl
                text-sm
                font-medium
                transition
              "
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div
          className="
            border-t border-slate-100
            dark:border-slate-700
            px-6 pb-6 pt-5
          "
        >
          {lessonCount > 0 ? (
            <>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Lessons
              </h4>

              <div className="space-y-3">
                {chapter.Lessons.map(
                  (lesson) => (
                    <LessonCard
                      key={lesson.id}
                      lesson={lesson}
                      chapterId={
                        chapter.id
                      }
                      onDeleteLesson={
                        onDeleteLesson
                      }
                    />
                  )
                )}
              </div>
            </>
          ) : (
            <div
              className="
                rounded-xl
                bg-slate-50 dark:bg-slate-900
                p-6
                text-center
              "
            >
              <p className="text-slate-500 dark:text-slate-400">
                No lessons available
              </p>

              <Link
                to={`/admin/add-lesson/${courseId}/${chapter.id}`}
                className="
                  inline-flex items-center
                  mt-4
                  bg-indigo-600
                  hover:bg-indigo-700
                  text-white
                  px-4 py-2.5
                  rounded-xl
                  text-sm
                  font-medium
                  transition
                "
              >
                Add First Lesson
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}