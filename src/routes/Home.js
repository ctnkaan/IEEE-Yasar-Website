import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import classes from "../styles/Home.module.css";
import CSLogo from "../resources/imgs/ieeelogo.png";
function Home() {
  return (
    <div className={classes.orange}>
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
          <h4 className="mt-5">Geforce Now Türkiye'ye Geliyor</h4>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
