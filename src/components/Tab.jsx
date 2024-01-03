function Tab({ children, onDestination, destination, id }) {
  let isActive = destination === id;
  return (
    <button
      onClick={() => {
        onDestination(id);
      }}
      aria-selected="true"
      className={`uppercase
      hover:transition-all ease-in-out duration-100 
      text-sm tracking-[2.7px] font-barlow-condensed  hover:border-b-4
      ${
        isActive
          ? "border-b-whit border-b-4 text-white  "
          : "border-b-white/50 text-theme-blue-400"
      }
      `}
    >
      {children}
    </button>
  );
}

export default Tab;
