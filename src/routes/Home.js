import React from "react";
import { Container } from "react-bootstrap";
import CommitteesSection from "../components/Home/CommitteesSection";
import FeaturesSection from "../components/Home/FeaturesSection";

function Home() {
  return (
    <Container fluid>
      <div style={{ height: "100vh" }}></div>
      <FeaturesSection />
      <CommitteesSection />
    </Container>
  );
}

export default Home;
