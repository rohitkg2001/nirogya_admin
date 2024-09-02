const refundData = [
  {
    id: 1,
    orderId: "ORD12345",
    shipping: "Express",
    refundReason: "Damaged item",
    quantity: 2,
    amount: "₹50.00",
    status: "Pending",
  },
  {
    id: 2,
    orderId: "ORD12346",
    shipping: "Standard",
    refundReason: "Wrong item",
    quantity: 1,
    amount: "₹25.00",
    status: "Approved",
  },

  // Add more orders as needed...
];
export default refundData;
