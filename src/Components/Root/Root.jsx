import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import { NavbarDemo } from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  motion,
} from "framer-motion";

const Root = () => {
  const [bgColor, setBgColor] = useState("white");
  const { scrollYProgress } = useScroll();
  const slowScroll = useTransform(scrollYProgress, [0, 1], [0, 0.7]); // Slow down scroll effect
  const smoothScroll = useSpring(slowScroll, { stiffness: 100, damping: 30 }); // Smooth out the animation

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (scrollYProgress) {
      if (scrollYProgress.get() > 0.4) {
        setBgColor("gray");
      }
      if (scrollYProgress.get() > 0.7) {
        setBgColor("white");
      }
    }
  });

  return (
    <div>
      <motion.div
        style={{
          backgroundColor: bgColor,
          transition: "background-color .5s ease-in-out",
          translateY: smoothScroll, // Apply slowed scroll effect
        }}
      >
        <NavbarDemo></NavbarDemo>
        <Outlet></Outlet>
        <Footer></Footer>
      </motion.div>
    </div>
  );
};

export default Root;
