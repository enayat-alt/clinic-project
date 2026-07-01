import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaVideo,
  FaFlask,
  FaAmbulance,
  FaUserMd,
  FaUsers,
  FaHospital,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

import FloatingBackground from "./FloatingBackground";
import FloatingCard from "./FloatingCard";
import TrustBadge from "./TrustBadge";
import AnimatedButton from "./AnimatedButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#081A33] min-h-screen flex items-center">

      {/* Background */}
      <FloatingBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-400/10
              px-4
              py-2
              backdrop-blur-xl
              "
            >

              <FaCheckCircle className="text-cyan-300" />

              <span className="text-cyan-200 text-sm font-medium">
                Trusted Healthcare in Odisha
              </span>

            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .3 }}
              className="
              mt-8
              text-5xl
              lg:text-7xl
              font-extrabold
              leading-tight
              text-white
              "
            >

              Your{" "}

              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Health
              </span>

              <br />

              Our Priority.

            </motion.h1>

            {/* Paragraph */}

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .5,
              }}
              className="
              mt-8
              text-lg
              leading-8
              text-slate-300
              max-w-xl
              "
            >

              Experience compassionate healthcare with expert doctors,
              advanced diagnostics, online consultations, and personalized
              treatment plans — all under one trusted roof at Odisha
              Polyclinic.

            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .7,
              }}
              className="mt-10 flex flex-wrap gap-5"
            >

              <Link to="/appointment">

                <AnimatedButton>
                  Book Appointment
                </AnimatedButton>

              </Link>

              <Link to="/departments">

                <AnimatedButton primary={false}>
                  Explore Services
                </AnimatedButton>

              </Link>

            </motion.div>

            {/* Trust Badges */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">

              <TrustBadge
                icon={<FaUsers />}
                value={5000}
                suffix="+"
                label="Patients"
                delay={.2}
              />

              <TrustBadge
                icon={<FaUserMd />}
                value={15}
                suffix="+"
                label="Doctors"
                delay={.4}
              />

              <TrustBadge
                icon={<FaHospital />}
                value={15}
                suffix="+"
                label="Departments"
                delay={.6}
              />

              <TrustBadge
                icon={<FaStar />}
                value={4.9}
                label="Rating"
                delay={.8}
              />

            </div>

          </motion.div>
                    {/* RIGHT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex justify-center items-center"
          >

            {/* Glow Behind Doctor */}

            <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* Doctor */}

            <motion.img
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src="/doctor.png"
              alt="Doctor"
              className="
              relative
              z-20
              w-[320px]
              md:w-[450px]
              lg:w-[520px]
              drop-shadow-[0_30px_60px_rgba(0,0,0,.45)]
              "
            />

            {/* Floating Cards */}

            <FloatingCard
              title="Online Consultation"
              subtitle="Consult our experts from home."
              icon={<FaVideo />}
              className="top-4 -left-6 lg:-left-16"
              delay={0.2}
            />

            <FloatingCard
              title="Emergency Care"
              subtitle="24×7 Medical Assistance"
              icon={<FaAmbulance />}
              className="top-24 -right-4 lg:-right-10"
              delay={0.4}
            />

            <FloatingCard
              title="NABL Certified Lab"
              subtitle="Fast & Accurate Reports"
              icon={<FaFlask />}
              className="bottom-24 -left-8 lg:-left-20"
              delay={0.6}
            />

            <FloatingCard
              title="Experienced Doctors"
              subtitle="15+ Medical Specialists"
              icon={<FaUserMd />}
              className="bottom-4 right-0 lg:-right-8"
              delay={0.8}
            />

          </motion.div>

        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent" />

    </section>
  );
}