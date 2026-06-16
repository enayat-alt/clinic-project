import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetCourseByIdQuery } from "../../admin/courses/services/courseApi";

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [openChapter, setOpenChapter] = useState(null);
  const [openLessons, setOpenLessons] = useState({});

  const toggleLesson = (chapterId, lessonId) => {
    setOpenLessons((prev) => ({
      ...prev,
      [chapterId]: prev[chapterId] === lessonId ? null : lessonId,
    }));
  };

  const { data: course, isLoading, error } = useGetCourseByIdQuery(courseId);

  const handleEnroll = () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate(
        // `/learning/login?redirect=/learning/course/${courseId}`
        `/learning/login?redirect=/learning/enroll/${courseId}`,
      );
      return;
    }

    navigate(`/learning/enroll/${courseId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg font-semibold">
        Loading...
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        Course not found
      </div>
    );
  }

  const totalChapters = course?.Chapters?.length || 0;

  const totalLessons =
    course?.Chapters?.reduce(
      (total, chapter) => total + (chapter.Lessons?.length || 0),
      0,
    ) || 0;

  return (
    <div className="bg-gray-50 min-h-screen py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Course Header */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          <img
            src={
              course.thumbnail ||
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000"
            }
            alt={course.title}
            className="w-full h-56 md:h-80 lg:h-[420px] object-cover"
          />

          <div className="p-5 md:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#e5f9f8] text-[#1a504c] px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                {course.category}
              </span>

              <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-xs md:text-sm">
                {course.status}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a504c] leading-tight">
              {course.title}
            </h1>

            <p className="text-gray-600 mt-5 text-base md:text-lg leading-7 md:leading-8">
              {course.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="text-gray-500 font-medium">Instructor</h3>

                <p className="text-lg md:text-xl font-bold mt-2">
                  {course.instructor}
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="text-gray-500 font-medium">Chapters</h3>

                <p className="text-lg md:text-xl font-bold mt-2">
                  {totalChapters}
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="text-gray-500 font-medium">Lessons</h3>

                <p className="text-lg md:text-xl font-bold mt-2">
                  {totalLessons}
                </p>
              </div>
            </div>

            {/* Price + Enroll */}
            <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-gray-500">Course Price</p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a504c]">
                  ₹{course.price}
                </h2>
              </div>

              {/* <button
                onClick={handleEnroll}
                className="w-full lg:w-auto bg-[#1a504c] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black transition"
              >
                Enroll Now
              </button> */}
              <button
                onClick={handleEnroll}
                className="
    w-full lg:w-auto
    px-6 py-3
    rounded-lg
    bg-[#1a504c]
    text-white
    text-sm font-medium
    shadow-sm
    hover:bg-[#143d3a]
    hover:shadow-md
    transition-all duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-[#1a504c]/30
  "
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        {/* Curriculum */}
        <div className="bg-white rounded-3xl shadow-lg mt-8 md:mt-10 p-5 md:p-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Course Curriculum
            </h2>

            <span className="text-gray-500">
              {totalChapters} Chapters • {totalLessons} Lessons
            </span>
          </div>

          {course?.Chapters?.length > 0 ? (
            <div className="space-y-5">
              {course.Chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="border rounded-2xl overflow-hidden"
                >
                  {/* Chapter Header */}
                  <button
                    onClick={() =>
                      setOpenChapter(
                        openChapter === chapter.id ? null : chapter.id,
                      )
                    }
                    className="w-full p-5 flex justify-between items-center text-left hover:bg-gray-50 transition"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg md:text-xl">
                        📚 {chapter.title}
                      </h3>

                      <p className="text-sm text-gray-400 mt-2">
                        {chapter.Lessons?.length || 0} Lessons
                      </p>
                    </div>

                    <span className="text-2xl text-[#1a504c]">
                      {openChapter === chapter.id ? "−" : "+"}
                    </span>
                  </button>

                  {/* Chapter Content */}
                  {openChapter === chapter.id && (
                    <div className="px-5 pb-5 border-t">
                      <p className="text-gray-600 mt-4 mb-5 text-sm md:text-base leading-6">
                        {chapter.description ||
                          "No chapter description available."}
                      </p>

                      {chapter.Lessons?.length > 0 ? (
                        <div className="space-y-3">
                          {chapter.Lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="border rounded-xl overflow-hidden"
                            >
                              {/* Lesson Header */}
                              <button
                                onClick={() =>
                                  toggleLesson(chapter.id, lesson.id)
                                }
                                className="w-full px-4 py-4 flex justify-between items-center text-left hover:bg-gray-50"
                              >
                                <div className="flex items-center gap-2">
                                  <span>🔒</span>

                                  <span className="font-medium text-sm md:text-base">
                                    {lesson.title}
                                  </span>
                                </div>

                                <span className="text-xl text-[#1a504c]">
                                  {openLessons[chapter.id] === lesson.id
                                    ? "−"
                                    : "+"}
                                </span>
                              </button>

                              {/* Lesson Content */}
                              {openLessons[chapter.id] === lesson.id && (
                                <div className="px-4 pb-4 border-t">
                                  <p className="text-sm text-gray-600 mt-3 leading-6">
                                    {lesson.description ||
                                      "No lesson description available."}
                                  </p>

                                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-500">
                                    <span>Type: {lesson.type}</span>

                                    {lesson.duration && (
                                      <span>Duration: {lesson.duration}</span>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm mt-3">
                          No lessons available
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-500">
              No chapters available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
