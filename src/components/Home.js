import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import NowPlaying from './NowPlaying';
import './Home.css';
import videoBackground from '../assets/video1.mp4';
import videoSection2 from '../assets/video2.mp4';
import { Accordion } from 'react-bootstrap';


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
          <div class="overlay">
            <video 
              playsinline="playsinline" 
              autoPlay muted loop 
              alt="video-background" 
              src={videoBackground}
              type="video/mp4"
            />
          </div>        
          <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
              <div class="w-100 text-white">
                <h1 class="display-3">WELCOME TO THE MOVIES</h1>
                <p class="lead mb-0">Watch The Latest Movie Inside Here</p>
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

        <div className="section-2">
          <div className="text-section-2">
            <h3>FEELING EXPERIENCE</h3>
            <p>Watching movies through screen</p>
          </div>
          <div className="pic-section-2">
            <video 
              autoPlay loop 
              src={videoSection2} 
              alt="video-section-2" 
              className="video-section-2" 
              type="video/mp4"
            />
          </div>
        </div>

        <div className="section-3">
        </div>

        <div className="section-4">
          <h2>FAQ Question</h2>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header className="button-accordion">
                  <p>What is the feature of website?</p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    You can feel experience free watching movies on our website. You can search
                    the list of your favourite movies with the database that linked to themoviedb.org
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header className="button-accordion">
                  <p>How long this website build?</p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    This website has been build less in a week. First, we made javascript running on basic HTML
                    code. Then, we got styling this by bootstrap. We spend whole day building this. 
                    Much appreciate if you like it. &#128513;
                  </p>                        
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header className="button-accordion">
                  <p>What are your goals?</p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Our goals is giving all the best that we can do and effort to passed the final exam.
                    We are fast learner, so we tried all of our capability to building this. 
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header className="button-accordion">
                  <p>Who is your thanks for?</p>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    Thanks to our mentor (kak Auzan, kak Luthfi and kak Thoriq), Jasa Raharja teams, 
                    Klobility & YILB teams, all of Skilvul Team (kak Valen, kak Pandu, kak Heri, kak Ulvy) 
                    and many more for the chances that gave to us. This website may become a little gift from us.
                    Hope you like it. 
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

       </div>
      </div>
  )
}

export default Home;