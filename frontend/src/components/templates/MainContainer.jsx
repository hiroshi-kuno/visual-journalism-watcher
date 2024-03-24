import { useContext } from "react";
import { ContextData } from "../../context/AppContext";
import Articles from "../organisms/Articles";
import WatchList from "./WatchList";

function MainContainer() {
  const [state, setState] = useContext(ContextData);

  const switchComponent = () => {
    switch (state.isMainContainer) {
      case "Section":
        return <Articles />;
      case "Reporter":
        return <Articles />;
      case "watchList":
        return <WatchList />;
      default:
        return;
    }
  };

  return <div className="viewer type-sans">{switchComponent()}</div>;
}

export default MainContainer;
