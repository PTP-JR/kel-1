import { useEffect, useState } from "react";
import "./ListData.css";
import './ListData.css';

const GET_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=1d29e799bb3728c10ef98df0f4ed823f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=1d29e799bb3728c10ef98df0f4ed823f&language=en-US&page=1&include_adult=false";

function ListData() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(GET_API)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="list-data">
      <div className="video-baby-boss">
      <iframe
      src="https://www.youtube.com/embed/EWizz52lZvw" className="responsive-iframe" title="YouTube video player" 
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className="video-title">
<div>
{}

</div>

    </div>
  <section className="sub-movie">
    <h2>List Film Terbaru</h2>
<div className="list-movie">
        <div className="search">
          <input
            type="text"
            placeholder="search"
            className="srch"
            value={setMovies}
          />
        </div>

      <div className="movies-container-box">
        {movies.map((item) => (
          <div className="movies-container">
            <img src={IMG_API + item.poster_path} alt="movie-poster" />
            <div className="movies-info">
              <p>Title : {item.title}</p>
              <p>Rating : {item.vote_average}</p>
              <p>Release date : {item.release_date}</p>
            </div>
          </div>
        ))};
      </div>
      </div>
      </section>
    </div>
  );
}

export default ListData;
