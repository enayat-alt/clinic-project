export default function LessonViewer({
  lesson,
}) {
  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-full">
        Select a lesson
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">
          {lesson.title}
        </h2>

        <p className="text-gray-600 mt-2">
          {lesson.description}
        </p>
      </div>

      {lesson.type === "video" &&
        lesson.fileUrl && (
          <video
            controls
            className="w-full rounded-lg border"
          >
            <source
              src={lesson.fileUrl}
            />
          </video>
        )}

      {lesson.type === "pdf" &&
        lesson.fileUrl && (
          <iframe
            src={lesson.fileUrl}
            title={lesson.title}
            className="w-full h-[700px] border rounded-lg"
          />
        )}
    </div>
  );
}