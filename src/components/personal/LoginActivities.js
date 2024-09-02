import React from "react";
// import Sidebar from "./PermanentDrawerLeft";
import Sidebar from "../../pages/Sidebar";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import { FaPlus, FaFileExport, FaFilter } from "react-icons/fa";
import activities from "./activities";
export default function LoginActivities() {
  // Mock data for login activities

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1">
        <div className="d-inline d-md-block col-md-3 p-0">
          <Sidebar />
        </div>
        <div className="col-md-9 col-12 p-0 p-2">
          <Container fluid className="w-100 col-8">
            <Row className="align-items-center my-3">
              <Col xs={12} md={6}>
                <h3>Login Activities</h3>
              </Col>
              <Col
                xs={12}
                md={6}
                className="text-md-end text-center mt-2 mt-md-0"
              >
                <Button variant="primary" className="me-2">
                  <FaPlus className="me-1" /> Add New
                </Button>
                <Button variant="success" className="me-2">
                  <FaFileExport className="me-1" /> Export
                </Button>
                <Button variant="info">
                  <FaFilter className="me-1" /> Filter
                </Button>
              </Col>
            </Row>

            {/* Updated Table for Login Activities */}
            <Row>
              <Col>
                <Table striped bordered hover responsive="sm">
                  <thead>
                    <tr>
                      <th>
                        <Form.Check type="checkbox" />
                      </th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>User</th>
                      <th>Browser</th>
                      <th>Platform</th>
                      <th>IP</th>
                      <th>Logged at</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map((activity) => (
                      <tr key={activity.id}>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>{activity.type}</td>
                        <td>{activity.description}</td>
                        <td>{activity.user}</td>
                        <td>{activity.browser}</td>
                        <td>{activity.platform}</td>
                        <td>{activity.ip}</td>
                        <td>{activity.loggedAt}</td>
                        <td>
                          <Button
                            variant="outline-info"
                            size="sm"
                            className="me-2"
                          >
                            Edit
                          </Button>
                          <Button variant="outline-danger" size="sm">
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
