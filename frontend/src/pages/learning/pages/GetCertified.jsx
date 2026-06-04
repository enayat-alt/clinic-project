import { Link } from "react-router-dom";

export default function GetCertified() {
  const certifications = [
    {
      id: 1,
      title: "FMGE Certification Program",
      duration: "6 Months",
      price: "₹4,999",
    },
    {
      id: 2,
      title: "Clinical Medicine Certification",
      duration: "3 Months",
      price: "₹2,999",
    },
    {
      id: 3,
      title: "Physiotherapy Certification",
      duration: "2 Months",
      price: "₹1,999",
    },
    {
      id: 4,
      title: "Diabetes & Thyroid Certification",
      duration: "2 Months",
      price: "₹2,499",
    },
    {
      id: 5,
      title: "Medical Laboratory Certification",
      duration: "4 Months",
      price: "₹3,499",
    },
    {
      id: 6,
      title: "Emergency & First Aid Certification",
      duration: "1 Month",
      price: "₹1,499",
    },
  ];

  return (
    <div className="min-h-screen bg-[#e5f9f8]">

      {/* Hero */}
      <section className="bg-[#1a504c] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold text-white">
            Get Certified
          </h1>

          <p className="text-gray-200 mt-4 max-w-3xl mx-auto">
            Earn professional certifications, enhance your medical
            knowledge, and strengthen your healthcare career with
            industry-focused training programs.
          </p>

        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              🎓
              <h3 className="font-semibold mt-3">
                Verified Certificate
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              📚
              <h3 className="font-semibold mt-3">
                Practical Learning
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              🏆
              <h3 className="font-semibold mt-3">
                Skill Development
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow text-center">
              🚀
              <h3 className="font-semibold mt-3">
                Career Growth
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#1a504c] mb-12">
            Certification Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden"
              >

                <div className="h-40 bg-[#1a504c] flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center px-4">
                    {cert.title}
                  </h3>
                </div>

                <div className="p-6">

                  <p className="text-gray-600">
                    Duration: {cert.duration}
                  </p>

                  <p className="text-2xl font-bold text-[#1a504c] mt-3">
                    {cert.price}
                  </p>

                  <div className="flex gap-3 mt-6">

                    <Link
                      to={`/learning/certification/${cert.id}`}
                      className="flex-1 border border-[#1a504c] text-[#1a504c] text-center py-2 rounded-xl"
                    >
                      Details
                    </Link>

                    <button className="flex-1 bg-[#1a504c] text-white py-2 rounded-xl hover:bg-black">
                      Enroll
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}