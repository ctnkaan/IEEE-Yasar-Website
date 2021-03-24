import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { Container, Row, Jumbotron } from "react-bootstrap";
import LogoBall from "../components/Home/LogoBall";
import ParticlesBackground from "../components/SocietyDetail/ParticlesWithImages";
import getSocietyData from "../components/SocietyDetail/getSocietyData";

function SocietyDetail() {
  const { slug } = useParams();
  const { logo, title, admin, detail, isRedirect } = getSocietyData(slug);
  return (
    <div style={{ marginTop: "90px" }}>
      {isRedirect && <Redirect to="/" />}
      <Container style={{ height: "100vh" }}>
        <Row className="justify-content-center mt-md-5 mt-5">
          <LogoBall logo={logo} alt="society leader" />
        </Row>
        <Row className="justify-content-center mt-md-5 mt-5">
          <Jumbotron className="bg-white">
            <h2>
              {title} - {admin}
            </h2>
            <h5>{detail}</h5>
          </Jumbotron>
        </Row>
      </Container>
      <ParticlesBackground backgroundType="image" image={logo} />
    </div>
  );
}

export default SocietyDetail;
