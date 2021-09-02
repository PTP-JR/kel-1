import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import NowPlaying from './NowPlaying';
import './Home.css';

const API_NOWPLAYING = "https://api.themoviedb.org/3/movie/now_playing?api_key=1d29e799bb3728c10ef98df0f4ed823f&language=en-US&page=2"

function Home(){

    const [playing, setPlaying] = useState([])

    useEffect(() => {
        fetch(API_NOWPLAYING)
          .then((response) => response.json())
          .then((data) => {
            setPlaying(data.results);
            console.log(data.results);
          })
          .catch((err) => console.log(err));
      }, []);

    return (
    <div className="movie-now-playing">
        <h3>Now Playing: </h3>
        <div className="now-playing-container">
    {playing.map((item) =>  (
        <NowPlaying {...item}/>
    ))}
    </div>
    </div>
    )
}

export default Home;