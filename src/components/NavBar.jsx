import NavLink from "./NavLink";

function NavBar({ children, onSetBg, onMenu, onSetMenu }) {
  return (
    <nav>
      <ul
        className={`
      backdrop-blur-3xl 
    md:backdrop-blur-md grid
    bg-white/5 md:flex
    fixed 
    z-50
    left-1/3
    right-0
    inset-y-0
    transition-transform ease-in-out
    duration-300
    px-[7vw] md:py-8
    gap-4
    pt-[10rem]
    pb-[20rem]
    md:translate-x-[0%]
    md:transition-none
    md:static
    md:z-0
    ${onMenu ? "translate-x-0" : "translate-x-[100%]"}
    `}
      >
        <div
          onClick={() => onSetMenu(!onMenu)}
          className="md:hidden absolute top-10 right-5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
            <g fill="#D0D6F9" fill-rule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
              <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
            </g>
          </svg>
        </div>
        <li>
          <NavLink
            onSetMenu={onSetMenu}
            onSetBg={onSetBg}
            isActive={true}
            number="01"
            to={"home"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onSetMenu={onSetMenu}
            onSetBg={onSetBg}
            number="02"
            to={"destination"}
          >
            Destination
          </NavLink>
        </li>
        <li>
          <NavLink
            onSetMenu={onSetMenu}
            onSetBg={onSetBg}
            number="03"
            to={"crew"}
          >
            Crew
          </NavLink>
        </li>
        <li>
          <NavLink
            onSetMenu={onSetMenu}
            onSetBg={onSetBg}
            number="04"
            to={"technology"}
          >
            Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
