import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "./style.css";
import goliath from "./goliathSticker.png";

// Stateless Functional Component
const WinModal = props => {
  return (
    // `...` is a spread operator
    <div>
      <Modal {...props} centered>
        <Modal.Header className="winHeader">
          <Modal.Title className="winTitle">Victory!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="winBody">
          <Container>
            <Row>
              <Col xs={4}>
                <img
                  src={goliath}
                  alt="Goliath giving Thumbs Up"
                  className="goliathSticker"
                />
              </Col>
              <Col xs={8}>
                <p className="winMessage">
                  "Great job, welcome to the Manhattan Clan. Close this box to
                  play again!" - Goliath
                </p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="winFooter">
          <Button className="winButton" onClick={props.showModalClose}>
            <i class="fas fa-times"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WinModal;
