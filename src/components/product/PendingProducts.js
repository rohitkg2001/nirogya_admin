import React from "react";
// import Sidebar from "./PermanentDrawerLeft";
import Sidebar from "../../pages/Sidebar";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import { FaPlus, FaFileExport, FaFilter } from "react-icons/fa";
import sampleProducts from "./sampleProducts";

export default function PendingProducts() {
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
                <h3>Pending Products</h3>
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
                      <th>Image</th>
                      <th>Name</th>
                      <th>Stock</th>
                      <th>Brand</th>
                      <th>Vendor</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleProducts.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <Form.Check type="checkbox" />
                        </td>
                        <td>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid rounded"
                            width="50"
                            height="50"
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.stock}</td>
                        <td>{product.brand}</td>
                        <td>{product.vendor}</td>
                        <td>{product.status}</td>
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
