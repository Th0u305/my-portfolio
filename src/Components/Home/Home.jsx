import { LampDemo } from "./Lamp";
import "../Home/ScrollDown.css";
import MiddleHome from "./MiddleHome";
import { CardHoverEffectDemo } from "./ProjectsCard";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <LampDemo></LampDemo>
      </div>
      <button className="container_mouse absolute bottom-12 left-0 right-0 mx-auto w-fit">
        <span className="mouse-btn">
          <span className="mouse-scroll"></span>
        </span>
        <span className="text-gray-200 text-lg">Scroll Down</span>
      </button>
      <div className="max-w-6xl mx-auto mt-28 p-5">
        <MiddleHome></MiddleHome>
        <CardHoverEffectDemo></CardHoverEffectDemo>
      </div>
    </div>
  );
};

export default Home;
