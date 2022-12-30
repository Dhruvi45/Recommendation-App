import { useState } from "react";
import "./styles.css";
import { buttons, north, south, west, east } from "./data";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const [isNorth, setIsNorth] = useState(true);
  const [isSouth, setIsSouth] = useState(false);
  const [isEast, setIsEast] = useState(false);
  const [isWest, setIsWest] = useState(false);
  const fielter = (fielterKey) => {
    if (fielterKey === "ni") {
      setIsNorth(true);
      setIsSouth(false);
      setIsEast(false);
      setIsWest(false);
    } else if (fielterKey === "si") {
      setIsNorth(false);
      setIsSouth(true);
      setIsEast(false);
      setIsWest(false);
    } else if (fielterKey === "wi") {
      setIsNorth(false);
      setIsSouth(false);
      setIsEast(false);
      setIsWest(true);
    } else if (fielterKey === "ei") {
      setIsNorth(false);
      setIsSouth(false);
      setIsEast(true);
      setIsWest(false);
    }
  };
  return (
    <div className="App">
      <h1>Travel Recommendation App </h1>
      <p>Hear some best palse to vist in India </p>
      <br />
      {buttons.map((key) => {
        return (
          <Button
            className="me-3"
            onClick={() => {
              fielter(key.key);
            }}
          >
            {key.value}
          </Button>
        );
      })}
      <br />
      <hr />
      <br />
      {isNorth &&
        north.map((key) => {
          return (
            <Card className="mb-4">
              <Card.Header>{key.place}</Card.Header>
              <Card.Body>
                <p>
                  <b>Description</b>: {key.discription}
                </p>
                <p>
                  <b>Rating</b>: {key.rating}
                </p>
              </Card.Body>
            </Card>
          );
        })}
      {isSouth &&
        south.map((key) => {
          return (
            <Card className="mb-4">
              <Card.Header>{key.place}</Card.Header>
              <Card.Body>
                <p>
                  <b>Description</b>: {key.discription}
                </p>
                <p>
                  <b>Rating</b>: {key.rating}
                </p>
              </Card.Body>
            </Card>
          );
        })}
      {isWest &&
        west.map((key) => {
          return (
            <Card className="mb-4">
              <Card.Header>{key.place}</Card.Header>
              <Card.Body>
                <p>
                  <b>Description</b>: {key.discription}
                </p>
                <p>
                  <b>Rating</b>: {key.rating}
                </p>
              </Card.Body>
            </Card>
          );
        })}
      {isEast &&
        east.map((key) => {
          return (
            <Card className="mb-4">
              <Card.Header>{key.place}</Card.Header>
              <Card.Body>
                <p>
                  <b>Description</b>: {key.discription}
                </p>
                <p>
                  <b>Rating</b>: {key.rating}
                </p>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}
