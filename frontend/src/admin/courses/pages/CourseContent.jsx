
import { Link, useParams } from "react-router-dom";
import ChapterCard from "../components/ChapterCard";

import { useGetCourseByIdQuery } from "../services/courseApi";
import {
  useGetChaptersByCourseQuery,
  useDeleteChapterMutation,
} from "../services/chapterApi";

import { useDeleteLessonMutation } from "../services/lessonApi";

export default function CourseContent() {
  const { courseId } = useParams();

  const {
    data: course,
    isLoading: courseLoading,
  } = useGetCourseByIdQuery(courseId);

  const {
    data: chapters = [],
    isLoading: chaptersLoading,
    refetch,
  } = useGetChaptersByCourseQuery(courseId);

  const [deleteChapter] =
    useDeleteChapterMutation();

  const [deleteLesson] =
    useDeleteLessonMutation();

  console.log("Course:", course);
  console.log("Chapters:", chapters);

  const handleDeleteChapter = async (
    chapterId
  ) => {
    const confirmDelete = window.confirm(
      "Delete this chapter?"
    );

    if (!confirmDelete) return;

    try {
      await deleteChapter(
        chapterId
      ).unwrap();

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteLesson = async (
    chapterId,
    lessonId
  ) => {
    const confirmDelete = window.confirm(
      "Delete this lesson?"
    );

    if (!confirmDelete) return;

    try {
      await deleteLesson(
        lessonId
      ).unwrap();

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  if (courseLoading || chaptersLoading) {
    return (
      <div className="bg-white rounded-2xl border p-10 text-center">
        Loading...
      </div>
    );
  }

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

      {chapters.length > 0 ? (
        <div className="space-y-5">
          {chapters.map((chapter) => (
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