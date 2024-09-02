import React from "react";
import Sidebar from "../../pages/Sidebar";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import { FaPlus, FaFilter } from "react-icons/fa";


import products from "./Products";

export default function AllProduct() {
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
                <h3>All Products</h3>
              </Col>
              <Col
                xs={12}
                md={6}
                className="text-md-end text-center mt-2 mt-md-0"
              >
                <Button variant="primary" className="me-2">
                  <FaPlus className="me-1" /> Add New
                </Button>

                <Button variant="info">
                  <FaFilter className="me-1" /> Filter
                </Button>
              </Col>
            </Row>

            {/* Updated Table for Products List */}
            <Row>
              <Col>
                <Table striped bordered hover responsive="sm">
                  <thead>
                    <tr>
                      <th>
                        <Form.Check type="checkbox" />
                      </th>
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Category/Brand</th>
                      <th>Vendor</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>
                          <img
                            src={product.picture}
                            alt="Product"
                            className="img-fluid rounded-circle"
                            width="50"
                            height="50"
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.category}</td>
                        <td>{product.vendor}</td>
                        <td>{product.status}</td>
                        <td>
                          <Button
                            variant="outline-primary"
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
