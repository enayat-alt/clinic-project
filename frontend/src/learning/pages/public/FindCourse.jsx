import { Link } from "react-router-dom";

export default function FindCourse() {
  const courses = [
    {
      id: 1,
      title: "FMGE Complete Preparation",
      instructor: "Dr. Shaik Faraz Ahmmed",
      price: "₹4,999",
      duration: "6 Months",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    },
    {
      id: 2,
      title: "Clinical Medicine Masterclass",
      instructor: "Dr. Shaik Faraz Ahmmed",
      price: "₹2,999",
      duration: "3 Months",
      image:
        "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg",
    },
    {
      id: 3,
      title: "Physiotherapy Essentials",
      instructor: "Expert Faculty",
      price: "₹1,999",
      duration: "2 Months",
      image:
        "https://images.pexels.com/photos/4506105/pexels-photo-4506105.jpeg",
    },
    {
      id: 4,
      title: "Diabetes & Thyroid Management",
      instructor: "Expert Faculty",
      price: "₹2,499",
      duration: "2 Months",
      image:
        "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg",
    },
    {
      id: 5,
      title: "Diagnostic & Lab Interpretation",
      instructor: "Expert Faculty",
      price: "₹3,499",
      duration: "4 Months",
      image:
        "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg",
    },
    {
      id: 6,
      title: "Medical Case Discussions",
      instructor: "Dr. Shaik Faraz Ahmmed",
      price: "₹1,499",
      duration: "1 Month",
      image:
        "https://images.pexels.com/photos/8460049/pexels-photo-8460049.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#e5f9f8]">
      {/* Hero Section */}
      <section className="bg-[#1a504c] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white">Find Your Course</h1>

          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Explore professional medical courses, FMGE coaching, healthcare
            certifications, and practical learning programs.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white p-6 rounded-3xl shadow">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full border border-[#cdebea] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1a504c]"
          />
        </div>
      </section>

      {/* Courses */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              //className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition"
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Thumbnail */}
             
              <div className="overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-56 w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#1a504c]">
                  {course.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  Instructor: {course.instructor}
                </p>

                <p className="text-gray-600">Duration: {course.duration}</p>

                <p className="text-2xl font-bold text-[#1a504c] mt-4">
                  {course.price}
                </p>

                <div className="flex gap-3 mt-5">
                  <Link
                    to={`/learning/course/${course.id}`}
                    className="flex-1 text-center border border-[#1a504c] text-[#1a504c] py-2 rounded-xl hover:bg-[#e5f9f8]"
                  >
                    Details
                  </Link>

                  <button className="flex-1 bg-[#1a504c] text-white py-2 rounded-xl hover:bg-black">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
