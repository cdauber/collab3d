import React from "react";
import ReactDOM from "react-dom";
import ModelRenderer from "./ModelRenderer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container, Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Header from "./Header/Header";

class MainPage extends React.Component {
  render() {
    return (
      <Container style={{ border: "2px solid black" }}>
        <Row style={{ border: "2px solid red" }}>
          <Header />
        </Row>
        <Row>
          <Col style={{ border: "2px solid green" }}> </Col>
          <Col xs={9} style={{ border: "2px solid blue" }}>
            <ModelRenderer
              setCameraPosition={click => (this.setCameraPosition = click)}
            />
          </Col>
          <Col style={{ border: "2px solid green" }}>
            <Button onClick={() => this.setCameraPosition([0.5, 2, 3])}>
              Position 1
            </Button>
            <Button onClick={() => this.setCameraPosition([0.2, 3.5, -0.8])}>
              Position 2
            </Button>
            <Button onClick={() => this.setCameraPosition([3, 2, 0.1])}>
              Position 3
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<MainPage />, document.getElementById("root"));
