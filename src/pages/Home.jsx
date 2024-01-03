import ExploreButton from "../components/ExploreButton";
import { Heading1, Heading5 } from "../components/Headings";

function Home() {
  return (
    <>
      <div className="home-container animate-[fadeIn_0.5s]  text-center lg:text-left h-[100%] grid lg:grid-cols-2  lg:pb-16 ">
        <div className="pb-8 md:pb-20 lg:col-span-1 lg:pl-10 place-content-center lg:place-content-end grid ">
          <div className="pb-6">
            <Heading5>SO, YOU WANT TO TRAVEL TO </Heading5>
          </div>
          <div className="pb-6 md:pb-8">
            <Heading1>Space</Heading1>
          </div>
          <p
            className=" text-[15px] leading-6 
            lg:px-0 
           lg:pr-20 font-barlow
            text-theme-blue-400 md:text-base
            md:leading-7
            md:px-28
            lg:text-lg 
            lg:leading-8 "
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="Lg:col-span-1 grid lg:content-end md:pb-16 justify-center min-[1440px]:pl-48   lg:pb-20">
          <ExploreButton></ExploreButton>
        </div>
      </div>
    </>
  );
}
export default Home;
