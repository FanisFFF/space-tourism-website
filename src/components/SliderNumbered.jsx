import NumberSlide from "./NumberSlide";
import data from "../data.json";

function SliderNumbered({ tech, onTech }) {
  return (
    <div className="dot-indicators flex lg:grid gap-4 lg:gap-6 w-full">
      {data.technology.map((el, i) => (
        <NumberSlide tech={tech} onTech={onTech} id={i} key={i}>
          {i + 1}
        </NumberSlide>
      ))}
    </div>
  );
}
export default SliderNumbered;
