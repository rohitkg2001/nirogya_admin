import React from "react";
import Sidebar from "../../pages/Sidebar";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

export default function Categories() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1">
        {/* Sidebar section */}
        <div className="d-none d-md-block col-md-3 p-0">
          <Sidebar />
        </div>

        {/* Main content section */}
        <div className="col-md-9 col-12 p-0 p-2">
          <Container fluid>
            <Row className="align-items-center my-3">
              <Col xs={12} md={6}>
                <h3>CATEGORIES INFORMATION</h3>
              </Col>
            </Row>

            {/* Card for the Form */}
            <Row>
              <Col xs={12} md={8} lg={6} className="mx-auto">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>Add New Category</Card.Title>
                    <Form>
                      <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Category Name"
                          aria-label="Category Name"
                        />
                      </Form.Group>
                      <Form.Group controlId="formSlug" className="mt-3">
                        <Form.Label>Slug</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Category Slug"
                          aria-label="Category Slug"
                        />
                      </Form.Group>
                      <Form.Group controlId="formStatus" className="mt-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select aria-label="Status">
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group controlId="formSearchable" className="mt-3">
                        <Form.Label>Is Searchable</Form.Label>
                        <Form.Select aria-label="Is Searchable">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group controlId="formFeatured" className="mt-3">
                        <Form.Label>Is Featured</Form.Label>
                        <Form.Select aria-label="Is Featured">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group controlId="formCommission" className="mt-3">
                        <Form.Label>Commission (%)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Commission Percentage"
                          aria-label="Commission"
                        />
                      </Form.Group>
                      <Form.Group controlId="formImage" className="mt-3">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>
                      <Button
                        variant="secondary"
                        type="submit"
                        className="mt-4"
                      >
                        Save
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
