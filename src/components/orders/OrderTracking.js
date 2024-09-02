// // import React, { useState } from "react";
// // import Sidebar from "../../pages/Sidebar";
// // import orderData from "./OrderData";
// // import {
// //   Container,
// //   Row,
// //   Col,
// //   Button,
// //   Table,
// //   Form,
// //   Pagination,
// // } from "react-bootstrap";
// // import { FaPlus, FaFilter } from "react-icons/fa";

// // export default function Refund() {
// //   // State for orders
// //   const [orders] = useState(orderData);

// //   // Pagination states
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 6;
// //   const totalPages = Math.ceil(orders.length / itemsPerPage); // Total pages calculation

// //   // Get orders for the current page
// //   const currentOrders = orders.slice(
// //     (currentPage - 1) * itemsPerPage,
// //     currentPage * itemsPerPage
// //   );

// //   // Function to handle page change
// //   const handlePageChange = (pageNumber) => {
// //     setCurrentPage(pageNumber);
// //   };

// //   // Calculate the start and end indices for the current set of entries
// //   const startIndex = (currentPage - 1) * itemsPerPage + 1;
// //   const endIndex = Math.min(currentPage * itemsPerPage, orders.length);

// //   return (
// //     <div className="d-flex flex-column min-vh-100">
// //       <div className="d-flex flex-grow-1">
// //         {/* Sidebar section */}
// //         <div className="d-none d-md-block col-md-3 p-0">
// //           <Sidebar />
// //         </div>

// //         {/* Main content section */}
// //         <div className="col-md-9 col-12 p-0 p-2">
// //           <Container fluid>
// //             <Row className="align-items-center my-3">
// //               <Col xs={12} md={6}>
// //                 <h3>All Orders</h3>
// //               </Col>
// //               <Col
// //                 xs={12}
// //                 md={6}
// //                 className="text-md-end text-center mt-2 mt-md-0"
// //               >
// //                 <Button variant="primary" className="me-2">
// //                   <FaPlus className="me-1" /> Add New
// //                 </Button>
// //                 <Button variant="info">
// //                   <FaFilter className="me-1" /> Filter
// //                 </Button>
// //               </Col>
// //             </Row>

// //             {/* Orders Table */}
// //             <Table striped bordered hover responsive>
// //               <thead>
// //                 <tr>
// //                   <th>
// //                     <Form.Check type="checkbox" />
// //                   </th>
// //                   <th>Order</th>
// //                   <th>Customer</th>
// //                   <th>Vendors</th>
// //                   <th>Total</th>
// //                   <th>Order Status</th>
// //                   <th>Payment Status</th>
// //                   <th>Created</th>
// //                   <th>Tracking</th>
// //                   <th>Action</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {currentOrders.map((order) => (
// //                   <tr key={order.id}>
// //                     <td>
// //                       <Form.Check type="checkbox" />
// //                     </td>
// //                     <td>{order.orderNumber}</td>
// //                     <td>{order.customer}</td>
// //                     <td>{order.vendor}</td>
// //                     <td>{order.total}</td>
// //                     <td>{order.orderStatus}</td>
// //                     <td>{order.paymentStatus}</td>
// //                     <td>{order.created}</td>
// //                     <td>{order.tracking}</td>
// //                     <td>
// //                       <Button variant="warning" size="sm">
// //                         Edit
// //                       </Button>{" "}
// //                       <Button variant="danger" size="sm">
// //                         Delete
// //                       </Button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </Table>

// //             {/* Pagination and Entries Info */}
// //             <Row className="align-items-center">
// //               <Col md={6}>
// //                 <p className="mb-0">
// //                   Showing {startIndex} to {endIndex} of {orders.length} entries
// //                 </p>
// //               </Col>
// //               <Col md={6}>
// //                 <Pagination className="justify-content-end mb-0">
// //                   <Pagination.Prev
// //                     onClick={() => handlePageChange(currentPage - 1)}
// //                     disabled={currentPage === 1}
// //                   />
// //                   {[...Array(totalPages)].map((_, index) => (
// //                     <Pagination.Item
// //                       key={index}
// //                       active={index + 1 === currentPage}
// //                       onClick={() => handlePageChange(index + 1)}
// //                     >
// //                       {index + 1}
// //                     </Pagination.Item>
// //                   ))}
// //                   <Pagination.Next
// //                     onClick={() => handlePageChange(currentPage + 1)}
// //                     disabled={currentPage === totalPages}
// //                   />
// //                 </Pagination>
// //               </Col>
// //             </Row>
// //           </Container>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Table,
//   Form,
//   Button,
//   ProgressBar,
// } from "react-bootstrap";

// const OrderTracking = () => {
//   // Sample order data for tracking
//   const orderData = {
//     orderNumber: "123456789",
//     trackingStatus: "In Transit",
//     estimatedDelivery: "2024-08-28",
//     progress: 60, // Progress as a percentage
//     trackingSteps: [
//       { date: "2024-08-20", location: "Warehouse", status: "Order Processed" },
//       { date: "2024-08-21", location: "Shipping Facility", status: "Shipped" },
//       { date: "2024-08-23", location: "Transit Hub", status: "In Transit" },
//       // Add more steps as necessary
//     ],
//   };

//   return (
//     // <Container fluid className="my-4">
//     //   <Row>
//     //     <Col xs={12} md={6}>
//     //       <h3>Order Tracking</h3>
//     //       <p>Order Number: {orderData.orderNumber}</p>
//     //       <p>Status: {orderData.trackingStatus}</p>
//     //       <p>Estimated Delivery: {orderData.estimatedDelivery}</p>
//     //     </Col>
//     //   </Row>

//     //   <Row className="my-4">
//     //     <Col xs={12}>
//     //       <h5>Tracking Progress</h5>
//     //       <ProgressBar
//     //         now={orderData.progress}
//     //         label={`${orderData.progress}%`}
//     //       />
//     //     </Col>
//     //   </Row>

//     //   <Row>
//     //     <Col xs={12}>
//     //       <h5>Tracking Details</h5>
//     //       <Table striped bordered hover responsive>
//     //         <thead>
//     //           <tr>
//     //             <th>Date</th>
//     //             <th>Location</th>
//     //             <th>Status</th>
//     //           </tr>
//     //         </thead>
//     //         <tbody>
//     //           {orderData.trackingSteps.map((step, index) => (
//     //             <tr key={index}>
//     //               <td>{step.date}</td>
//     //               <td>{step.location}</td>
//     //               <td>{step.status}</td>
//     //             </tr>
//     //           ))}
//     //         </tbody>
//     //       </Table>
//     //     </Col>
//     //   </Row>
//     // </Container>
//   );
// };

// export default OrderTracking;
import React, { useState } from "react";
import Sidebar from "../../pages/Sidebar";
import orderData from "./OrderData";
import {
  Container,
  Row,
  Col,
  Table,
  Form,
  Pagination,
  Button,
} from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

export default function OrderTracking() {
  // State for orders
  const [orders] = useState(orderData);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(orders.length / itemsPerPage); // Total pages calculation

  // Get orders for the current page
  const currentOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the start and end indices for the current set of entries
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, orders.length);

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
              {/* <Col xs={12} md={6}>
                <Button variant="light" className="me-2">
                  <FaArrowLeft className="me-1" /> Back
                </Button>
              </Col> */}
            </Row>

            <Row className="align-items-center my-3">
              <Col xs={12}>
                <h3>Order Tracking</h3>
              </Col>
            </Row>

            {/* Orders Table */}
            {/* <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Order Number</th>
                  <th>Status</th>
                  <th>Customer</th>
                  <th>Vendor</th>
                  <th>Estimated Delivery</th>
                  <th>Tracking Number</th>
                  <th>Carrier</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.orderNumber}</td>
                    <td>{order.status}</td>
                    <td>{order.customer}</td>
                    <td>{order.vendor}</td>
                    <td>{order.estimatedDelivery}</td>
                    <td>{order.trackingNumber}</td>
                    <td>{order.carrier}</td>
                  </tr>
                ))}
              </tbody>
            </Table> */}

            {/* Pagination and Entries Info */}
            {/* <Row className="align-items-center">
              <Col md={6}>
                <p className="mb-0">
                  Showing {startIndex} to {endIndex} of {orders.length} entries
                </p>
              </Col>
              <Col md={6}>
                <Pagination className="justify-content-end mb-0">
                  <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                      key={index}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </Col>
            </Row> */}
          </Container>
        </div>
      </div>
    </div>
  );
}
