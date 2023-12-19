import { useEffect, useState } from "react";
import axios from "axios";

function MainContainer() {
  const [listOfView, setListOfView] = useState([]);
  const [listOfSections, setListOfSections] = useState([]);
  const [listOfReporters, setListOfReporters] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://storage.googleapis.com/vrw-dataset/get_headers_raspi_sections_update.json"
      )
      .then((response) => {
        setListOfSections(response.data);
        setListOfView(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
    axios
      .get(
        "https://storage.googleapis.com/vrw-dataset/get_headers_raspi_reporters_update.json"
      )
      .then((response) => {
        setListOfReporters(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  const changeView = (target) => {
    switch (target) {
      case "sections":
        setListOfView(listOfSections);
        break;
      case "reporters":
        setListOfView(listOfReporters);
        break;
      default:
        return;
    }
  };

  return (
    <div className="viewer type-sans">
      <input
        type="radio"
        name="type-of-list"
        id="typeOfListSections"
        value="sections"
        onChange={(e) => changeView(e.target.value)}
      />
      <label htmlFor="typeOfListSections">Sections</label>
      <input
        type="radio"
        name="type-of-list"
        id="typeOfListReporters"
        value="reporters"
        onChange={(e) => changeView(e.target.value)}
      />
      <label htmlFor="typeOfListReporters">Reporters</label>

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
}

export default MainContainer;
