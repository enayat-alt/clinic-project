import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetCourseByIdQuery } from "../../../admin/courses/services/courseApi";

export default function EnrollCourse() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");

  const { data: course, isLoading, error } = useGetCourseByIdQuery(courseId);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      navigate(`/login?redirect=/learning/enroll/${courseId}`);
    }
  }, [courseId, navigate]);

  const handleEnroll = () => {
    alert("Razorpay payment integration will be added next.");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading Course...
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">Course Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(`/learning/course/${courseId}`)}
          className="
    inline-flex
    items-center
    gap-2
    mb-6
    px-4
    py-2
    rounded-xl
    bg-white
    border border-gray-200
    shadow-sm
    text-sm
    font-medium
    text-[#1a504c]
    hover:bg-[#1a504c]
    hover:text-white
    hover:border-[#1a504c]
    hover:shadow-md
    transition-all
    duration-200
  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Course
        </button>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Enroll Course</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Course Card */}

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <img
              src={
                course.thumbnail ||
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200"
              }
              alt={course.title}
              className="w-full h-56 md:h-72 object-cover"
            />

            <div className="p-5 md:p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-[#e5f9f8] text-[#1a504c] px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                  {course.category}
                </span>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs md:text-sm">
                  {course.status}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold">{course.title}</h2>

              <p className="text-gray-600 mt-4 leading-7">
                {course.description}
              </p>

              <div className="mt-6 space-y-2">
                <p>
                  <strong>Instructor:</strong> {course.instructor}
                </p>

                <p>
                  <strong>Category:</strong> {course.category}
                </p>
              </div>

              <div className="mt-6">
                <span className="text-3xl md:text-4xl font-bold text-[#1a504c]">
                  ₹{course.price || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Section */}

          <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="flex justify-between mb-4">
              <span>Course Price</span>

              <span className="font-semibold">₹{course.price || 0}</span>
            </div>

            <div className="border-t pt-5">
              <label className="block mb-2 font-medium">Coupon Code</label>

              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter Coupon Code"
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
              />
            </div>

            <div className="border-t mt-6 pt-6">
              <div className="flex justify-between text-xl md:text-2xl font-bold">
                <span>Total</span>

                <span>₹{course.price || 0}</span>
              </div>
            </div>

            {/* <button
              onClick={handleEnroll}
              className="w-full mt-8 bg-[#1a504c] text-white py-4 rounded-xl font-semibold text-lg hover:bg-black transition"
            >
              Proceed To Payment
            </button> */}
            <button
              onClick={() => navigate(`/learning/payment/${courseId}`)}
              className="w-full mt-8 bg-[#1a504c] text-white py-4 rounded-xl font-semibold text-lg hover:bg-black transition"
            >
              Proceed To Payment
            </button>
            <p className="text-center text-gray-500 mt-4 text-sm">
              Secure payment will be processed using Razorpay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
