import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import { useGetCourseByIdQuery } from "../../../admin/courses/services/courseApi";

import CourseSidebar from "../../components/courseplayer/CourseSidebar";
import LessonViewer from "../../components/courseplayer/LessonViewer";
import ProgressBar from "../../components/courseplayer/ProgressBar";
import LessonNavigation from "../../components/courseplayer/LessonNavigation";

export default function CoursePlayer() {
  const { courseId } = useParams();

  const {
    data: course,
    isLoading,
    error,
  } = useGetCourseByIdQuery(
    courseId
  );

  

  const [selectedLesson, setSelectedLesson] =
    useState(null);

    console.log(selectedLesson);

  const allLessons = useMemo(() => {
    if (!course?.Chapters)
      return [];

    return course.Chapters.flatMap(
      (chapter) =>
        chapter.Lessons || []
    );
  }, [course]);

  useEffect(() => {
    if (
      allLessons.length > 0 &&
      !selectedLesson
    ) {
      setSelectedLesson(
        allLessons[0]
      );
    }
  }, [
    allLessons,
    selectedLesson,
  ]);

  const currentIndex =
    allLessons.findIndex(
      (lesson) =>
        lesson.id ===
        selectedLesson?.id
    );

  const handleNext = () => {
    if (
      currentIndex <
      allLessons.length - 1
    ) {
      setSelectedLesson(
        allLessons[
          currentIndex + 1
        ]
      );
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedLesson(
        allLessons[
          currentIndex - 1
        ]
      );
    }
  };

  if (isLoading)
    return (
      <div className="p-6">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="p-6 text-red-500">
        Failed to load course
      </div>
    );

  return (
    <div className="h-screen flex flex-col">
      <div className="p-4 border-b bg-white">
        <h1 className="text-2xl font-bold">
          {course.title}
        </h1>

        <p className="text-gray-600">
          {course.instructor}
        </p>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <CourseSidebar
          chapters={
            course.Chapters || []
          }
          selectedLesson={
            selectedLesson
          }
          onLessonSelect={
            setSelectedLesson
          }
        />

        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <ProgressBar
            current={
              currentIndex + 1
            }
            total={
              allLessons.length
            }
          />

          <LessonViewer
            lesson={
              selectedLesson
            }
          />

          <LessonNavigation
            onPrevious={
              handlePrevious
            }
            onNext={handleNext}
            hasPrevious={
              currentIndex > 0
            }
            hasNext={
              currentIndex <
              allLessons.length - 1
            }
          />
        </div>
      </div>
    </div>
  );
}