import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MYADAM AKSHAY </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br /> I am a final year student pursuing an  B.Tech course
            in Artifical intelligence and machine learning at St. Peter's Enigneering College.
            <br />
            Additionally, I am currently intern at Motion Cut Studio.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listiening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "TRY and TRY till you Succeed"{" "}
          </p>
          <footer className="blockquote-footer">AKSHAY</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
