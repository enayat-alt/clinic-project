import { Outlet } from "react-router-dom";
import Header from './../components/Header/Header';
import Footer from './../components/Footer/index';

export default function ClinicLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}