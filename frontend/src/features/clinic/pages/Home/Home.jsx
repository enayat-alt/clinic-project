import { lazy, Suspense } from "react";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

// Lazy Loaded Components
const FeaturedDoctor = lazy(() =>
  import("../../components/FeaturedDoctor/FeaturedDoctor")
);

const CTA = lazy(() =>
  import("../../components/CTA/CTA")
);

const Departments = lazy(() =>
  import("../../components/Departments/Departments")
);

const WhyChoose = lazy(() =>
  import("../../components/WhyChoose/WhyChoose")
);

const PatientReviews = lazy(() =>
  import("../../components/PatientReviews/PatientReviews")
);

const Statistics = lazy(() =>
  import("../../components/Statistics/Statistics")
);

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-white text-[#121414]">
        
        <Hero />

        
        <Suspense fallback={null}>
          <FeaturedDoctor />

          <CTA />

          <Departments />

          <WhyChoose />

          <PatientReviews />

          <Statistics />
        </Suspense>
      </main>
    </>
  );
}