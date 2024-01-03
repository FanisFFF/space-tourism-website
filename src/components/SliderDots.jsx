import Dot from "./Dot";
import data from "../data.json";
function SliderDots({ crew, onCrew }) {
  return (
    <>
      <div className="justify-evenly max-w-24 gap-4 dot-indicators flex">
        {data.crew.map((el, i) => (
          <Dot id={i} crew={crew} key={i} onCrew={onCrew} />
        ))}
      </div>
    </>
  );
}
export default SliderDots;
