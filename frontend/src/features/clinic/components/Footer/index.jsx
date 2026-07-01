import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeartbeat,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctor", path: "/doctor" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "General Medicine",
  "Cardiology",
  "Pediatrics",
  "Laboratory",
  "Health Checkup",
];

const socials = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaLinkedinIn />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#081A33] text-white">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">

              <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                <FaHeartbeat className="text-xl" />
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Odisha
                </h2>

                <p className="text-sm text-slate-300 tracking-[4px] uppercase">
                  Polyclinic
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-300">
              Compassionate healthcare with experienced medical professionals,
              modern facilities, and patient-first care.
            </p>

            <div className="flex gap-4 mt-8">

              {socials.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                  className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition"
                >
                  {item.icon}
                </motion.a>
              ))}

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-slate-300 hover:text-cyan-400 transition"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-semibold mb-6">
              Services
            </h3>

            <div className="space-y-4">

              {services.map((service) => (
                <p
                  key={service}
                  className="text-slate-300 hover:text-cyan-400 transition cursor-pointer"
                >
                  {service}
                </p>
              ))}

            </div>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-cyan-400" />
                <span className="text-slate-300">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-cyan-400" />
                <span className="text-slate-300">
                  info@odishapolyclinic.com
                </span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-cyan-400" />
                <span className="text-slate-300">
                  Cuttack, Odisha, India
                </span>
              </div>

              <div className="flex gap-3">
                <FaClock className="mt-1 text-cyan-400" />
                <span className="text-slate-300">
                  Mon - Sat : 9:00 AM - 8:00 PM
                </span>
              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-sm text-center">
            © {new Date().getFullYear()} Odisha Polyclinic.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <Link
              to="/privacy-policy"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}