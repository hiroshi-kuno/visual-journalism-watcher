import { useContext, useEffect, useState } from "react";
import { ContextData } from "../context/AppContext";
import MainContainerArticles from "./MainContainerArticles";
import MainContainerWatchList from "./MainContainerWatchList";

function MainContainer() {
  const [state, setState] = useContext(ContextData);

  const switchComponent = () => {
    switch (state.isMainContainer) {
      case "sections":
        return <MainContainerArticles />;
      case "reporters":
        return <MainContainerArticles />;
      case "watchList":
        return <MainContainerWatchList />;
      default:
        return;
    }
  };

  return <div className="viewer type-sans">{switchComponent()}</div>;
}

export default MainContainer;
