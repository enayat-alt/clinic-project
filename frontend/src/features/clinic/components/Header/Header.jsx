
import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

import Logo from "./Logo";
import Nav from "./Nav";
import HeaderBtn from "./HeaderBtn";
import MobileNav from "./MobileNav";
import useScroll from "./scroll";

export default function Header() {
  const [open, setOpen] = useState(false);

  const { scrolled, showHeader } = useScroll();

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -120 }}
        transition={{ duration: 0.35 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Logo scrolled={scrolled} />

          <Nav scrolled={scrolled} />

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:block">
              <HeaderBtn scrolled={scrolled} />
            </div>

            <button
              onClick={() => setOpen(true)}
              className={`flex h-11 w-11 items-center justify-center rounded-xl transition lg:hidden ${
                scrolled
                  ? "bg-[#081A33] text-white"
                  : "bg-white/20 backdrop-blur-md text-white"
              }`}
              aria-label="Open mobile menu"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileNav open={open} setOpen={setOpen} />
    </>
  );
}