import { useState } from "react";
import { Heading2, SubHeading1, SubHeading2 } from "../components/Headings";
import NumberedTitle from "../components/NumberedTitle";
import Tabs from "../components/Tabs";
import data from "../data.json";

function Destination() {
  const [destination, setDestination] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const anim = document.querySelectorAll(".animation");
  const fadeIn = (el, timeout) => {
    console.log("click");
    if (!el) return;
    el.classList.add("animate-[fadeIn_0.8s]");
    // el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      el.classList.remove("animate-[fadeIn_0.8s]");
    }, 400);
  };

  return (
    <>
      <div className="destination-container  animate-[fadeIn_0.5s] grid h-[100%] text-center lg:text-left">
        <div style={{ gridArea: "title" }} className="md:text-left lg:mt-16">
          <NumberedTitle number={"01"}>Pick your destination</NumberedTitle>
        </div>
        <div
          className="justify-center grid mt-16"
          style={{ gridArea: "image" }}
        >
          <div
            className="max-w-[170px] md:max-w-[300px]
            animate-[fadeIn_0.5s]
            lg:max-w-[350px] min-[1440px]:max-w-[400px]  mb-4 md:mb-8"
          >
            <img
              className="animation animate-[spin_200s_linear_infinite] rounded-full"
              src={data.destinations[destination].images.png}
              alt=""
            />
          </div>
        </div>
        <div
          onClick={() => anim.forEach((el) => fadeIn(el, 1000))}
          style={{ gridArea: "tabs" }}
          className="flex justify-center
          mb-4 md:mb-10 min-[1440px]::translate-y-4
          lg:justify-start lg:mb-0
          
          lg:pl-24 max-h-[34px]"
        >
          <Tabs
            onAnimation={setIsActive}
            destination={destination}
            onDestination={setDestination}
          ></Tabs>
        </div>
        <div
          className="lg:pl-24 lg:max-w-[500px] grid place-content-center 
          animate-[fadeIn_0.5s]
          justify-center
          
          "
          style={{ gridArea: "content" }}
        >
          <div className="pb-1 md:pb-3 animation">
            <Heading2>{data.destinations[destination].name}</Heading2>
          </div>
          <div>
            <p
              className="px-6 pb-4 md:px-16 lg:px-0
              animation
              leading-6 
              text-[15px]
              md:text-base font-barlow
              md:leading-7
              lg:leading-8
               text-theme-blue-400 lg:text-lg md:pb-16 "
            >
              {data.destinations[destination].description}
            </p>
          </div>
          <div className=" bg-white/25 w-full h-[1px] "></div>
          <div className="pt-4 mb-10 animation md:mb-16 lg:pt-8 grid gap-4 md:flex md:gap-16 md:pt-6 md:justify-center lg:justify-start">
            <div className="lg:pb-4">
              <SubHeading2>AVG. DISTANCE</SubHeading2>
              <SubHeading1>
                {data.destinations[destination].distance}
              </SubHeading1>
            </div>
            <div>
              <SubHeading2>Est. travel time</SubHeading2>
              <SubHeading1>{data.destinations[destination].travel}</SubHeading1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Destination;
