import WatchListReporterTags from "../atoms/WatchListReporterTags";

const WatchListReporter = ({ item }) => {
  const returnStatusClass = (item) => {
    if (item.get_type === "disable") {
      return "watch-status";
    } else {
      return item.get_status ? "watch-status true" : "watch-status false";
    }
  };

  return (
    <div className="watch-list-item" key={item.head}>
      <div className="watch-list-item__profile">
        <div className={returnStatusClass(item)}></div>
        <a
          className="watch-list-item__profile__link"
          href={item.url}
          target="_blank"
        >
          {item.head}
        </a>
        <p className="watch-list-item__profile__media">{item.media}</p>
        <WatchListReporterTags tags={item.tags} />
      </div>

      <div className="watch-list-item__buttons">
        <a
          className={
            item.social ? "button button--link" : "button button--link disable"
          }
          href={item.social}
          target="_blank"
        >
          Social
        </a>
        <a
          className={
            item.personal_site
              ? "button button--link"
              : "button button--link disable"
          }
          href={item.personal_site}
          target="_blank"
        >
          Website
        </a>
        <a
          className={
            item.github ? "button button--link" : "button button--link disable"
          }
          href={item.github}
          target="_blank"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default WatchListReporter;
