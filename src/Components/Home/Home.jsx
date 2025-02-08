import { LampDemo } from "./Lamp";
import "../Home/ScrollDown.css";
import MiddleHome from "./MiddleHome";
import { ProjectsCard } from "./ProjectsCard";
import Skills from "./Skills";
import { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ContextData } from "../Context/ContextProvider";

const Home = () => {
  AOS.init({
    easing: "ease-in-out", // default easing for AOS animations
  });
  const { myRef } = useContext(ContextData);
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
      <div className="max-w-6xl mx-auto p-8 md:p-12 lg:p-16">
        <MiddleHome></MiddleHome>
        <ProjectsCard></ProjectsCard>
        <div className="mb-28">
          <h1 className="text-4xl text-center mb-14" data-aos="fade-right">
            My Skills
          </h1>
          <Skills></Skills>
        </div>
      </div>
    </div>
  );
};

export default Home;
