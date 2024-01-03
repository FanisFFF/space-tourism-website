import { Link } from "react-router-dom";

function ExploreButton() {
  return (
    <>
      <div className="group min-w-36 md:min-w-60 lg:max-w-64 min-[1440px]:min-w-[274px]  bg-white relative grid place-content-center  uppercase font-bellefair text-xl  md:text-3xl aspect-square p-2 rounded-full">
        <Link
          to={"/destination"}
          className="w-full text-inherit uppercase text-theme-blue-900 z-10 "
        >
          Explore
        </Link>
        <div className="group-hover:text-white  hover:opacity-100 transition ease-in-out group-hover:scale-150 bg-white/50 absolute -z-1 w-full rounded-full  aspect-square"></div>
      </div>
    </>
  );
}

export default ExploreButton;
