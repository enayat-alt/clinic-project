import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  useGetCourseByIdQuery,
  useUpdateCourseMutation,
} from "../services/courseApi";

export default function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: course, isLoading } =
    useGetCourseByIdQuery(id);

  const [updateCourse, { isLoading: updating }] =
    useUpdateCourseMutation();

  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    category: "",
    price: "",
    thumbnail: "",
    description: "",
    status: "Draft",
  });

  useEffect(() => {
    if (course) {
      setFormData({
        title: course.title || "",
        instructor: course.instructor || "",
        category: course.category || "",
        price: course.price || "",
        thumbnail: course.thumbnail || "",
        description: course.description || "",
        status: course.status || "Draft",
      });
    }
  }, [course]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCourse({
        id,
        ...formData,
        price: Number(formData.price),
      }).unwrap();

      alert("Course Updated Successfully");

      navigate("/admin/courses");
    } catch (error) {
      console.log(error);

      alert(
        error?.data?.message ||
          "Failed to update course"
      );
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Edit Course
        </h1>

        <p className="text-gray-500 mt-1">
          Update course information
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Course Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Instructor
            </label>

            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Thumbnail URL
            </label>

            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Status
            </label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="Draft">
                Draft
              </option>

              <option value="Published">
                Published
              </option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <button
            type="submit"
            disabled={updating}
            className="bg-[#1a504c] text-white px-6 py-3 rounded-xl"
          >
            {updating
              ? "Updating..."
              : "Update Course"}
          </button>
        </form>
      </div>
    </div>
  );
}