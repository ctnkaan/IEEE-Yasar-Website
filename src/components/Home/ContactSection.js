import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "./Contact";
import JPG from "../../resources/contact.jpg";
function ContactSection() {
  return (
    <section>
      <Container fluid>
        <Row
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backGround: "url(" + JPG + ")",
          }}
        >
          <Contact />
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;
