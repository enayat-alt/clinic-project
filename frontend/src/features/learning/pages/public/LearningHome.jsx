// import { Link } from "react-router-dom";
// import { useGetCoursesQuery } from "../../../admin/courses/services/courseApi";
// import LearningHomeCourseCard from "../../components/LearningHomeCourseCard.jsx";


// export default function LearningHome() {
//   const { data, isLoading, error } = useGetCoursesQuery({
//     page: 1,
//     limit: 6,
//   });

//   const courses = data?.courses || [];
//   const pagination = data?.pagination;

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading Courses...
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-500">
//         Failed to load courses
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">
//       {/* Hero */}
//       <section className="bg-[#1a504c] py-24">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-10 items-center">
//             <div>
//               <span className="text-green-200 font-medium">
//                 Odisha Polyclinic Learning Platform
//               </span>

//               <h1 className="text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
//                 Learn Medicine
//                 <br />
//                 From Experts
//               </h1>

//               <p className="text-gray-200 mt-6 text-lg leading-8">
//                 Master FMGE preparation, clinical medicine, diagnostics,
//                 physiotherapy, and healthcare skills through structured courses
//                 and expert mentorship.
//               </p>

//               <div className="flex gap-4 mt-8 flex-wrap">
//                 <Link
//                   to="/learning/find-course"
//                   className="
//                     bg-white
//                     text-[#1a504c]
//                     px-6
//                     py-3
//                     rounded-xl
//                     font-semibold
//                     hover:bg-gray-100
//                     transition
//                   "
//                 >
//                   Explore Courses
//                 </Link>

//                 <Link
//                   to="/learning/login"
//                   className="
//                     border
//                     border-white
//                     text-white
//                     px-6
//                     py-3
//                     rounded-xl
//                     hover:bg-white
//                     hover:text-[#1a504c]
//                     transition
//                   "
//                 >
//                   Start Learning
//                 </Link>
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <img
//                 src="/learning.webp"
//                 alt="Learning"
//                 className="w-full max-w-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats */}
//       <section className="py-16 bg-[#e5f9f8]">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
//               <h3 className="text-4xl font-bold text-[#1a504c]">500+</h3>

//               <p className="text-gray-600 mt-2">Students</p>
//             </div>

//             <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
//               <h3 className="text-4xl font-bold text-[#1a504c]">
//                 {courses.length}
//               </h3>

//               <p className="text-gray-600 mt-2">Courses</p>
//             </div>

//             <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
//               <h3 className="text-4xl font-bold text-[#1a504c]">1000+</h3>

//               <p className="text-gray-600 mt-2">Clinical Cases</p>
//             </div>

//             <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
//               <h3 className="text-4xl font-bold text-[#1a504c]">12+</h3>

//               <p className="text-gray-600 mt-2">Years Experience</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Courses */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-[#1a504c]">
//               Featured Courses
//             </h2>

//             <p className="text-gray-600 mt-4">
//               Learn from expert doctors and healthcare professionals.
//             </p>
//           </div>

//           {courses.length === 0 ? (
//             <div className="bg-white rounded-3xl p-10 text-center shadow">
//               <h3 className="text-2xl font-semibold">No Courses Available</h3>

//               <p className="text-gray-500 mt-2">
//                 No courses found in database.
//               </p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {courses.map((course) => (
//                 <LearningHomeCourseCard key={course.id} course={course} />
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//       {/* Why Learn With Us */}
//       <section className="py-20 bg-[#e5f9f8]">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-[#1a504c]">
//               Why Learn With Us?
//             </h2>

//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               Gain practical healthcare knowledge through industry-leading
//               faculty, real-world case studies, and flexible learning
//               experiences.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
//               <div className="w-16 h-16 mx-auto rounded-2xl bg-[#e5f9f8] flex items-center justify-center text-3xl mb-6">
//                 👨‍⚕️
//               </div>

//               <h3 className="text-2xl font-bold text-[#1a504c]">
//                 Expert Faculty
//               </h3>

//               <p className="text-gray-600 mt-4">
//                 Learn from experienced doctors, specialists, and healthcare
//                 professionals with years of practical expertise.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
//               <div className="w-16 h-16 mx-auto rounded-2xl bg-[#e5f9f8] flex items-center justify-center text-3xl mb-6">
//                 📚
//               </div>

//               <h3 className="text-2xl font-bold text-[#1a504c]">
//                 Structured Learning
//               </h3>

//               <p className="text-gray-600 mt-4">
//                 Follow well-organized chapters and lessons designed to build
//                 your knowledge step by step.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
//               <div className="w-16 h-16 mx-auto rounded-2xl bg-[#e5f9f8] flex items-center justify-center text-3xl mb-6">
//                 🎓
//               </div>

//               <h3 className="text-2xl font-bold text-[#1a504c]">
//                 Career Growth
//               </h3>

//               <p className="text-gray-600 mt-4">
//                 Improve your clinical skills, prepare for competitive
//                 examinations, and advance your healthcare career.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call To Action */}
//       {/* <section className="py-24 bg-[#1a504c]">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white">
//             Start Your Medical Learning Journey Today
//           </h2>

//           <p className="text-gray-200 mt-6 text-lg max-w-2xl mx-auto">
//             Join Odisha Polyclinic's learning platform and gain access to
//             comprehensive healthcare education, expert guidance, and practical
//             training resources.
//           </p>

//           <div className="flex flex-wrap justify-center gap-4 mt-10">
//             <Link
//               to="/learning/find-course"
//               className="
//                 bg-white
//                 text-[#1a504c]
//                 px-8
//                 py-4
//                 rounded-xl
//                 font-semibold
//                 hover:bg-gray-100
//                 transition
//               "
//             >
//               Browse Courses
//             </Link>

//             <Link
//               to="/learning/register"
//               className="
//                 border
//                 border-white
//                 text-white
//                 px-8
//                 py-4
//                 rounded-xl
//                 font-semibold
//                 hover:bg-white
//                 hover:text-[#1a504c]
//                 transition
//               "
//             >
//               Create Account
//             </Link>
//           </div>
//         </div>
//       </section> */}
//     </div>
//   );
// }



import { Link } from "react-router-dom";
import { useGetCoursesQuery } from "../../../admin/courses/services/courseApi";
import LearningHomeCourseCard from "../../components/LearningHomeCourseCard.jsx";

export default function LearningHome() {
  const { data, isLoading, error } = useGetCoursesQuery({
    page: 1,
    limit: 6,
  });

  const courses = data?.courses || [];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-gray-500 bg-white font-sans">
        Loading courses...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-red-500 bg-white font-sans">
        Failed to load courses.
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section styled for Odisha Polyclinic Medical Course */}
      <section className="bg-teal-900 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded">
                Odisha Polyclinic Learning
              </span>

              <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mt-3">
                Advanced Clinical Medicine <br />
                & FMGE Accelerator
              </h1>

              <p className="text-gray-600 mt-3 text-xs md:text-sm leading-relaxed">
                Master clinical diagnostics, medical practice, and exam preparation with our comprehensive healthcare courses. Learn at your own pace from expert medical professionals.
              </p>

              {/* Stats / Meta */}
              <div className="flex items-center gap-6 mt-5 text-xs">
                <div>
                  <div className="flex items-center gap-1 font-bold text-gray-900 text-sm">
                    <span className="text-amber-500">★</span> 4.8
                  </div>
                  <span className="text-gray-400 text-[10px]">average course rating</span>
                </div>

                <div className="border-l border-gray-200 pl-6">
                  <div className="font-bold text-gray-900 text-sm">12+</div>
                  <span className="text-gray-400 text-[10px]">clinical modules</span>
                </div>

                <div className="border-l border-gray-200 pl-6">
                  <div className="font-bold text-gray-900 text-sm">35.0</div>
                  <span className="text-gray-400 text-[10px]">hours of content</span>
                </div>
              </div>

              {/* CTA & Pricing */}
              <div className="flex items-center gap-4 mt-6 flex-wrap">
                <Link
                  to="/learning/find-course"
                  className="bg-teal-700 text-white text-xs md:text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-teal-800 transition shadow-sm"
                >
                  Get started
                </Link>

                <div className="flex items-baseline gap-2">
                  <span className="text-lg md:text-xl font-bold text-gray-900">₹2,499.00</span>
                  <span className="text-xs text-gray-400 line-through">₹9,999.00</span>
                </div>
              </div>

              {/* Enrolled footprint */}
              <div className="mt-4 text-[11px] text-gray-500 flex items-center gap-1.5">
                <span>🩺</span> 500+ medical students & doctors already enrolled
              </div>
            </div>

            {/* Right Image / Banner Card */}
            <div className="flex justify-center">
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-teal-800 relative shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000"
                  alt="Medical Course"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 border border-gray-100 rounded-xl text-center shadow-xs">
              <h3 className="text-2xl font-bold text-gray-900">500+</h3>
              <p className="text-xs text-gray-500 mt-1">Students</p>
            </div>

            <div className="p-4 border border-gray-100 rounded-xl text-center shadow-xs">
              <h3 className="text-2xl font-bold text-gray-900">{courses.length}</h3>
              <p className="text-xs text-gray-500 mt-1">Courses</p>
            </div>

            <div className="p-4 border border-gray-100 rounded-xl text-center shadow-xs">
              <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
              <p className="text-xs text-gray-500 mt-1">Clinical Cases</p>
            </div>

            <div className="p-4 border border-gray-100 rounded-xl text-center shadow-xs">
              <h3 className="text-2xl font-bold text-gray-900">12+</h3>
              <p className="text-xs text-gray-500 mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
            <p className="text-xs text-gray-500 mt-1">
              Learn from expert doctors and healthcare professionals.
            </p>
          </div>

          {courses.length === 0 ? (
            <div className="border border-gray-200 rounded-xl p-8 text-center">
              <h3 className="text-base font-semibold text-gray-900">No Courses Available</h3>
              <p className="text-xs text-gray-500 mt-1">No courses found in database.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <LearningHomeCourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Learn With Us Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Why Learn With Us?</h2>
            <p className="text-xs text-gray-500 mt-1 max-w-xl mx-auto">
              Gain practical healthcare knowledge through industry-leading faculty and real-world case studies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-100 rounded-xl text-center">
              <div className="w-10 h-10 mx-auto rounded-lg bg-teal-50 flex items-center justify-center text-lg mb-4">
                👨‍⚕️
              </div>
              <h3 className="text-base font-bold text-gray-900">Expert Faculty</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Learn from experienced doctors, specialists, and healthcare professionals with years of practical expertise.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl text-center">
              <div className="w-10 h-10 mx-auto rounded-lg bg-teal-50 flex items-center justify-center text-lg mb-4">
                📚
              </div>
              <h3 className="text-base font-bold text-gray-900">Structured Learning</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Follow well-organized chapters and lessons designed to build your knowledge step by step.
              </p>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl text-center">
              <div className="w-10 h-10 mx-auto rounded-lg bg-teal-50 flex items-center justify-center text-lg mb-4">
                🎓
              </div>
              <h3 className="text-base font-bold text-gray-900">Career Growth</h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Improve your clinical skills, prepare for competitive examinations, and advance your healthcare career.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}