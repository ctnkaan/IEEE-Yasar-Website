import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import lax from "lax.js";
import Logo from "../resources/ieee_yasar.jpg";
import LogoBall from "../components/Home/LogoBall";

function SocietyDetail() {
  useEffect(() => {
    lax.init();

    // Add a driver that we use to control our animations
    lax.addDriver("scrollY", () => {
      return window.scrollY;
    });
    // Add animation bindings to elements
    lax.addElements("#laxified", {
      scrollY: {
        rotate: [
          [0, 1e9],
          [0, 1e9],
        ],
      },
    });
  }, []);
  return (
    <Container fluid>
      <Row id="laxified" className="justify-content-center mt-md-5 mt-5">
        <LogoBall id="laxified" logo={Logo} alt="society leader" />
      </Row>
      <div className="" style={{ height: "100vh" }}></div>
    </Container>
  );
}

export default SocietyDetail;
