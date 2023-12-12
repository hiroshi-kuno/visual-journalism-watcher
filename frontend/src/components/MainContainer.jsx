import { useEffect, useState } from "react";
import axios from "axios";

function MainContainer() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://storage.googleapis.com/vrw-dataset/get_headers_raspi_update.json"
      )
      .then((response) => {
        // console.log(response.data);
        setList(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div className="viewer type-sans">
      {list.map((block) => {
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
