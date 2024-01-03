function NumberSlide({ children, tech, onTech, id }) {
  let isActive = tech === id;
  return (
    <button
      onClick={() => onTech(id)}
      className={`rounded-full border-2
      hover:transition-all ease-in-out duration-100 
      hover:border-white/50 w-10 md:w-14 lg:w-20 aspect-square ${
        isActive
          ? "border-white bg-white hover:border-white"
          : "border-white/15"
      }`}
      aria-selected="true"
    >
      <span
        className={`font-bellefair text-base md:text-2xl ${
          isActive ? "text-theme-blue-900" : "text-white"
        }`}
      >
        {children}
      </span>
      <span className="sr-only">Slide title</span>
    </button>
  );
}
export default NumberSlide;
