function Dot({ id, crew, onCrew }) {
  let isActive = id === crew;
  return (
    <button
      onClick={() => onCrew(id)}
      className={`rounded-full 
      hover:transition-all ease-in-out duration-100 
      hover:bg-white/50  w-4 aspect-square ${
        isActive ? "bg-white hover:bg-white" : "bg-white/15"
      }`}
      aria-selected="true"
    >
      <span className="sr-only">Slide title</span>
    </button>
  );
}
export default Dot;
