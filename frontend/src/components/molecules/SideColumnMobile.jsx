import React, { useContext } from "react";
import { ContextData } from "../../context/AppContext";

const SideColumnMobile = () => {
  const [state, setState] = useContext(ContextData);

  return (
    <div className="menu-mobile">
      <ul className="menu-mobile__list">
        <li className="menu-mobile__list__item">
          <input
            type="radio"
            name="type-of-list-mobile"
            id="typeOfListReportersMobile"
            value="Reporter"
            onChange={() =>
              setState({
                ...state,
                isMainContainer: "Reporter",
              })
            }
            checked={state.isMainContainer === "Reporter"}
          />
          <label htmlFor="typeOfListReportersMobile">Reporters</label>
        </li>
        <li className="menu-mobile__list__item">
          <input
            type="radio"
            name="type-of-list-mobile"
            id="typeOfListSectionsMobile"
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
        {/* <li className="menu-mobile__list__item">
          <input
            type="radio"
            name="type-of-list-mobile"
            id="typeOfWatchListMobile"
            value="watchList"
            onChange={() =>
              setState({
                ...state,
                isMainContainer: "watchList",
              })
            }
            checked={state.isMainContainer === "watchList"}
          />
          <label htmlFor="typeOfWatchListMobile">Watch list</label>
        </li> */}
      </ul>
    </div>
  );
};

export default SideColumnMobile;
