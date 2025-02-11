import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { NavbarDemo } from "../Navbar/Navbar";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import "./loader.css";
import ContextProvider from "../Context/ContextProvider";
import { ToastContainer, toast } from "react-toastify";

const Root = () => {
  const [bgColor, setBgColor] = useState("#e6e4e4");
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (window.innerWidth <= 768) {
      if (scrollYProgress.get() > 0.0) {
        setBgColor("gray");
      }
      if (scrollYProgress.get() > 0.1) {
        setBgColor("#e6e4e4");
      }
    }
    if (window.innerWidth > 768) {
      if (scrollYProgress.get() > 0.1) {
        setBgColor("gray");
      }
      if (scrollYProgress.get() > 0.2) {
        setBgColor("#e6e4e4");
      }
    }
  });

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div
      className="bg-white smooth-wrapper"
      style={{
        backgroundColor: bgColor,
        transition: "background-color .5s ease-in-out",
      }}
    >
      {loading ? (
        <div className="h-screen bg-black flex justify-center items-center">
          <div className="loader">
            <div className="light"></div>
            <div className="black_overlay"></div>
          </div>
        </div>
      ) : (
        <ContextProvider>
          <ToastContainer />
          <NavbarDemo></NavbarDemo>
          <Outlet></Outlet>
          <Footer></Footer>
        </ContextProvider>
      )}
    </div>
  );
};

export default Root;
