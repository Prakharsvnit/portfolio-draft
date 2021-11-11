import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import covidTracker from "../../Assets/Projects/covid-tracker.png";
import netmeds from "../../Assets/Projects/netmeds.png";
import twitter from "../../Assets/Projects/twitter1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netmeds}
              demoPath="https://netmedsclone.vercel.app/"
              isBlog={false}
              title="Netmeds Clone"
              description="Netmeds is online portal for medicine where one can upload prescription order medicine and get them delivered at doorstep.Built using HTML,CSS,Javascript."
              link="https://github.com/Prakharsvnit/Netmeds-clone"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              demoPath="https://github.com/Prakharsvnit/twitter_clone_master"
              title="Twitter Clone"
              description="Twitter is a platform to express your thoughts usig tweets.Build with React.js, CSS, Material-UI"
              link="https://github.com/Prakharsvnit/twitter_clone_master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidTracker}
              demoPath="http://prakhar4896.pythonanywhere.com/"
              isBlog={false}
              title="Covid Tracker"
              description="This app creates a database of covid users for official purposes and provides the spread of covid in different states. Built using HTML,CSS and JavaScript"
              link="https://github.com/Prakharsvnit/covidTracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
