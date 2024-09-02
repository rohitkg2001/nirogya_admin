import React from "react";
// import Sidebar from "./PermanentDrawerLeft";
import Sidebar from "../../pages/Sidebar";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import { FaPlus, FaFileExport, FaFilter } from "react-icons/fa";
import sampleReviews from "./sampleReviews";

export default function Reviews() {
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
                <h3>Reviews</h3>
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

            {/* Table for Pending Products */}
            <Row>
              <Col>
                <Table striped bordered hover responsive="sm">
                  <thead>
                    <tr>
                      <th>
                        <Form.Check type="checkbox" />
                      </th>
                      <th>Product</th>
                      <th>Comments</th>
                      <th>Customer</th>
                      <th>Rating</th>
                      <th>Status</th>
                      <th>Created</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleReviews.map((review) => (
                      <tr key={review.id}>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>
                          <img
                            src={review.product}
                            alt="Product"
                            className="img-fluid rounded"
                            width="50"
                            height="50"
                          />
                        </td>
                        <td>{review.comments}</td>
                        <td>{review.customer}</td>
                        <td>{review.rating}</td>
                        <td>{review.status}</td>
                        <td>{review.created}</td>
                        <td>
                          <Button variant="primary" size="sm">
                            Approve
                          </Button>{" "}
                          <Button variant="danger" size="sm">
                            Reject
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
