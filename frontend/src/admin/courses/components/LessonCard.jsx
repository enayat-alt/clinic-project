export default function LessonCard({
  lesson,
  chapterId,
  onDeleteLesson,
}) {
  return (
    <div className="border rounded-xl p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
      <div>
        <h5 className="font-medium text-lg">
          {lesson.title}
        </h5>

        <p className="text-sm text-gray-500">
          {lesson.type.toUpperCase()}
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {lesson.url && (
          <a
            href={lesson.url}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm"
          >
            Open
          </a>
        )}

        <button
          onClick={() =>
            onDeleteLesson(
              chapterId,
              lesson.id
            )
          }
          className="bg-red-500 text-white px-3 py-2 rounded-lg text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}