import { useState } from "react";
import { Heading3 } from "../components/Headings";
import NumberedTitle from "../components/NumberedTitle";
import SliderNumbered from "../components/SliderNumbered";
import data from "../data.json";

function Technology() {
  const [tech, setTech] = useState(0);
  const anim = document.querySelectorAll(".animation");
  const fadeIn = (el, timeout) => {
    if (!el) return;
    el.classList.add("animate-[fadeIn_0.8s]");
    setTimeout(() => {
      el.classList.remove("animate-[fadeIn_0.8s]");
    }, 400);
  };
  return (
    <>
      <div className="tech-container animate-[fadeIn_0.5s]  text-center lg:text-left  grid">
        <div
          className="grid justify-center md:justify-start mb-4 lg:mb-48"
          style={{ gridArea: "title" }}
        >
          <NumberedTitle number={"03"}> SPACE LAUNCH 101</NumberedTitle>
        </div>

        <div
          className="justify-center grid mb-4 md:mb-12"
          style={{ gridArea: "image" }}
        >
          <img
            className="lg:hidden animation "
            src={data.technology[tech].images.landscape}
            alt=""
          />
          <img
            className="hidden lg:block  animation  max-w-[170px] md:max-w-[300px] lg:max-w-[445px]"
            src={data.technology[tech].images.portrait}
            alt=""
          />
        </div>
        <div
          style={{ gridArea: "tabs" }}
          onClick={() => anim.forEach((el) => fadeIn(el, 1000))}
          className="grid pb-4 md:pb-8  justify-center  lg:justify-center max-h-[400px] lg:mr-8 lg:pt-4"
        >
          <SliderNumbered tech={tech} onTech={setTech}></SliderNumbered>
        </div>
        <div
          className="lg:max-w-[500px] grid place-content-center justify-center"
          style={{ gridArea: "content" }}
        >
          <div className="pb-2 md:pb-4 lg:pb-0">
            <p className="text-theme-blue-400  font-barlow-condensed tracking-widest">
              THE TERMINOLOGY…
            </p>
          </div>
          <div className="pb-4 md:pb-6 lg:pb-4 animation">
            <Heading3>{data.technology[tech].name}</Heading3>
          </div>
          <p
            className="font-barlow animation  order-2 leading-6  text-theme-blue-400 text-[15px] 
            md:text-base
          md:pb-10
          md:px-24
          md:leading-7
          lg:text-lg lg:pb-32
          lg:text-left
          lg:px-0
          lg:leading-8
          "
          >
            {data.technology[tech].description}
          </p>
        </div>
      </div>
    </>
  );
}
export default Technology;
