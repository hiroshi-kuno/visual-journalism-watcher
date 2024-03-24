import { useContext } from "react";
import { ContextData } from "../../context/AppContext";
import WatchListReporter from "../molecules/WatchListReporter";
import WatchListSection from "../molecules/WatchListSection";

const WatchListBody = () => {
  const [state] = useContext(ContextData);
  return (
    <div className="watch-list-body">
      <h3 className="watch-list-body__headline">Reporters</h3>

      <div className="watch-list-body__list">
        {state.dataReporters.map((item, index) => (
          <WatchListReporter item={item} key={index} />
        ))}
      </div>

      <h3 className="watch-list-body__headline">Sections</h3>
      <div className="watch-list-body__list">
        {state.dataSections.map((item, index) => (
          <WatchListSection item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WatchListBody;
