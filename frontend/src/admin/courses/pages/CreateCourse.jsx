
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateCourseMutation } from "../services/courseApi";

export default function CreateCourse() {
  const navigate = useNavigate();

  const [createCourse, { isLoading }] =
    useCreateCourseMutation();

  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    category: "",
    price: "",
    description: "",
    thumbnail: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createCourse({
        title: formData.title,
        instructor: formData.instructor,
        category: formData.category,
        price: Number(formData.price),
        description: formData.description,
        thumbnail: formData.thumbnail,
      }).unwrap();

      alert("Course Created Successfully");

      navigate("/admin/courses");
    } catch (error) {
      console.log(error);

      alert(
        error?.data?.message ||
          "Failed to create course"
      );
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Create Course
        </h1>

        <p className="text-gray-500 mt-1">
          Add a new course
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border">
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Course Title */}
          <div>
            <label className="block mb-2 font-medium">
              Course Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Instructor */}
          <div>
            <label className="block mb-2 font-medium">
              Instructor
            </label>

            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="">
                Select Category
              </option>

              <option value="FMGE">
                FMGE
              </option>

              <option value="Anatomy">
                Anatomy
              </option>

              <option value="Physiology">
                Physiology
              </option>

              <option value="Pharmacology">
                Pharmacology
              </option>

              <option value="Pathology">
                Pathology
              </option>

              <option value="Medicine">
                Medicine
              </option>

              <option value="Surgery">
                Surgery
              </option>

              <option value="Physiotherapy">
                Physiotherapy
              </option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-medium">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label className="block mb-2 font-medium">
              Thumbnail URL
            </label>

            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#1a504c] text-white px-6 py-3 rounded-xl hover:bg-black transition disabled:opacity-50"
          >
            {isLoading
              ? "Creating..."
              : "Create Course"}
          </button>
        </form>
      </div>
    </div>
  );
}