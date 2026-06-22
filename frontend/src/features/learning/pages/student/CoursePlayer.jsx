import { useParams } from "react-router-dom";

export default function CoursePlayer() {
  const { courseId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">
        Course Player
      </h1>

      <p>Course ID: {courseId}</p>
    </div>
  );
}