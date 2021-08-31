import { useEffect, useState } from "react";
import "./ListData.css";

const GET_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=1d29e799bb3728c10ef98df0f4ed823f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=1d29e799bb3728c10ef98df0f4ed823f&language=en-US&query=";

function ListData() {
  const [movies, setMovies] = useState([]);
  const [cari, setCari] = useState("");
  useEffect(() => {
    fetch(GET_API)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_API + cari)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      });
  };

  const handleOnChange = (e) => {
    setCari(e.target.value);
  };

  return (
    <div className="list-data">

    <div className="section-2"></div>
    <h2>New Release</h2>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            placeholder="search"
            className="srch"
            value={cari}
            onChange={handleOnChange}
          />
        </form>
      <div className="movies-container-box">
        {movies.map((item) => (
          <div className="movies-container">
            <img src={IMG_API + item.poster_path} alt="movies-poster" />
            <div className="movies-info">
              <p>Title : {item.title}</p>
              <p>Rating : {item.vote_average}</p>
              <p>Release date : {item.release_date}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
  
  );
}

export default ListData;
