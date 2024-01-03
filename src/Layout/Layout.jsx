import { useState } from "react";
import Content from "./Content";
import Navigation from "./Navigation";

function Layout() {
  const [bg, setBg] = useState("home");
  return (
    <div
      style={{
        "--mobile-image-url": `url(/${bg}/background-${bg}-mobile.jpg)`,
        "--tablet-image-url": `url(/${bg}/background-${bg}-tablet.jpg)`,
        "--dekstop-image-url": `url(/${bg}/background-${bg}-desktop.jpg)`,
      }}
    >
      <div
        style={{
          "--mobile-image-url": `url(/${bg}/background-${bg}-mobile.jpg)`,
          "--tablet-image-url": `url(/${bg}/background-${bg}-tablet.jpg)`,
          "--dekstop-image-url": `url(/${bg}/background-${bg}-desktop.jpg)`,
        }}
        className=" min-h-screen
        grid grid-cols-12   grid-rows-12 gap-4
           bg-[image:var(--mobile-image-url)] md:bg-[image:var(--tablet-image-url)] lg:bg-[image:var(--dekstop-image-url)]  bg-no-repeat bg-cover 
        bg-center
      "
      >
        <div
          className="NAV grid items-center md:items-start lg:items-center
        
         mx-4 md:ml-4 md:mr-0 
         min-[1440px]:ml-16 min-[1440px]:mt-10
           outline-red-100
           col-span-12 row-span-2"
        >
          <Navigation onSetBg={setBg} />
        </div>
        <div className="  outline-slate-400 row-span-10">2</div>
        <div className="CONTENT-CONTAINER relative   outline-red-400 col-span-10 row-span-10">
          <Content></Content>
        </div>
        <div className=" outline-green-400  row-span-10">2</div>
      </div>
    </div>
  );
}
export default Layout;
