import { useParams, useNavigate } from "react-router-dom";
import { useGetCourseByIdQuery } from "../../admin/courses/services/courseApi";

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const {
    data: course,
    isLoading,
    error,
  } = useGetCourseByIdQuery(courseId);

  const handleEnroll = () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate(
       // `/learning/login?redirect=/learning/course/${courseId}`
       `/learning/login?redirect=/learning/enroll/${courseId}`
       
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

  const totalChapters =
    course?.Chapters?.length || 0;

  const totalLessons =
    course?.Chapters?.reduce(
      (total, chapter) =>
        total +
        (chapter.Lessons?.length || 0),
      0
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
                <h3 className="text-gray-500 font-medium">
                  Instructor
                </h3>

                <p className="text-lg md:text-xl font-bold mt-2">
                  {course.instructor}
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="text-gray-500 font-medium">
                  Chapters
                </h3>

                <p className="text-lg md:text-xl font-bold mt-2">
                  {totalChapters}
                </p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-5">
                <h3 className="text-gray-500 font-medium">
                  Lessons
                </h3>

                <p className="text-lg md:text-xl font-bold mt-2">
                  {totalLessons}
                </p>
              </div>
            </div>

            {/* Price + Enroll */}
            <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div>
                <p className="text-gray-500">
                  Course Price
                </p>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a504c]">
                  ₹{course.price}
                </h2>
              </div>

              <button
                onClick={handleEnroll}
                className="w-full lg:w-auto bg-[#1a504c] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-black transition"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>

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
                  className="border rounded-2xl p-4 md:p-5"
                >

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

                    <h3 className="font-semibold text-lg md:text-xl">
                      📚 {chapter.title}
                    </h3>

                    <span className="text-sm text-gray-500">
                      {chapter.Lessons?.length || 0} Lessons
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">

                    {chapter.Lessons?.length > 0 ? (
                      chapter.Lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b pb-3"
                        >

                          <div className="flex items-center gap-2">
                            <span>🔒</span>

                            <span className="font-medium text-sm md:text-base">
                              {lesson.title}
                            </span>
                          </div>

                          <span className="text-xs md:text-sm text-gray-500">
                            {lesson.type}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">
                        No lessons available
                      </p>
                    )}

                  </div>
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