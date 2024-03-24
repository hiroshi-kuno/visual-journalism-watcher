import WatchListBody from "../organisms/WatchListBody";

const WatchList = () => {
  return (
    <div className="watch-list">
      <div className="watch-list__head">
        <h2 className="watch-list__head__title">Watchlist</h2>
        <p className="watch-list__head__text">
          This list is the authors and sections to check for new articles.
        </p>
      </div>

      <WatchListBody />
    </div>
  );
};

export default WatchList;
