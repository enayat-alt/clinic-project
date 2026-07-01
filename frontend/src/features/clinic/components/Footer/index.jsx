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
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 md:py-20 lg:py-24">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600">
                <FaHeartbeat className="text-xl" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">Odisha</h2>
                <p className="text-sm uppercase tracking-[4px] text-slate-300">Polyclinic</p>
              </div>
            </div>

            <p className="mt-6 text-slate-300 leading-7">
              Compassionate healthcare with experienced medical professionals,
              modern facilities, and patient-first care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {socials.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-cyan-500"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-slate-300 transition hover:text-cyan-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-semibold">Services</h3>
            <div className="space-y-4">
              {services.map((service) => (
                <p key={service} className="cursor-pointer text-slate-300 transition hover:text-cyan-400">
                  {service}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-semibold">Contact Us</h3>
            <div className="space-y-5">
              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-cyan-400" />
                <span className="text-slate-300">+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-cyan-400" />
                <span className="text-slate-300">info@odishapolyclinic.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-cyan-400" />
                <span className="text-slate-300">Cuttack, Odisha, India</span>
              </div>

              <div className="flex gap-3">
                <FaClock className="mt-1 text-cyan-400" />
                <span className="text-slate-300">Mon - Sat : 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Odisha Polyclinic. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/privacy-policy" className="text-slate-400 transition hover:text-cyan-400">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 transition hover:text-cyan-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}