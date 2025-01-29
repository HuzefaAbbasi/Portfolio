import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatbot from "../../Assets/Projects/chatbot.jpeg";
import inlfuencer from "../../Assets/Projects/influencerX.jpeg";
import pos from "../../Assets/Projects/pos.png";
import furn from "../../Assets/Projects/furn.png";
import expense from "../../Assets/Projects/expense-tracker.png";
import carpool from "../../Assets/Projects/car-pool.png";
import smart_invest from "../../Assets/Projects/smart-invest.png"
import fee_management from "../../Assets/Projects/fee-management.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on .
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smart_invest}
              title="Smart Invest"
              description="Worked in a team of four to develop a versatile mobile wallet for seamless transactions, subscriptions, real-time currency conversion, and financial insights. Built with React Native, TypeScript, Node.js and MongoDB for an efficient user experience."
              ghLink="https://github.com/HuzefaAbbasi/smartInvest"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carpool}
              title="Car Pool"
              description="Developed a carpool application in React Native Expo with authentication, ride booking, ride creation, and chat features. Integrated APIs for seamless functionality."
              ghLink="https://github.com/HuzefaAbbasi/car-pool"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inlfuencer}
              isGitlab={true}
              title="Influencer Advertiser System"
              description="Developed the backend for a platform connecting influencers and advertisers, implementing authentication, profile management, gig interactions, and order placement. Optimized the database schema for efficiency and scalability using Node.js, Express, and MongoDB."
              ghLink="https://gitlab.com/umair.zafar/influencer-advertisor-platform-server"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fee_management}
              title="Fee Management System"
              description="Worked in team of two to develop a solution using MERN stack for a college to manage student fees, generate financial reports, print challans, and handle user access efficiently."
              // ghLink="https://github.com/HuzefaAbbasi/car-pool"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="Developed an Expense Tracker app with Flutter, Firebase Authentication, and Firebase Realtime Database. Features include transaction recording, category tagging, and graphical reports. Technologies used: Flutter, Firebase, and Riverpod."
              ghLink="https://github.com/HuzefaAbbasi/Expense-Tracker"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furn}
              isBlog={false}
              title="E-commerce Furniture App"
              description="Created a furniture e-commerce application UI in Flutter, featuring a user-friendly design for browsing and purchasing furniture items."
              ghLink="https://github.com/HuzefaAbbasi/furniture-app"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pos}
              isBlog={false}
              title="Eye Wear Shop Management Software"
              description="Worked in a team of three people to develop a fully functional JavaFX
based software solution for a local eyewear shop. The software efficiently 
managed inventory, billing, customer data, employee records, and reports. 
Integrated database functionality ensured flawless data integration and 
retrieval. "
              ghLink="https://github.com/HuzefaAbbasi/Eyeware-POS"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isGitlab={true}
              title="World Cup Chatbot"
              description="Worked in a team of three to create a Women's Football World Cup chatbot using OpenAI's language model and integrated with a Neo4j database. Developed a Text to Cypher tool for enhanced functionality. Used Python for the backend, Streamlit for the front-end, and OpenAI for natural language understanding."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
