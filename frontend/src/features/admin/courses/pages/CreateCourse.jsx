
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

  const handleSubmit = async (status) => {
    try {
      await createCourse({
        title: formData.title,
        instructor: formData.instructor,
        category: formData.category,
        price: Number(formData.price),
        description: formData.description,
        thumbnail: formData.thumbnail,
        status,
      }).unwrap();

      alert(
        status === "Draft"
          ? "Course saved as draft"
          : "Course published successfully"
      );

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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Create Course
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Add a new course to your learning platform
        </p>
      </div>

      {/* Form Card */}
      <div
        className="
          bg-white dark:bg-slate-800
          rounded-2xl
          border border-slate-100 dark:border-slate-700
          shadow-sm
          p-6
        "
      >
        <form className="space-y-6">
          {/* Course Title */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Course Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              placeholder="Enter course title"
            />
          </div>

          {/* Instructor */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Instructor
            </label>

            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              required
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              placeholder="Enter instructor name"
            />
          </div>

          {/* Category */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
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
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Price (₹)
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              placeholder="Enter price"
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Thumbnail URL
            </label>

            <input
              type="text"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Thumbnail Preview */}
          {formData.thumbnail && (
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                Thumbnail Preview
              </p>

              <img
                src={formData.thumbnail}
                alt="Thumbnail Preview"
                className="w-48 h-28 rounded-xl object-cover border border-slate-200 dark:border-slate-700"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          )}

          {/* Description */}
          <div>
            <label
              className="
                block mb-2
                text-sm font-medium
                text-slate-700 dark:text-slate-300
              "
            >
              Description
            </label>

            <textarea
              rows="6"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Enter detailed course description..."
              className="
                w-full
                px-4 py-3
                rounded-xl
                border border-slate-200 dark:border-slate-600
                bg-white dark:bg-slate-900
                text-slate-900 dark:text-white
                placeholder:text-slate-400
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              disabled={isLoading}
              onClick={() =>
                handleSubmit("Draft")
              }
              className="
                inline-flex items-center
                bg-slate-500
                hover:bg-slate-600
                text-white
                px-5 py-2.5
                rounded-xl
                text-sm
                font-medium
                transition
                disabled:opacity-50
              "
            >
              {isLoading
                ? "Saving..."
                : "Save as Draft"}
            </button>

            <button
              type="button"
              disabled={isLoading}
              onClick={() =>
                handleSubmit("Published")
              }
              className="
                inline-flex items-center
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                px-5 py-2.5
                rounded-xl
                text-sm
                font-medium
                transition
                disabled:opacity-50
              "
            >
              {isLoading
                ? "Publishing..."
                : "Publish Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}