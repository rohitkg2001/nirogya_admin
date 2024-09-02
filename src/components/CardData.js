import React from "react";
import { FaDollarSign, FaShoppingCart, FaBox, FaUser } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    title: "Total Sales",
    value: "₹15,000",
    icon: <FaDollarSign size={40} className="text-success me-3" />,
    bgColor: "shadow-sm h-100 border-success",
  },
  {
    id: 2,
    title: "Total Orders",
    value: "320",
    icon: <FaShoppingCart size={40} className="text-primary me-3" />,
    bgColor: "shadow-sm h-100 border-primary",
  },
  {
    id: 3,
    title: "Total Products",
    value: "150",
    icon: <FaBox size={40} className="text-warning me-3" />,
    bgColor: "shadow-sm h-100 border-warning",
  },

  {
    id: 5,
    title: "Total Users",
    value: "200",
    icon: <FaUser size={40} className="text-danger me-3" />,
    bgColor: "shadow-sm h-100 border-danger",
  },
];

export default cardData;
