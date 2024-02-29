import { useContext, useEffect, useState } from "react";
import { ContextData } from "../context/AppContext";

const MainContainerWatchList = () => {
  const [state, useState] = useContext(ContextData);
  // console.log(state.dataReporters[0], state.dataSections[0]);
  return (
    <div>
      <h2>Reporters</h2>
      {state.dataReporters.map((item) => {
        return (
          <div key={item.head}>
            <a href={item.url} target="_blank">
              {item.head}
            </a>
            <p>{item.media}</p>
          </div>
        );
      })}

      <h2>Visual Sections</h2>
      {state.dataSections.map((item) => {
        return (
          <div key={item.url}>
            <p>{item.media}</p>

            <a href={item.url} target="_blank">
              {item.head}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default MainContainerWatchList;
