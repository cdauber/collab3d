import React from "react";
import ReactDOM from "react-dom";
import Cube from "./Cube";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container, Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

class MainPage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Button onClick={() => this.setCameraPosition([400, 100, 0])}>
              Position 1
            </Button>
            <Button onClick={() => this.setCameraPosition([400, 300, 0])}>
              Position 2
            </Button>
            <Button onClick={() => this.setCameraPosition([400, 0, 0])}>
              Position 3
            </Button>
          </Col>
          <Col md={10}>
            <Cube
              setCameraPosition={click => (this.setCameraPosition = click)}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<MainPage />, document.getElementById("root"));
