import { React, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { WOW } from "wowjs";

import LogoBall from "./LogoBall";
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
    <hr></hr>
      <Row className="justify-content-center mt-md-5 mt-5">
        <LogoBall logo={Logo} alt="ieee yasar" animationType="fadeInDown" />
      </Row>
      <Row className="justify-content-center mt-md-5">
        <Col className="d-flex justify-content-center mt-5">
          <LogoBall logo={LogoCS} alt="cs" animationType="rotateInDownLeft" />
        </Col>
        <Col className="d-flex justify-content-center mt-5">
          <LogoBall
            logo={LogoRAS}
            alt="ras"
            animationType="rotateInDownRight"
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-md-5">
        <Col className="d-flex justify-content-center mt-5">
          <LogoBall logo={LogoPES} alt="pes" animationType="rotateInUpLeft" />
        </Col>
        <Col className="d-flex justify-content-center mt-5">
          <LogoBall logo={LogoWIE} alt="wie" animationType="slideInUp" />
        </Col>
        <Col className="d-flex justify-content-center mt-5">
          <LogoBall logo={LogoAESS} alt="aess" animationType="slideInUp" />
        </Col>
        <Col className="d-flex justify-content-center mt-5">
          <LogoBall logo={LogoKOK} alt="kok" animationType="rotateInUpRight" />
        </Col>
      </Row>

    <hr></hr>
    </Container>
  );
}

export default LogoTree;
