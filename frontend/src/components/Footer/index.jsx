export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Clinic Info */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#1a504c]">
              Odisha Polyclinic
            </h2>

            <p className="text-gray-700 leading-7">
              Providing quality healthcare services with experienced
              doctors, advanced diagnostics, wellness programs,
              and patient-centered care across Odisha.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-[#1a504c] cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-[#1a504c] cursor-pointer transition">
                About Us
              </li>

              <li className="hover:text-[#1a504c] cursor-pointer transition">
                Services
              </li>

              <li className="hover:text-[#1a504c] cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Pricing */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-[#1a504c]">
              Our Pricing
            </h3>

            <div className="space-y-3 text-gray-700 text-sm">

              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Doctor Consultation</span>
                <span className="font-semibold">₹300</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Full Body Check-up</span>
                <span className="font-semibold">₹890</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Minor Surgery</span>
                <span className="font-semibold">₹4,890</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Physiotherapy</span>
                <span className="font-semibold">₹300</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>PRP Therapy</span>
                <span className="font-semibold">₹1,990</span>
              </div>

              <div className="border-b border-gray-200 pb-2">
                Morning Exercise / Yoga Programs
              </div>

              <div>
                Clinic Health Cards Available
              </div>

            </div>

            <p className="mt-4 text-xs text-gray-500">
              *Tests and diagnostics are charged separately.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>📞 +91 9124508591</li>
              <li>📧 odishapolyclinic@gmail.com</li>
              <li>📍 Bhubaneswar, Odisha, India</li>
            </ul>

            <div className="mt-5">
              <button className="bg-[#1a504c] text-white px-5 py-2 rounded-lg hover:bg-black transition">
                Book Appointment
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-600">
          <p>
            © 2026 Odisha Polyclinic. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm">
            Trusted Healthcare • Expert Doctors • Quality Care
          </p>
        </div>

      </div>
    </footer>
  );
}