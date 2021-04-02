import React from "react";
import ReactRoundedImage from "react-rounded-image";
import getAboutUsDatas from "../resources/getAboutUsDatas";
import { Container, Row, Col } from "react-bootstrap";

function AboutUs() {
  const people2d = getAboutUsDatas();
  
  return (
    <Container style={{ marginTop: "90px" }}>
      {people2d.map((people) => (
        <Row className="mt-5">
          {people.map((person) => (
            <Col
              xs={12}
              md={3}
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReactRoundedImage
                roundedColor="#343a40"
                imageWidth="220"
                imageHeight="220"
                roundedSize="13"
                hoverColor="orange"
                image={person.img}
              />
              <h4>{person.name}</h4>
              <h5 className="text-muted">{person.title}</h5>
              <Row className="mt-2" style={{ justifyContent: "center" }}>
                {person.links.linkedIn && (
                  <a
                    href="https://www.instagram.com/ieeeyasarsb/"
                    target="_blank"
                    rel="norefferer"
                  >
                    <i
                      className="fab fa-linkedin fa-lg"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </a>
                )}
                {person.links.instagram && (
                  <a
                    href="https://www.instagram.com/ieeeyasarsb/"
                    target="_blank"
                    rel="norefferer"
                  >
                    <i
                      className="fab fa-instagram fa-lg"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </a>
                )}
              </Row>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default AboutUs;
