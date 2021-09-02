import { useState } from "react";
import "./About.css";
import aldi from "../assets/aldi.jpg";
import moly from "../assets/moly.jpeg";
import harcen from "../assets/harcen.JPG";
import { Carousel } from "react-bootstrap";

function About() {
  const [bio] = useState([
    {
      name: "Aldi Milano",
      origin: "Bandung",
      about: `"Curious and inquisitive about tech stuff and love watching movies"`,
      image: aldi,
    },
    {
      name: "Firsty Ukhti Molyndi",
      origin: "Palembang",
      about: `"Professional blogger who passionate self-learning in Web Development"`,
      image: moly,
    },
    {
      name: "Bagas Hary Cendekiawan",
      origin: "Temanggung",
      about: `"Graphic design and sports are my hobbies"`,
      image: harcen,
    },
  ]);

  return (
    <div className="about">
      <div className="title">
        <h2>About</h2>
        <p>
          This website project is for final exam purpose. We are working to
          create a website that provide database about movies that can be used
          for looking up such an update about your favourite movies, ratings,
          details, and much more.
        </p>
      </div>
      <div className="wrapper">
        <Carousel variant="dark" className="carousel">
          {bio.map((item) => (
            <Carousel.Item className="carousel-item">
              <section className="item">
                <img className="carousel-image" src={item.image} alt="slide" />
                <h5>{item.name}</h5>
                <p>{item.about}</p>
              </section>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default About;
