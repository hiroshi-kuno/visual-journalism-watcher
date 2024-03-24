import React, { useContext } from "react";
import { ContextData } from "../../context/AppContext";

const SideColumnDesktop = () => {
  const [state, setState] = useContext(ContextData);

  return (
    <div className="menu-desktop">
      <p className="menu-desktop__label">List of new articles by</p>
      <ul className="menu-desktop__list">
        <li className="menu-desktop__list__item">
          <input
            type="radio"
            name="type-of-list-desktop"
            id="typeOfListReporters"
            value="Reporter"
            onChange={() =>
              setState({
                ...state,
                isMainContainer: "Reporter",
              })
            }
            checked={state.isMainContainer === "Reporter"}
          />
          <label htmlFor="typeOfListReporters">Reporters</label>
        </li>
        <li className="menu-desktop__list__item">
          <input
            type="radio"
            name="type-of-list-desktop"
            id="typeOfListSections"
            value="Section"
            onChange={() =>
              setState({
                ...state,
                isMainContainer: "Section",
              })
            }
            checked={state.isMainContainer === "Section"}
          />
          <label htmlFor="typeOfListSections">Sections</label>
        </li>
      </ul>

      <span className="menu-desktop__divider"></span>

      <ul className="menu-desktop__list">
        <li className="menu-desktop__list__item">
          <input
            type="radio"
            name="type-of-list-desktop"
            id="typeOfListWatchList"
            value="watchList"
            onChange={() =>
              setState({
                ...state,
                isMainContainer: "watchList",
              })
            }
            checked={state.isMainContainer === "watchList"}
          />
          <label htmlFor="typeOfListWatchList">Watch list</label>
        </li>
      </ul>
    </div>
  );
};

export default SideColumnDesktop;
