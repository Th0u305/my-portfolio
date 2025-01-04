import React from "react";
import { FlipWords } from "../Utility/Flip-words";
import AOS from "aos";
import "aos/dist/aos.css";

export function FlipWordsDemo() {
  const words = ["Olá", "Hola", "السلام عليكم", "Hello", "こんにちは", "Ciao"];
    AOS.init({
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
    });

  return (
    (<div className="">
      <div
        className="text-4xl inline-flex" data-aos="fade-down" data-aos-delay="200">
        <FlipWords words={words}/>, I'm Ahnaf
      </div>
    </div>)
  );
}
