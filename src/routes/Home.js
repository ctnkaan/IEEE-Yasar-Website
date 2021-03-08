import React from "react";
import { Container } from "react-bootstrap";
import CommitteesSection from "../components/Home/CommitteesSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import Body from "../components/Home/Body";

function Home() {
  return (
    <Container fluid>
        <Body/>
      <div style={{ height: "100vh" }}></div>
      <FeaturesSection />
      <CommitteesSection />
    </Container>
  );
}

export default Home;
