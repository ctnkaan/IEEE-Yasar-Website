import React from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import getEventDatas from "../resources/getEventDatas";
function Events() {
  const events2d = getEventDatas(); //returns 2d array
  return (
    <Container style={{ marginTop: "90px" }}>
      {events2d.map((events) => (
        <CardDeck className="mt-5">
          {events.map((event) => (
            <Card>
              <Card.Img variant="top" src={event.image} />
              <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{event.date}</small>
              </Card.Footer>
            </Card>
          ))}
        </CardDeck>
      ))}
    </Container>
  );
}

export default Events;
