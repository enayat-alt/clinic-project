export default function Subscribe() {
  const plans = [
    {
      name: "Basic",
      price: "₹499/month",
      features: [
        "Access to Free Courses",
        "Study Materials",
        "Community Access",
        "Email Support",
      ],
    },
    {
      name: "Pro",
      price: "₹999/month",
      features: [
        "All Basic Features",
        "Premium Courses",
        "Mock Tests",
        "FMGE Resources",
        "Certificates",
      ],
    },
    {
      name: "Elite",
      price: "₹1,999/month",
      features: [
        "All Pro Features",
        "1-on-1 Mentorship",
        "Live Classes",
        "Priority Support",
        "Career Guidance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#e5f9f8]">

      {/* Hero Section */}
      <section className="bg-[#1a504c] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold text-white">
            Subscription Plans
          </h1>

          <p className="text-gray-200 mt-4 max-w-3xl mx-auto">
            Choose a plan that fits your learning goals and gain
            access to premium medical courses, certifications,
            FMGE preparation, and expert mentorship.
          </p>

        </div>
      </section>

      {/* Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition duration-300"
              >

                <div className="bg-[#1a504c] text-white p-8 text-center">

                  <h2 className="text-3xl font-bold">
                    {plan.name}
                  </h2>

                  <p className="text-2xl mt-4 font-semibold">
                    {plan.price}
                  </p>

                </div>

                <div className="p-8">

                  <ul className="space-y-4">

                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <span className="text-green-600">✓</span>
                        {feature}
                      </li>
                    ))}

                  </ul>

                  <button className="w-full mt-8 bg-[#1a504c] text-white py-3 rounded-xl font-semibold hover:bg-black transition">
                    Subscribe Now
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-3xl p-10 shadow-lg">

            <h2 className="text-4xl font-bold text-center text-[#1a504c] mb-10">
              Why Subscribe?
            </h2>

            <div className="grid md:grid-cols-4 gap-6 text-center">

              <div>
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-semibold">
                  Unlimited Learning
                </h3>
              </div>

              <div>
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="font-semibold">
                  Certifications
                </h3>
              </div>

              <div>
                <div className="text-4xl mb-3">📝</div>
                <h3 className="font-semibold">
                  Mock Tests
                </h3>
              </div>

              <div>
                <div className="text-4xl mb-3">👨‍⚕️</div>
                <h3 className="font-semibold">
                  Expert Mentorship
                </h3>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}