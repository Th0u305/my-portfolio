import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root></Root>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="about" index element={<About></About>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
