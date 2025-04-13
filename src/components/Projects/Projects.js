import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Portfolio"
              description="Welcome to my portfolio! A showcase of creativity, expertise, and dedication, this is where I bring ideas to life through innovative designs, robust code, and captivating projects. Here, you’ll explore my journey, discover the skills I’ve honed, and see the work that fuels my passion for technology and problem-solving. From dynamic web applications to unique personal projects, my portfolio reflects a commitment to growth and excellence. Dive in and let’s build something extraordinary together!"
              ghLink="https://github.com/abhigyan7731/PORTFOLIO-WEBSITE-WITH-ADVANCED-ANIMATIONS"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Online learning platform"
              description="Online learning allows students to access courses and educational materials through the internet. It offers flexibility, enabling learners to study at their own pace and from any location. With interactive tools like videos and virtual classrooms, online learning makes education more accessible, cost-effective, and adaptable for diverse needs."
              ghLink="https://github.com/abhigyan7731/ONLINE-LEARNING-PLATFORM"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Progressive web application"
              description="A Progressive Web Application (PWA) is a web app that provides an app-like experience. It combines web technologies with features like offline access, push notifications, and device installation. PWAs are responsive, fast, reliable, and cost-effective, making them a powerful tool for enhancing user engagement."
              ghLink="https://github.com/abhigyan7731/-PROGRESSIVE-WEB-APPLICATION-PWA-"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Collaborative Document editior"
              description="A dynamic platform that allows multiple users to edit, share, and collaborate on documents in real time. With features like synchronization, conflict resolution, and user presence, it ensures seamless teamwork and productivity. Perfect for projects, brainstorming, or group editing tasks!"
              ghLink="https://github.com/abhigyan7731/-REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
