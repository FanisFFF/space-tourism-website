import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavLink(props) {
  let {
    children = "active",
    number = "01",
    to = "home",
    onSetBg,
    onSetMenu,
  } = props;
  let id = useLocation();
  let isActive = id.pathname === `/${to}`;
  function setBackground() {
    onSetBg(to);
  }
  if (isActive) setBackground();
  if (id.pathname === "/" && to === "home") isActive = true;
  return (
    <>
      <Link
        className={`uppercase mr-3 text-lg py-8 text-white 
    hover:transition-all ease-in-out duration-100 
        tracking-[2.7px] font-barlow-condensed
         ${
           isActive ? "md:border-b-whit md:border-b-4 " : "md:border-b-white/50"
         } md:hover:border-b-4 `}
        onClick={() => {
          onSetMenu(false);
        }}
        to={to}
      >
        <span className="mr-2 font-bold">{number}</span>
        {children}
      </Link>
    </>
  );
}

export default NavLink;
