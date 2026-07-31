

import { Link } from "react-router-dom";

const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
  { name: "Partner with Odisha Polyclinic", path: "/partner" },
];

const serviceLinks = [
  "General Medicine",
  "Cardiology & Diagnostics",
  "Pediatrics Care",
  "Lab Tests & Health Packages",
];

const categoryLinks = [
  "Personal Care",
  "Healthcare Devices",
  "Vitamins & Supplements",
  "Sports Nutrition",
  "Homeopathy Care",
  "Health Food and Drinks",
  "Sexual Wellness",
  "Diabetes Essentials",
  "Ayurvedic Care",
  "Mother and Baby Care",
  "Mobility & Elderly Care",
  "Skin Care",
  "Pet Care",
  "Health Concern",
  "Explore More",
];

const policyLinks = [
  { name: "Editorial Policy", path: "/editorial-policy" },
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Vulnerability Disclosure Policy", path: "/vulnerability-policy" },
  { name: "Terms and conditions", path: "/terms" },
  { name: "Declaration on Dark Pattern", path: "/dark-pattern-declaration" },
  { name: "Customer Support Policy", path: "/customer-support-policy" },
  { name: "Return Policy", path: "/return-policy" },
  { name: "Smartbuy Policy", path: "/smartbuy-policy" },
];

const needHelpLinks = [
  "Browse All Doctors",
  "Browse All Cities",
  "Browse All Clinics",
  "FAQs",
];

const socials = [
  { name: "Facebook", link: "#" },
  { name: "Instagram", link: "#" },
  { name: "LinkedIn", link: "#" },
  { name: "YouTube", link: "#" },
  { name: "Twitter", link: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#EEF4FE] text-[#4F585E] font-sans pt-12 pb-8 antialiased">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Links Grid Layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Column 1: Company & Our Services */}
          <div>
            <h3 className="text-sm font-bold text-[#30363C]">
              Company
            </h3>
            <ul className="mt-3 space-y-2 text-xs font-normal">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="transition hover:text-[#0F8A79]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-bold text-[#30363C]">
              Our Services
            </h3>
            <ul className="mt-3 space-y-2 text-xs font-normal">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="cursor-pointer transition hover:text-[#0F8A79]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Our Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-[#30363C]">
              Our Categories
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-2 text-xs font-normal">
              {categoryLinks.map((category) => (
                <span
                  key={category}
                  className="cursor-pointer transition hover:text-[#0F8A79]"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Need Help & Policy Info */}
          <div>
            <h3 className="text-sm font-bold text-[#30363C]">
              Need Help
            </h3>
            <ul className="mt-3 space-y-2 text-xs font-normal">
              {needHelpLinks.map((item) => (
                <li key={item}>
                  <span className="cursor-pointer transition hover:text-[#0F8A79]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-bold text-[#30363C]">
              Policy Info
            </h3>
            <ul className="mt-3 space-y-2 text-xs font-normal">
              {policyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="transition hover:text-[#0F8A79]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-sm font-bold text-[#30363C]">
              Follow Us
            </h3>
            <ul className="mt-3 space-y-2 text-xs font-normal">
              {socials.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="transition hover:text-[#0F8A79]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section: Payment Partners & Copyright */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-slate-200/80 pt-6 md:flex-row md:items-center">
          
          {/* Payment Partners Text Badges */}
          <div>
            <h4 className="text-xs font-bold text-[#30363C]">
              Our Payment Partners
            </h4>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {[
                "Google Pay",
                "Paytm",
                "Amazon Pay",
                "PhonePe",
                "VISA",
                "Mastercard",
                "RuPay",
              ].map((partner) => (
                <span
                  key={partner}
                  className="rounded border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-[#30363C] shadow-xs"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright Text */}
          <div className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} Odisha Polyclinic. All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}