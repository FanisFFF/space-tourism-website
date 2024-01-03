import { useState } from "react";
import { Heading3, Heading4 } from "../components/Headings";
import NumberedTitle from "../components/NumberedTitle";
import SliderDots from "../components/SliderDots";
import data from "../data.json";

function Crew() {
  const [crew, setCrew] = useState(0);
  const anim = document.querySelectorAll(".animation");
  const fadeIn = (el, timeout) => {
    if (!el) return;
    el.classList.add("animate-[fadeIn_0.8s]");
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      el.classList.remove("animate-[fadeIn_0.8s]");
    }, 400);
  };
  return (
    <>
      <div className="crew-container animate-[fadeIn_0.5s]   grid text-center lg:text-left">
        <div
          className="grid justify-center
          mb-4 
          md:justify-start md:-translate-x-10
          md:-translate-y-10 lg:translate-x-0
          lg:translate-y-0
          lg:pb-32
          lg:pt-16
            
            "
          style={{ gridArea: "title" }}
        >
          <NumberedTitle number={"02"}> Meet your crew</NumberedTitle>
        </div>

        <div className="grid mb-4 lg:mr-48" style={{ gridArea: "image" }}>
          <img
            className="justify-self-center animation lg:absolute  max-w-[60%] lg:bottom-0  lg:max-h-[90%]"
            src={data.crew[crew].images.png}
            alt=""
          />
        </div>
        <div
          onClick={() => anim.forEach((el) => fadeIn(el, 1000))}
          style={{ gridArea: "tabs" }}
          className="grid pb-4 md:pb-8 justify-center lg:justify-start pt-4 lg:-translate-y-10"
        >
          <SliderDots crew={crew} onCrew={setCrew} data={data}></SliderDots>
        </div>
        <div
          className="lg:max-w-[500px] grid place-content-center justify-center lg:mr-48"
          style={{ gridArea: "content" }}
        >
          <div className="pb-2 md:mt-4 md:pb-4 lg:pb-7 animation">
            <Heading4>{data.crew[crew].role}</Heading4>
          </div>
          <div className="pb-4 md:pb-6 lg:pb-12 animation ">
            <Heading3>{data.crew[crew].name}</Heading3>
          </div>
          <p
            className="
            animation
            font-barlow order-2 px-6
            leading-6
            text-theme-blue-400 text-[15px]
             md:text-base
            pb-4
          md:pb-10
          md:px-24  
          md:leading-7
          lg:text-lg lg:pb-32
          lg:text-left
          lg:leading-8
          lg:px-0"
          >
            {data.crew[crew].bio}
          </p>
        </div>
      </div>
    </>
  );
}
export default Crew;
