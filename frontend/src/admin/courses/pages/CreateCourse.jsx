import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateCourse() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const courses =
      JSON.parse(localStorage.getItem("courses")) || [];

    const newCourse = {
      id: Date.now(),
      ...formData,
      chapters: [],
      createdAt: new Date().toISOString(),
    };

    courses.push(newCourse);

    localStorage.setItem(
      "courses",
      JSON.stringify(courses)
    );

    alert("Course Created Successfully");

    navigate("/admin/courses");
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

          <button
            type="submit"
            className="bg-[#1a504c] text-white px-6 py-3 rounded-xl"
          >
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
}