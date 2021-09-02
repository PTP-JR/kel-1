import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import NowPlaying from './NowPlaying';
import './Home.css';
import videoBackground from '../assets/video1.mp4';

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
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" 
        alt="video-background" src={videoBackground}
        type="video/mp4"/>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3">Welcome to THE MOVIES</h1>
        <p class="lead mb-0">Watch Latest Movie inside Here</p>
      </div>
    </div>
  </div>



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