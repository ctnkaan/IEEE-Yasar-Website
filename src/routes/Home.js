import React from "react";
import { Container } from "react-bootstrap";
import CommitteesSection from "../components/Home/CommitteesSection";
import NavbarComp from "../components/Static/NavbarComp";

function Home() {
  return (
    <Container fluid>
      <NavbarComp />
      <div style={{ height: "100vh" }}></div>

      <CommitteesSection />
    </Container>
  );
}

export default Home;
