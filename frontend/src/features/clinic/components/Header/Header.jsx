

// import { useState } from "react";
// import { FaBars } from "react-icons/fa";

// import Logo from "./Logo";
// import Nav from "./Nav";
// import HeaderBtn from "./HeaderBtn";
// import MobileNav from "./MobileNav";
// import useScroll from "./scroll";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const { scrolled } = useScroll();

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
//           scrolled
//             ? "bg-white shadow-lg border-b border-slate-200"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
//           <Logo scrolled={scrolled} />

//           <div className="hidden min-[1025px]:block">
//             <Nav scrolled={scrolled} />
//           </div>

//           <div className="flex items-center gap-2 sm:gap-4">
//             <div className="hidden min-[1025px]:block">
//               <HeaderBtn scrolled={scrolled} />
//             </div>

//             <button
//               onClick={() => setOpen(true)}
//               className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200 min-[1025px]:hidden ${
//                 scrolled
//                   ? "bg-[#081A33] text-white hover:bg-[#0F2D56]"
//                   : "bg-white/20 backdrop-blur-md text-white hover:bg-white/30"
//               }`}
//               aria-label="Open mobile menu"
//             >
//               <FaBars size={20} />
//             </button>
//           </div>
//         </div>
//       </header>

//       {open && <MobileNav open={open} setOpen={setOpen} />}
//     </>
//   );
// }

// import { useState } from "react";
// import { FaBars } from "react-icons/fa";

// import Logo from "./Logo";
// import Nav from "./Nav";
// import HeaderBtn from "./HeaderBtn";
// import MobileNav from "./MobileNav";
// import useScroll from "./scroll";

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const { scrolled } = useScroll();

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
//           scrolled
//             ? "bg-white shadow-lg border-b border-slate-200"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
//           {/* Logo on the Far Left */}
//           <Logo scrolled={scrolled} />

//           {/* Nav & Header Button Grouped on the Far Right */}
//           <div className="flex items-center gap-6 xl:gap-8">
//             <div className="hidden min-[1025px]:block">
//               <Nav scrolled={scrolled} />
//             </div>

//             <div className="hidden min-[1025px]:block">
//               <HeaderBtn scrolled={scrolled} />
//             </div>

//             {/* Mobile Menu Toggle Button */}
//             <button
//               onClick={() => setOpen(true)}
//               className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200 min-[1025px]:hidden ${
//                 scrolled
//                   ? "bg-[#081A33] text-white hover:bg-[#0F2D56]"
//                   : "bg-white/20 backdrop-blur-md text-white hover:bg-white/30"
//               }`}
//               aria-label="Open mobile menu"
//             >
//               <FaBars size={20} />
//             </button>
//           </div>
//         </div>
//       </header>

//       {open && <MobileNav open={open} setOpen={setOpen} />}
//     </>
//   );
// }

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
          
          {/* Logo */}
          <Logo scrolled={scrolled} />

          {/* Desktop Navigation */}
          <div className="flex items-center gap-6 xl:gap-8">
            
            <div className="hidden min-[1025px]:block">
              <Nav scrolled={scrolled} />
            </div>

            <div className="hidden min-[1025px]:block">
              <HeaderBtn scrolled={scrolled} />
            </div>

            {/* Lightweight Mobile Toggle */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open mobile menu"
              aria-expanded={open}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-lg
                bg-[#2a687d]
                text-white
                shadow-md
                transition-transform
                duration-200
                hover:scale-105
                hover:bg-[#225465]
                active:scale-95
                min-[1025px]:hidden
              "
            >
              <FaBars size={18} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}