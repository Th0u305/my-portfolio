import { LampDemo } from "./Lamp";
import "../Home/ScrollDown.css";
import MiddleHome from "./MiddleHome";

const Home = () => {
  return (
    <div className="relative">
      <div className="">
        <LampDemo></LampDemo>
      </div>
      <button className="container_mouse absolute top-[35%] left-0 right-0 mx-auto w-fit">
        <span className="mouse-btn">
          <span className="mouse-scroll"></span>
        </span>
        <span className="text-gray-200 text-lg">Scroll Down</span>
      </button>
      <div className="max-w-6xl mx-auto mt-28">
        <MiddleHome></MiddleHome>
      </div>
    </div>
  );
};

export default Home;
