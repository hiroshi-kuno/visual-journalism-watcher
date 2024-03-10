import { useContext, useEffect, useState } from "react";
import { ContextData } from "../context/AppContext";

const returnStatusClass = (item) => {
  if (item.get_type === "disable") {
    return "watch-list__status";
  } else {
    return item.get_status
      ? "watch-list__status true"
      : "watch-list__status false";
  }
};

const MainContainerWatchList = () => {
  const [state, useState] = useContext(ContextData);
  return (
    <div className="watch-list">
      <h2 className="watch-list__headline">Reporters</h2>
      {state.dataReporters.map((item) => {
        console.log(item);
        return (
          <div className="watch-list__item" key={item.head}>
            <div className={returnStatusClass(item)}></div>
            <a
              className="watch-list__item__link"
              href={item.url}
              target="_blank"
            >
              {item.head}
            </a>
            <p className="watch-list__item__media">{item.media}</p>
            <a
              className={
                item.social
                  ? "watch-list__item__social"
                  : "watch-list__item__social disable"
              }
              href={item.social}
            >
              Social
            </a>
          </div>
        );
      })}

      <h2 className="watch-list__headline">Visual Sections</h2>
      {state.dataSections.map((item) => {
        return (
          <div className="watch-list__item" key={item.url}>
            <div className={returnStatusClass(item)}></div>
            <a
              className="watch-list__item__link"
              href={item.url}
              target="_blank"
            >
              {item.head}
            </a>
            <p className="watch-list__item__media">{item.media}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MainContainerWatchList;
