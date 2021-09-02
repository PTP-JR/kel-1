import moment from "moment";
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function NowPlaying({
  title,
  vote_average,
  release_date,
  overview,
  poster_path,
}) {
  return (
    <>
      <div className="now-playing">
        <img src={IMG_API + poster_path} />
        <div className="movie-info">
          <p>{title}</p>
          <p>{vote_average}</p>
          <p>{overview}</p>
          <p>{moment(release_date).format('LL')}</p>
        </div>
      </div>
    </>
  );
}

export default NowPlaying;
