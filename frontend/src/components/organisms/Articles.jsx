import React from "react";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../context/AppContext";

const Articles = () => {
  const [state, setState] = useContext(ContextData);

  const [listOfView, setListOfView] = useState([]);

  useEffect(() => {
    switch (state.isMainContainer) {
      case "Reporter":
        setListOfView(state.dataReportersUpdates);
        break;
      case "Section":
        setListOfView(state.dataSectionsUpdates);
        break;
      default:
        return;
    }
  }, [state.isDataLoad, state.isMainContainer]);

  return (
    <div className="viewer__block">
      <div className="viewer__block__header">
        <h2 className="viewer__block__header__title">Latest articles</h2>
        <p className="viewer__block__header__category">
          {state.isMainContainer}
        </p>
      </div>
      {listOfView.map((block) => {
        return (
          <div className="articles" key={block.date}>
            <p className="articles__date">{block.date}</p>
            <ul className="articles__list">
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

export default Articles;
