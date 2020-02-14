import React from "react";
import ReactDOM from "react-dom";
import { ModelRenderer2 } from "./ModelRenderer2";
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
            <ModelRenderer2
              setCameraPosition={click => (this.setCameraPosition = click)}
            />
          </Col>
          <Col style={{ border: "2px solid green" }}>
            <Button
              onClick={() =>
                this.setCameraPosition([
                  0.8876483038068422,
                  0,
                  0.46052197423015095,
                  0,
                  0.143698258438904,
                  0.9500711177409453,
                  -0.27697595880526665,
                  0,
                  -0.4375286268011064,
                  0.3120334456984873,
                  0.8433290161586208,
                  0,
                  -1.5926282414090294,
                  1.135818886907916,
                  3.0697639552267915,
                  1
                ])
              }
            >
              Position 1
            </Button>
            <Button
              onClick={() =>
                this.setCameraPosition([
                  -0.9990864021979794,
                  0,
                  0.04273594439224533,
                  0,
                  0.026569622732542743,
                  0.7832427130760378,
                  0.6211480560712863,
                  0,
                  -0.033472617031648916,
                  0.6217160544921511,
                  -0.782527144254923,
                  0,
                  -0.1218421651361034,
                  2.2630805983163875,
                  -2.848441800760354,
                  1
                ])
              }
            >
              Position 2
            </Button>
            <Button
              onClick={() =>
                this.setCameraPosition([
                  -0.992904594169215,
                  0,
                  -0.11891369508036442,
                  0,
                  0.11228505451656628,
                  0.32921006243195794,
                  -0.9375568256515217,
                  0,
                  0.03914758498142157,
                  -0.944256710218967,
                  -0.32687418343542496,
                  0,
                  0.14114862496109934,
                  -3.404565985895425,
                  -1.178561629001846,
                  1
                ])
              }
            >
              Position 3
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<MainPage />, document.getElementById("root"));
