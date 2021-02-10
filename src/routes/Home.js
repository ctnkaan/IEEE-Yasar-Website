import { React, useEffect } from "react";
import { Container, Row, Image } from "react-bootstrap";
import { WOW } from "wowjs";
import classes from "../styles/Home.module.css";
import CSLogo from "../resources/imgs/ieeelogo.png";
function Home() {
  useEffect(() => {
    const wow = new WOW({ live: false }); // disables sync requirement
    wow.init();
  }, []);
  //https://animate.style/#utilities when using add selected anim as animate__******
  return (
    <div className={classes.orange}>
      <div style={{ height: "100vh" }}></div>
      <Container fluid="md">
        <Row
          xs="12"
          style={{ height: "100vh" }}
          className="justify-content-center align-items-center flex-column"
        >
          <Image
            fluid
            alt="ieee cs logo"
            className={classes.logoBall}
            src={CSLogo}
          />
          <h4 className="mt-5 wow animate__animated animate__fadeInLeft">
            Geforce Now Türkiye'ye Geliyor
          </h4>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
