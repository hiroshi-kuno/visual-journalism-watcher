import React from "react";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../context/AppContext";

const MainContainerArticles = () => {
  const [state, setState] = useContext(ContextData);

  const [listOfView, setListOfView] = useState([]);

  useEffect(() => {
    switch (state.isMainContainer) {
      case "sections":
        setListOfView(state.dataListSections);
        break;
      case "reporters":
        setListOfView(state.dataListReporters);
        break;
      default:
        return;
    }
  }, [state.isDataLoad, state.isMainContainer]);

  return (
    <div>
      {listOfView.map((block) => {
        return (
          <div className="viewer__block" key={block.date}>
            <p className="viewer__block__date">{block.date}</p>
            <ul className="viewer__block__list">
              {block.updates.map((item, index) => {
                return (
                  <li className="list-item" key={index}>
                    <a
                      href={item.url}
                      className="list-item__link"
                      target="_blank"
                    >
                      <div className="list-item__link__header">
                        <p className="list-item__link__header__head">
                          {item.head}
                        </p>
                        <p className="list-item__link__header__media">
                          {item.media}
                        </p>
                      </div>
                      <p className="list-item__link__title">{item.get_title}</p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MainContainerArticles;
