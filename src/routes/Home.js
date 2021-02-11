import React from "react";
import { Container } from "react-bootstrap";
import CommitteesSection from "../components/Home/CommitteesSection";
function Home() {
  return (
    <Container fluid>
      <div style={{ height: "100vh" }}></div>

      <CommitteesSection />
    </Container>
  );
}

export default Home;
