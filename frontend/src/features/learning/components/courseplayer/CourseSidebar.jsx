export default function CourseSidebar({
  chapters = [],
  selectedLesson,
  onLessonSelect,
}) {
  return (
    <div className="w-80 border-r bg-white overflow-y-auto">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">
          Course Content
        </h2>
      </div>

      {chapters.map((chapter) => (
        <div
          key={chapter.id}
          className="border-b"
        >
          <div className="p-3 bg-slate-50 font-medium">
            {chapter.title}
          </div>

          {chapter.Lessons?.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() =>
                onLessonSelect(lesson)
              }
              className={`w-full text-left p-3 hover:bg-slate-100 transition ${
                selectedLesson?.id === lesson.id
                  ? "bg-blue-50 border-l-4 border-blue-500"
                  : ""
              }`}
            >
              <p className="font-medium">
                {lesson.title}
              </p>

              <p className="text-xs text-gray-500">
                {lesson.duration}
              </p>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}