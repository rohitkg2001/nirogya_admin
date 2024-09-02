import React, { useState } from "react";
import Sidebar from "../../pages/Sidebar";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { FaCheck, FaTimes, FaStar } from "react-icons/fa";

export default function AddProduct() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "", // Added description field in state
  });

  // List of categories for the form
  const categories = ["Electronics", "Clothing", "Books", "Furniture"];

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
              <Col
                xs={12}
                md={6}
                className="text-md-end text-center mt-2 mt-md-0"
              ></Col>
            </Row>

            <Row>
              <Col xs={12} md={8} className="mx-auto">
                <h2 className="mt-5">Product Form</h2>
                <Form onSubmit={handleSubmit} className="mt-4">
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter product name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <br />
                  <Form.Group controlId="formCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="">Select a category</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <br />
                  <Form.Group controlId="formDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter product description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <br />
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                </Form>
              </Col>

              {/* Right-side card */}
              <Col xs={12} md={3}>
                <Card className="p-3 shadow-sm">
                  <Card.Header>
                    <h5>Product Status</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Status:</span>
                      <FaCheck color="green" />
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Publish:</span>
                      <FaTimes color="red" />
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Featured Product:</span>
                      <FaStar color="gold" />
                    </div>
                    <br />
                    <Button variant="secondary" disabled>
                      Save Product
                    </Button>
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
