import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "./Contact";
import JPG from "../../resources/contact.jpg";

function ContactSection() {
  return (
    <section id="contact-us" style={{ marginTop: "10%" }}>
      <Container fluid>
        <Row
          style={{
            height: "100vh",
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: "url(" + JPG + ")",
            backgroundSize: "cover",
          }}
        >
          <Contact />
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
