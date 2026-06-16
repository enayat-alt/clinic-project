import { useParams, useNavigate } from "react-router-dom";
import { useEnrollInCourseMutation } from "../../../../services/studentCourseApi";

export default function EnrollPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [enrollInCourse, { isLoading }] = useEnrollInCourseMutation();

  const handleFakePayment = async () => {
    try {
      const response = await enrollInCourse(courseId).unwrap();

      alert(response.message);

      navigate("/learning/dashboard");
    } catch (error) {
      alert(error?.data?.message || "Enrollment failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#e5f9f8] flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate(`/learning/enroll/${courseId}`)}
          className="
      inline-flex
      items-center
      gap-2
      mb-6
      text-sm
      font-medium
      text-[#1a504c]
      hover:text-black
      transition
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
          Back to Enrollment
        </button>

        <h1 className="text-3xl font-bold text-[#1a504c] mb-4">Fake Payment</h1>

        <p className="text-gray-600 mb-6">
          This is a demo payment page. Click the button below to complete
          enrollment.
        </p>

        <button
          onClick={handleFakePayment}
          disabled={isLoading}
          className="w-full bg-[#1a504c] text-white py-3 rounded-xl font-semibold hover:bg-black transition disabled:opacity-50"
        >
          {isLoading ? "Processing..." : "Complete Enrollment"}
        </button>
      </div>
    </div>
  );
}
