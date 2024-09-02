import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidebar from "../pages/Sidebar";
import cardData from "./CardData";

export default function Dashboard() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1">
        {/* Sidebar section */}
        <div className="d-none d-md-block col-md-3 p-0">
          <Sidebar />
        </div>

        {/* Main content section */}
        <div className="col-md-9 col-12 p-2">
          <Container fluid>
            <h2 className="mb-4">Dashboard</h2>
            <Row>
              {cardData.map((card) => (
                <Col xs={12} md={6} className="mb-4" key={card.id}>
                  <Card className={`dashboard-card ${card.bgColor} shadow`}>
                    <Card.Body className="d-flex align-items-center">
                      {card.icon}
                      <div className="ms-3">
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text className="h4 mb-0">{card.value}</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
