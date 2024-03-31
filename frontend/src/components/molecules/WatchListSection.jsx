const WatchListSection = ({ item }) => {
  const returnStatusClass = (item) => {
    if (item.get_type === "disable") {
      return "watch-status";
    } else {
      return item.get_status === "TRUE"
        ? "watch-status true"
        : "watch-status false";
    }
  };

  return (
    <div className="watch-list-item" key={item.url}>
      <div className="watch-list-item__profile">
        <div className={returnStatusClass(item)}></div>
        <a
          className="watch-list-item__profile__link"
          href={item.url}
          target="_blank"
        >
          {item.media}
        </a>
        <p className="watch-list-item__profile__media">{item.head}</p>
      </div>
    </div>
  );
};

export default WatchListSection;
