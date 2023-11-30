import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://storage.googleapis.com/vrw-dataset/test_get_headline_update.json")
      .then((response) => {
        console.log(response.data);
        setList(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div className="container type-sans">
      {list.map((block) => {
        return (
          <div className="container__block" key={block.date}>
            <p className="container__block__date">{block.date}</p>
            <ul className="container__block__list">
              {block.updates.map((item) => {
                return (
                  <li className="list-item" key={item.head}>
                    <div className="list-item__header">
                      <p className="list-item__header__media">{item.media}</p>
                      <p className="list-item__header__head">{item.head}</p>
                    </div>
                    <p className="list-item__title">{item.get_title}</p>
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

export default App;
