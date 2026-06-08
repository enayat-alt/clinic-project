import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EnrollCourse() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [coupon, setCoupon] = useState("");

  useEffect(() => {
    const courses =
      JSON.parse(localStorage.getItem("courses")) || [];

    const selectedCourse = courses.find(
      (course) => course.id === Number(courseId)
    );

    setCourse(selectedCourse);
  }, [courseId]);

  const handleEnroll = () => {
    const enrolledCourses =
      JSON.parse(
        localStorage.getItem("enrolledCourses")
      ) || [];

    const alreadyEnrolled =
      enrolledCourses.find(
        (item) => item.id === course.id
      );

    if (alreadyEnrolled) {
      alert("You are already enrolled");

      navigate("/learning/my-learning");
      return;
    }

    enrolledCourses.push({
      ...course,
      enrolledAt: new Date().toISOString(),
      paymentStatus: "paid",
    });

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolledCourses)
    );

    alert("Enrollment Successful");

    navigate("/learning/my-learning");
  };

  if (!course) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">
          Course Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">
          Enroll Course
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Course Card */}

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <img
              src={
                course.thumbnail ||
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200"
              }
              alt={course.title}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h2 className="text-3xl font-bold">
                {course.title}
              </h2>

              <p className="text-gray-600 mt-4">
                {course.description}
              </p>

              <div className="mt-6">
                <span className="text-3xl font-bold text-[#1a504c]">
                  ₹{course.price || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Section */}

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Course Price</span>

              <span className="font-semibold">
                ₹{course.price || 0}
              </span>
            </div>

            <div className="border-t pt-4">
              <label className="block mb-2 font-medium">
                Coupon Code
              </label>

              <input
                type="text"
                value={coupon}
                onChange={(e) =>
                  setCoupon(e.target.value)
                }
                placeholder="Enter Coupon Code"
                className="w-full border rounded-xl px-4 py-3"
              />
            </div>

            <div className="border-t mt-6 pt-6">
              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span>
                  ₹{course.price || 0}
                </span>
              </div>
            </div>

            <button
              onClick={handleEnroll}
              className="w-full mt-8 bg-[#1a504c] text-white py-4 rounded-xl font-semibold hover:bg-black transition"
            >
              Proceed To Payment
            </button>

            <p className="text-center text-gray-500 mt-4 text-sm">
              Payment gateway will be integrated later
              using Razorpay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}