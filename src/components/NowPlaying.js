import './NowPlaying.css';
const IMG_API = "https://image.tmdb.org/t/p/w1280";

function NowPlaying({
      title,
      vote_average,
      release_date,
      overview,
      poster_path,
    }) {
      
  return (
    <section className="now-playing-box">
      <div className="now-playing">
        <img src={IMG_API + poster_path} className="poster-mv" alt="poster-mv" />
      </div>
    </section>
  );
}

export default NowPlaying;
