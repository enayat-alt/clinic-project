

import { useState } from "react";
import { FaBars } from "react-icons/fa";

import Logo from "./Logo";
import Nav from "./Nav";
import HeaderBtn from "./HeaderBtn";
import MobileNav from "./MobileNav";
import useScroll from "./scroll";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { scrolled } = useScroll();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-slate-200"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Logo scrolled={scrolled} />

          <div className="hidden min-[1025px]:block">
            <Nav scrolled={scrolled} />
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden min-[1025px]:block">
              <HeaderBtn scrolled={scrolled} />
            </div>

            <button
              onClick={() => setOpen(true)}
              className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200 min-[1025px]:hidden ${
                scrolled
                  ? "bg-[#081A33] text-white hover:bg-[#0F2D56]"
                  : "bg-white/20 backdrop-blur-md text-white hover:bg-white/30"
              }`}
              aria-label="Open mobile menu"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </header>

      {open && <MobileNav open={open} setOpen={setOpen} />}
    </>
  );
}