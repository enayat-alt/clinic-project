import { useParams, useNavigate } from "react-router-dom";
import { useEnrollInCourseMutation } from "../../../services/studentCourseApi";

export default function EnrollPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [
    enrollInCourse,
    { isLoading },
  ] = useEnrollInCourseMutation();

  const handleFakePayment = async () => {
    try {
      const response = await enrollInCourse(
        courseId
      ).unwrap();

      alert(response.message);

      navigate("/learning/dashboard");
    } catch (error) {
      alert(
        error?.data?.message ||
          "Enrollment failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#e5f9f8] flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-[#1a504c] mb-4">
          Fake Payment
        </h1>

        <p className="text-gray-600 mb-6">
          This is a demo payment page.
          Click the button below to complete enrollment.
        </p>

        <button
          onClick={handleFakePayment}
          disabled={isLoading}
          className="w-full bg-[#1a504c] text-white py-3 rounded-xl font-semibold hover:bg-black transition disabled:opacity-50"
        >
          {isLoading
            ? "Processing..."
            : "Complete Enrollment"}
        </button>
      </div>
    </div>
  );
}