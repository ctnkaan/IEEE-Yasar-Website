import React from "react";
import { Container } from "react-bootstrap";
import CommitteesSection from "../components/Home/CommitteesSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import ContactSection from "../components/Home/ContactSection";
//import Body from "../components/Home/Body";
import ParticlesBackground from "../components/Home/ParticlesBackground";
import Header from "../components/Home/Header";

function Home() {
  return (
    <Container fluid>
      <Header/>
      <ParticlesBackground />
      <FeaturesSection />
      <CommitteesSection />
      <ContactSection />
    </Container>
  );
}

export default Home;
