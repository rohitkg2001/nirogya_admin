import React, { useState } from "react";
import Sidebar from "../../pages/Sidebar";
import Orders from "./Orders";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Pagination,
} from "react-bootstrap";
import { FaPlus, FaFilter } from "react-icons/fa";

export default function Transactions() {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 25; // Updated to show 25 entries per page

  // Calculate the indexes for pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = Orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalOrders = Orders.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the start and end indices for the current set of entries
  const startIndex = indexOfFirstOrder + 1;
  const endIndex = Math.min(indexOfLastOrder, totalOrders);

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
                <h3>Transactions</h3>
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

            {/* Table for Orders List */}
            <Table responsive bordered hover className="mt-3">
              <thead className="bg-light">
                <tr>
                  <th>Reference</th>
                  <th>Payer</th>
                  <th>Vendor</th>
                  <th>Currency</th>
                  <th>Method</th>
                  <th>Amount</th>
                  <th>Discount</th>
                  <th>Total</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order, index) => (
                  <tr key={index}>
                    <td>{order.reference}</td>
                    <td>{order.payer}</td>
                    <td>{order.vendor}</td>
                    <td>{order.currency}</td>
                    <td>{order.method}</td>
                    <td>{order.amount}</td>
                    <td>{order.discount}</td>
                    <td>{order.total}</td>
                    <td>{order.type}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Pagination and Entries Info */}
            <Row className="align-items-center">
              <Col md={6}>
                <p className="mb-0">
                  Showing {startIndex} to {endIndex} of {totalOrders} entries
                </p>
              </Col>
              <Col md={6}>
                <Pagination className="justify-content-end mb-0">
                  <Pagination.Prev
                    onClick={() =>
                      paginate(currentPage > 1 ? currentPage - 1 : 1)
                    }
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Pagination.Prev>
                  {[...Array(Math.ceil(totalOrders / ordersPerPage))].map(
                    (_, index) => (
                      <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => paginate(index + 1)}
                      >
                        {index + 1}
                      </Pagination.Item>
                    )
                  )}
                  <Pagination.Next
                    onClick={() =>
                      paginate(
                        currentPage < Math.ceil(totalOrders / ordersPerPage)
                          ? currentPage + 1
                          : currentPage
                      )
                    }
                    disabled={
                      currentPage === Math.ceil(totalOrders / ordersPerPage)
                    }
                  >
                    Next
                  </Pagination.Next>
                </Pagination>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
