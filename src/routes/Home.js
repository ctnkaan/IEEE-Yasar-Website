import React from "react";
import { Container } from "react-bootstrap";
import CommitteesSection from "../components/Home/CommitteesSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import ContactSection from "../components/Home/ContactSection";
import Body from "../components/Home/Body";

function Home() {
  return (
    <Container fluid>
      <Body />
      <FeaturesSection />
      <CommitteesSection />
      <ContactSection />
    </Container>
  );
}

export default Home;
