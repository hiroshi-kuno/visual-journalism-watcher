const WatchListReporterTags = ({ tags }) => {
  if (tags) {
    const array = tags.split(",");

    return (
      <div className="watch-list-item__profile__tags">
        {array.map((item) => {
          return (
            <span className="watch-list-item__profile__tags__tag" key={item}>
              {item}
            </span>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

export default WatchListReporterTags;
