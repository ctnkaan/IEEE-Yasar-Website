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
    <Container fluid style={{ padding: "0px", margin: "0px" }}>
      <Header />
      <ParticlesBackground />
      <FeaturesSection />
      <CommitteesSection />
      <ContactSection />
      <iframe
        title="googleMaps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928.9103967159734!2d27.20248289321087!3d38.45371650099765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97d34aa80f16b%3A0x6c55ee5a8ff62826!2zWWHFn2FyIMOcbml2ZXJzaXRlc2k!5e0!3m2!1sen!2str!4v1617381514884!5m2!1sen!2str"
        width="600"
        height="450"
        style={{
          border: 0,
          width: "100%",
        }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </Container>
  );
}

export default Home;
