import React, { useState } from "react";
import Sidebar from "../../pages/Sidebar";
import refundData from "./RefundData";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Pagination,
  Modal,
} from "react-bootstrap";
import { FaFileExport, FaFilter } from "react-icons/fa";

export default function Refund() {
  // State for refunds
  const [refunds, setRefunds] = useState(refundData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRefund, setSelectedRefund] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [refundToDelete, setRefundToDelete] = useState(null);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(refunds.length / itemsPerPage);

  const currentRefunds = refunds.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, refunds.length);

  const handleViewClick = (refund) => {
    setSelectedRefund(refund);
    setShowDetails(true);
  };

  const handleCloseDetails = () => setShowDetails(false);

  const handleDeleteClick = (refund) => {
    setRefundToDelete(refund);
    setShowDeleteConfirm(true);
  };

  const handleCloseDeleteConfirm = () => {
    setShowDeleteConfirm(false);
    setRefundToDelete(null);
  };

  const handleConfirmDelete = () => {
    // Remove refund from state
    setRefunds(refunds.filter((refund) => refund.id !== refundToDelete.id));
    setShowDeleteConfirm(false);
    setRefundToDelete(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1">
        <div className="d-none d-md-block col-md-3 p-0">
          <Sidebar />
        </div>

        <div className="col-md-9 col-12 p-0 p-2">
          <Container fluid>
            <Row className="align-items-center my-3">
              <Col xs={12} md={6}>
                <h3>Refunds</h3>
              </Col>
              <Col
                xs={12}
                md={6}
                className="text-md-end text-center mt-2 mt-md-0"
              >
                <Button variant="success" className="me-2">
                  <FaFileExport className="me-1" /> Export
                </Button>
                <Button variant="info">
                  <FaFilter className="me-1" /> Filter
                </Button>
              </Col>
            </Row>

            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Shipping</th>
                  <th>Refund Reason</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentRefunds.map((refund) => (
                  <tr key={refund.id}>
                    <td>{refund.orderId}</td>
                    <td>{refund.shipping}</td>
                    <td>{refund.refundReason}</td>
                    <td>{refund.quantity}</td>
                    <td>{refund.amount}</td>
                    <td>{refund.status}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleViewClick(refund)}
                      >
                        View
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(refund)}
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
                  Showing {startIndex} to {endIndex} of {refunds.length} entries
                </p>
              </Col>
              <Col md={6}>
                <Pagination className="justify-content-end mb-0">
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

          {/* Modal for Refund Details */}
          <Modal
            show={showDetails}
            onHide={handleCloseDetails}
            size="lg"
            centered
            className="modal-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Refund Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {selectedRefund && (
                <Container fluid>
                  <Row>
                    <Col xs={6}>
                      <p>
                        <strong>Order ID:</strong>
                      </p>
                      <p>
                        <strong>Shipping:</strong>
                      </p>
                      <p>
                        <strong>Refund Reason:</strong>
                      </p>
                      <p>
                        <strong>Quantity:</strong>
                      </p>
                      <p>
                        <strong>Amount:</strong>
                      </p>
                      <p>
                        <strong>Status:</strong>
                      </p>
                    </Col>
                    <Col xs={6}>
                      <p>{selectedRefund.orderId}</p>
                      <p>{selectedRefund.shipping}</p>
                      <p>{selectedRefund.refundReason}</p>
                      <p>{selectedRefund.quantity}</p>
                      <p>{selectedRefund.amount}</p>
                      <p>{selectedRefund.status}</p>
                    </Col>
                  </Row>
                </Container>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDetails}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal for Delete Confirmation */}
          <Modal
            show={showDeleteConfirm}
            onHide={handleCloseDeleteConfirm}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this refund?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDeleteConfirm}>
                No
              </Button>
              <Button variant="danger" onClick={handleConfirmDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
