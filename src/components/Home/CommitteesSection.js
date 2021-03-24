import { React } from "react";
import { Container, Row } from "react-bootstrap";
import LogoTree from "./LogoTree";
function CommitteesSection() {
  //https://animate.style/#utilities when using add selected anim as animate__******
  return (
    <section>
      <Container fluid>
        <Row>
          <LogoTree />
        </Row>
      </Container>
    </section>
  );
}

export default CommitteesSection;
