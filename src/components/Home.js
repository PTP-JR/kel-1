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
      <div className="home">
        <section className="section-1">
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" alt="video-background" src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>



        </section>
    <div className="movie-now-playing">
        <h3>Now Playing: </h3>
        <div className="now-playing-container">
    {playing.map((item) =>  (
        <NowPlaying {...item}/>
    ))}
    </div>
    </div>
    </div>
    )
}

export default Home;