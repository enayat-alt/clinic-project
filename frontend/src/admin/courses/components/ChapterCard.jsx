import { Link } from "react-router-dom";
import LessonCard from "./LessonCard";

export default function ChapterCard({
  chapter,
  courseId,
  onDeleteChapter,
  onDeleteLesson,
}) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm">
      {/* Chapter Header */}
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">
            {chapter.title}
          </h3>

          <p className="text-gray-500 mt-1">
            Lessons:{" "}
            {chapter.lessons?.length || 0}
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Link
            to={`/admin/add-lesson/${courseId}/${chapter.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add Lesson
          </Link>

          <button
            onClick={() =>
              onDeleteChapter(chapter.id)
            }
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Delete Chapter
          </button>
        </div>
      </div>

      {/* Lessons */}
      {chapter.lessons?.length > 0 ? (
        <div className="mt-5 border-t pt-5">
          <h4 className="font-semibold mb-4">
            Lessons
          </h4>

          <div className="space-y-3">
            {chapter.lessons.map(
              (lesson) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  chapterId={chapter.id}
                  onDeleteLesson={
                    onDeleteLesson
                  }
                />
              )
            )}
          </div>
        </div>
      ) : (
        <div className="mt-5 border-t pt-5">
          <p className="text-gray-500">
            No lessons available
          </p>
        </div>
      )}
    </div>
  );
}