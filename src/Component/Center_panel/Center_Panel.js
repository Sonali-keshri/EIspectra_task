import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Center_Panel = () => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://c1.staticflickr.com/3/2763/4179904007_464895d771_z.jpg?zz=1" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Center_Panel;
