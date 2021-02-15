import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { WOW } from "wowjs";

import Logoball from "./LogoBall";
import Logo from "../../resources/ieee_yasar.jpg";
import LogoCS from "../../resources/committees/CS.png";
import LogoRAS from "../../resources/committees/RAS.png";
import LogoPES from "../../resources/committees/PES.jpg";
import LogoWIE from "../../resources/committees/WIE.png";
import LogoAESS from "../../resources/committees/AESS.jpg";
import LogoKOK from "../../resources/committees/KOK.jpg";

function LogoTree() {
  useEffect(() => {
    const wow = new WOW({ live: false }); // disables sync requirement
    wow.init();
  }, []);

  return (
    <Container fluid>
      <Row className="justify-content-center mt-md-5">
        <Logoball logo={Logo} alt="ieee yasar" />
      </Row>
      <Row className="justify-content-center mt-md-5">
        <Col className="d-flex justify-content-center">
          <Logoball logo={LogoCS} alt="cs" />
        </Col>
        <Col className="d-flex justify-content-center">
          <Logoball logo={LogoRAS} alt="ras" />
        </Col>
      </Row>
      <Row className="justify-content-center mt-md-5">
        <Col className="d-flex justify-content-center">
          <Logoball logo={LogoPES} alt="asdasd" />
        </Col>
        <Col className="d-flex justify-content-center">
          <Logoball logo={LogoWIE} alt="asdasd" />
        </Col>
        <Col className="d-flex justify-content-center">
          <Logoball logo={LogoAESS} alt="asdasd" />
        </Col>
        <Col className="d-flex justify-content-center">
          <Logoball logo={LogoKOK} alt="asdasd" />
        </Col>
      </Row>
    </Container>
  );
}

export default LogoTree;
