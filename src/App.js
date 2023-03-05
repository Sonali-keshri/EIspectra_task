import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftNav from "./Component/Left_Nav/Left_Nav";
import CenterPanel from "./Component/Center_panel/Center_Panel";
import RightNav from "./Component/Right_panel/Right_panel";

function App() {
  return (
    <Container fluid>
      <hr />
      <h3>Cat Clicker App</h3>
      <hr />
      <Row>
        <Col >
          <LeftNav />
        </Col>
        <Col>
          <CenterPanel />
        </Col>
        <Col >
          <RightNav />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
