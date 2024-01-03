import Tab from "./Tab";
import data from "../data.json";
function Tabs({ onDestination, destination, onAnimation }) {
  return (
    <div className="tab-list   underline-indicators flex gap-4 md:gap-8">
      {data.destinations.map((el, i) => (
        <Tab
          destination={destination}
          onDestination={onDestination}
          onAnimation={onAnimation}
          key={i}
          id={i}
        >
          {el.name}
        </Tab>
      ))}
    </div>
  );
}
export default Tabs;
