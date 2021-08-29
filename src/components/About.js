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
        <p class="fw-normal">
          This is a project for final exam purpose, we tried to build a website
          that provide database about movies
        </p>
        <div id="wrapper-bio">
          {bio.map((item) => (
            <div id="personal-bio">
              <img src={item.image} />
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
