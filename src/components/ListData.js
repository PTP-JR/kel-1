import { useEffect, useState } from "react";
import "./ListData.css";
import {Link} from 'react-router-dom';
import loading3D from '../assets/angry.gif';

const GET_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=1d29e799bb3728c10ef98df0f4ed823f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=1d29e799bb3728c10ef98df0f4ed823f&language=en-US&query=";

function ListData() {
  const [movies, setMovies] = useState([]);
  const [cari, setCari] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(GET_API)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    fetch(SEARCH_API + cari)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
        setLoading(false);
      });
  };

  const handleOnChange = (e) => {
    setCari(e.target.value);
  };

  return (
    
<div className="listData">
    <section className="video">
    <div className="video-trailer">
    <iframe width="560" height="315" className="responsive-iframe" src="https://www.youtube.com/embed/EWizz52lZvw" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
    encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <section className="deskripsi-video">
      <h2>The Baby Boss</h2>
      <h4>Genre: Family</h4>
     <dix className="social-share">
       <p>Share This: </p>
     <Link to="#" className="fa fa-facebook"></Link>
     <Link to="#" className="fa fa-instagram"></Link>
     <Link to="#" className="fa fa-twitter"></Link>
     <Link to="#" className="fa fa-linkedin"></Link>
     </dix>
      <p>Overview: The Templeton brothers — Tim and his Boss Baby little bro Ted — 
        have become adults and drifted away from each other. But a new boss baby with
         a cutting-edge approach and a can-do attitude is about to bring them together 
         again … and inspire a new family business.</p>
          </section>
</section>

        {loading ? (
          <img src={loading3D} className="loading" alt="Loading 3D Anime" />
        ) : (
          // { loading ? <h1 className="loading">Menunggu...</h1> : (
            <section className="fungsi-search">
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
            </section>



          { loading ? <img src={loading3D} className="loading" alt="Loading 3D Anime" /> : (
            // { loading ? <h1 className="loading">Menunggu...</h1> : (
    <>
                  <section className="fungsi-search">
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
                  </section >
    
                  <div className="movies-container-box">
                    {movies.map((item) => (
                      <div className="movies-container">
                        <img src={IMG_API + item.poster_path} />
                          <div className="movies-info">
                            <div className="movies-name">
                              <div>
                                <p>{item.title}</p>
                              </div>
                              <div>
                                <p>{item.vote_average}</p>
                              </div>
                            </div>
                            {/* <p>Release date : {item.release_date}</p> */}
                          </div>
                          <div className="movies-overview">
                            <h3>Overview :</h3>
                            <p>{item.overview}</p>
                          </div>
                          </div>
                      </div>
                      </>
                    ))}
</div>
                  </div>
                </div>

  );
}

export default ListData;
