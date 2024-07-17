import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate mobile application developer, skilled in both
              <i>
                <b className="purple"> Flutter </b>
              </i>
              and
              <i>
                <b className="purple"> React Native.</b>
              </i>
              <br />
              <br />
              Additionally, I am proficient in
              <i>
                <b className="purple"> Node.js.</b>
              </i>
              <br />
              <br />I enjoy creating software solutions and am currently a final
              year
              <b className="purple"> BS Software Engineering </b> student.
              <br />
              <br />I also have a solid understanding of classic programming
              languages like
              <i>
                <b className="purple"> C, Java, </b>
              </i>
              and
              <i>
                <b className="purple"> Python.</b>
              </i>
              <br />
              <br />
              My interests include
              <i>
                <b className="purple"> AI and deep learning, </b>
              </i>
              and I am actively learning and exploring these fields.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img
              src={require("../../Assets/profile-pic.jpg")}
              className="img-fluid"
              alt="avatar"
              style={{ borderRadius: "50%", height: "300px", width: "300px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HuzefaAbbasi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/huzefa-abbasi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:huzefaabbasi6@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
