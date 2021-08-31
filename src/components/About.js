import { useState } from "react";
import "./About.css";
import aldi from "../assets/aldi.jpg";
import moly from "../assets/moly.jpeg";
import harcen from "../assets/harcen.JPG";


function About() {
  const [bio, setBio] = useState([
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
    <div id="wrapper">
      <div id="title">
        <p className="fw-normal">
          This website project is for final exam purpose. We are working to create a website
          that provide database about movies that can be used for looking up such an update about your favourite movies, ratings, details, and much more.
        </p>
        <div id="wrapper-bio">
          {bio.map((item) => (
            <div id="personal-bio">
              <img src={item.image} alt="author-bio" />
              <p id="about-name">{item.name} | {item.origin}</p>
              <p id="about-font">{item.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
