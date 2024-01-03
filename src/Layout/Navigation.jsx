import { useState } from "react";
import NavBar from "../components/NavBar";

function Navigation({ onSetBg }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className=" max-h-[96px] h-[100%] flex items-center justify-between max-w-full min-w-6">
      <div>
        <svg
          className="aspect-square w-[55px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <div className="relative w-full hidden lg:block">
        <div className="z-10 absolute translate-x-8 bg-white/25 w-[100%] h-[1px]"></div>
      </div>
      <div>
        <div onClick={() => setIsActive(!isActive)} className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fill-rule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
            </g>
          </svg>
        </div>
        <div>
          <NavBar
            onMenu={isActive}
            onSetMenu={setIsActive}
            onSetBg={onSetBg}
          ></NavBar>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
