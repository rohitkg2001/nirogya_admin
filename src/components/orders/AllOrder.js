import React, { useState } from "react";
import Sidebar from "../../pages/Sidebar";
import orderData from "./OrderData";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Form,
  Pagination,
  Modal,
} from "react-bootstrap";
import { FaPlus, FaFilter } from "react-icons/fa";
import "../AllOrder.css"; // Import the CSS file

export default function AllOrder() {
  const [orders, setOrders] = useState(orderData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const currentOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, orders.length);

  const handleViewClick = (order) => {
    setSelectedOrder(order);
    setShowPaymentHistory(true);
  };

  const handleClose = () => {
    setShowPaymentHistory(false);
    setShowDeleteConfirm(false);
  };

  const handleDeleteClick = (order) => {
    setOrderToDelete(order);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = () => {
    // Perform deletion
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderToDelete.id)
    );
    setShowDeleteConfirm(false);
    setOrderToDelete(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1">
        <div className="d-none d-md-block col-md-3 p-0">
          <Sidebar />
        </div>

        <div className="col-md-9 col-12 p-0 p-2">
          <Container fluid>
            <Row className="align-items-center my-3 shadow-container">
              <Col xs={12} md={6}>
                <h3>All Orders</h3>
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

            <Table striped bordered hover responsive className="shadow-table">
              <thead>
                <tr>
                  <th>
                    <Form.Check type="checkbox" />
                  </th>
                  <th>Order Id</th>
                  <th>Customer</th>
                  <th>Regular Price</th>
                  <th>Sale Price</th>
                  <th>Order Status</th>
                  <th>Payment Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <Form.Check type="checkbox" />
                    </td>
                    <td>{order.orderNumber}</td>
                    <td>{order.customer}</td>
                    <td>{order.regularPrice}</td>
                    <td>{order.salePrice}</td>
                    <td>{order.orderStatus}</td>
                    <td>{order.paymentStatus}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleViewClick(order)}
                      >
                        View
                      </Button>{" "}
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(order)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Row className="align-items-center">
              <Col md={6}>
                <p className="mb-0">
                  Showing {startIndex} to {endIndex} of {orders.length} entries
                </p>
              </Col>
              <Col md={6}>
                <Pagination className="justify-content-end mb-0 shadow-pagination">
                  <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Pagination.Prev>
                  {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Pagination.Next>
                </Pagination>
              </Col>
            </Row>
          </Container>

          {/* Modal for Order Details */}
          <Modal show={showPaymentHistory} onHide={handleClose} size="lg">
            <Modal.Header closeButton className="shadow-modal-header">
              <Modal.Title>Order Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedOrder && (
                <Container fluid>
                  <Row>
                    <Col xs={6}>
                      <p>
                        <strong>Order Id:</strong>
                      </p>
                      <p>
                        <strong>Customer:</strong>
                      </p>
                      <p>
                        <strong>Regular Price:</strong>
                      </p>
                      <p>
                        <strong>Sale Price:</strong>
                      </p>
                      <p>
                        <strong>Order Status:</strong>
                      </p>
                      <p>
                        <strong>Payment Status:</strong>
                      </p>
                    </Col>
                    <Col xs={6}>
                      <p>{selectedOrder.orderNumber}</p>
                      <p>{selectedOrder.customer}</p>
                      <p>{selectedOrder.regularPrice}</p>
                      <p>{selectedOrder.salePrice}</p>
                      <p>{selectedOrder.orderStatus}</p>
                      <p>{selectedOrder.paymentStatus}</p>
                    </Col>
                  </Row>
                </Container>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Confirmation Modal for Deletion */}
          <Modal show={showDeleteConfirm} onHide={handleClose} centered>
            <Modal.Header closeButton className="shadow-modal-header">
              <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to delete this order?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                No
              </Button>
              <Button variant="danger" onClick={handleDeleteConfirm}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
