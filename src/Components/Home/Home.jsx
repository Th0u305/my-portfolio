import { LampDemo } from "./Lamp";
import "../Home/ScrollDown.css";
import MiddleHome from "./MiddleHome";
import { CardHoverEffectDemo } from "./ProjectsCard";
import Skills from "./Skills";
import { useContext } from "react";
import { ContextData2 } from "../Root/Root";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  AOS.init({
    easing: "ease-in-out", // default easing for AOS animations
  });
  const { myRef } = useContext(ContextData2);
  return (
    <div>
      <div className="relative" id="home" ref={myRef}>
        <LampDemo></LampDemo>
      </div>
      <button className="container_mouse absolute bottom-12 left-0 right-0 mx-auto w-fit">
        <span className="mouse-btn w-[30px] h-[70px] md:w-[40px] md:h-[80px]">
          <span className="mouse-scroll w-[15px] h-[15px] md:w-[20px] md:h-[20px]"></span>
        </span>
        <span className="text-gray-200 text-md md:text-lg">Scroll Down</span>
      </button>
      <div className="max-w-6xl mx-auto mt-28 md:mt-36 p-5 ">
        <MiddleHome></MiddleHome>
        <CardHoverEffectDemo></CardHoverEffectDemo>
        <div className="mt-28 md:mt-36">
          <h1 className="text-3xl lg:text-5xl text-center mt-12 mb-12" data-aos="fade-right">
            My Skills
          </h1>
          <Skills></Skills>
        </div>
      </div>
    </div>
  );
};

export default Home;
