import { Outlet } from "react-router-dom";
import Header from './../components/Header/Header';
import Footer from './../components/Footer/index';
import ScrollToTop from "./../components/ScrollToTop/ScrollToTop";
export default function ClinicLayout() {
  return (
    <>
      <Header />
      <ScrollToTop />

      <Outlet />

      <Footer />
    </>
  );
}