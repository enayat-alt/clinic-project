

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

      alert("Chapter deleted successfully");
    } catch (error) {
      console.log(error);

      alert(
        error?.data?.message ||
          "Failed to delete chapter"
      );
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

      alert("Lesson deleted successfully");
    } catch (error) {
      console.log(error);

      alert(
        error?.data?.message ||
          "Failed to delete lesson"
      );
    }
  };

  if (courseLoading || chaptersLoading) {
    return (
      <div
        className="
          bg-white dark:bg-slate-800
          rounded-2xl
          border border-slate-100 dark:border-slate-700
          p-10
          text-center
          shadow-sm
        "
      >
        <p className="text-slate-600 dark:text-slate-300">
          Loading...
        </p>
      </div>
    );
  }

  if (!course) {
    return (
      <div
        className="
          bg-white dark:bg-slate-800
          rounded-2xl
          border border-slate-100 dark:border-slate-700
          p-10
          text-center
          shadow-sm
        "
      >
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Course Not Found
        </h2>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {course.title}
          </h1>

          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage chapters and lessons
          </p>
        </div>

        <Link
          to={`/admin/add-chapter/${course.id}`}
          className="
            inline-flex items-center justify-center
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            px-5 py-2.5
            rounded-xl
            text-sm
            font-medium
            transition
          "
        >
          Add Chapter
        </Link>
      </div>

      {/* Chapters */}
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
        <div
          className="
            bg-white dark:bg-slate-800
            border border-slate-100 dark:border-slate-700
            rounded-2xl
            p-10
            text-center
            shadow-sm
          "
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            No Chapters Yet
          </h3>

          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Create your first chapter to start building this course.
          </p>

          <Link
            to={`/admin/add-chapter/${course.id}`}
            className="
              inline-flex items-center
              mt-6
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              px-5 py-2.5
              rounded-xl
              text-sm
              font-medium
              transition
            "
          >
            Add Chapter
          </Link>
        </div>
      )}
    </div>
  );
}