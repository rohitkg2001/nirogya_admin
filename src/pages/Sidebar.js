import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  ListGroup,
  Collapse,
  Button,
  Dropdown,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

const menuItems = [
  { text: "Dashboard", icon: "fas fa-tachometer-alt", route: "/Dashboard" },
  {
    text: "Personnel",
    icon: "fas fa-users",
    children: [
      { text: "Add users", route: "/personnel/add-users" },
      { text: "All users", route: "/personnel/all-users" },
      { text: "Customers", route: "/personnel/customers" },
      { text: "Login Activities", route: "/personnel/login-activities" },
      { text: "Notification Log", route: "/personnel/notification-log" },
    ],
  },
  {
    text: "Products",
    icon: "fas fa-boxes",
    children: [
      { text: "Add product", route: "/products/add-product" },
      { text: "All products", route: "/products/all-products" },
      { text: "Pending Products", route: "/products/pending-products" },
      { text: "Categories", route: "/products/categories" },
      { text: "Brands", route: "/products/brands" },
      { text: "Attributes", route: "/products/attributes" },
      { text: "Reviews", route: "/products/reviews" },
    ],
  },
  {
    text: "Vendors",
    icon: "fas fa-store",
    children: [
      { text: "Add Vendor", route: "/vendors/add" },
      { text: "All Vendors", route: "/vendors/all" },
      { text: "Withdrawals", route: "/vendors/withdrawals" },
    ],
  },
  {
    text: "Orders",
    icon: "fas fa-shopping-cart",
    children: [
      { text: "All Orders", route: "/orders/all" },
      { text: "Refunds", route: "/orders/refunds" },
      { text: "Order Tracking", route: "/orders/order-tracking" },
    ],
  },
];

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(menuItems[0].text);
  const [openItems, setOpenItems] = useState({});
  const [sidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility
  const navigate = useNavigate();
  const sidebarRef = useRef(null); // Ref to the sidebar

  const handleListItemClick = (item) => {
    setSelectedItem(item.text);
    if (!item.children) {
      navigate(item.route);
      setSidebarVisible(false); // Close sidebar on mobile when an item is clicked
    }
  };

  const toggleCollapse = (itemText) => {
    setOpenItems({ [itemText]: !openItems[itemText] });
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Toggle sidebar visibility
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarVisible(false); // Close sidebar if clicked outside
    }
  };

  useEffect(() => {
    if (sidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarVisible]);

  return (
    <div className="d-flex flex-column min-vh-100">
      {!sidebarVisible && (
        <Button
          variant="secondary"
          className="d-md-none m-2"
          style={{ height: "6vh" }}
          onClick={toggleSidebar}
        >
          <i className="fas fa-bars"></i>
        </Button>
      )}

      <div
        ref={sidebarRef}
        className={`text-bg-secondary ${
          sidebarVisible ? "d-block" : "d-none"
        } d-md-block`}
        style={{ width: "100%", height: "160vh", overflowY: "auto" }}
      >
        <Navbar>
          <Navbar.Brand className="p-3 text-bg-secondary">My App</Navbar.Brand>
          <Nav className="ms-auto">
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="link"
                id="user-dropdown"
                className="text-white"
              >
                <i className="fas fa-user"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/signin">Sign In</Dropdown.Item>
                <Dropdown.Item href="/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar>

        <ListGroup variant="flush">
          {menuItems.map((item) => (
            <div key={item.text}>
              <ListGroup.Item
                action
                className={`text-bg-secondary ${
                  selectedItem === item.text ? "active" : ""
                } d-flex justify-content-between align-items-center`}
                onClick={() =>
                  item.children
                    ? toggleCollapse(item.text)
                    : handleListItemClick(item)
                }
              >
                <div className="d-flex align-items-center">
                  <i className={item.icon}></i>
                  <span className="ms-2">{item.text}</span>
                </div>
                {item.children && (
                  <i
                    className={`fas ${
                      openItems[item.text] ? "fa-angle-up" : "fa-angle-down"
                    } text-white`}
                  ></i>
                )}
              </ListGroup.Item>
              {item.children && (
                <Collapse in={openItems[item.text]}>
                  <ListGroup variant="flush" className="text-bg-secondary">
                    {item.children.map((subItem) => (
                      <ListGroup.Item
                        key={subItem.text}
                        action
                        className="text-bg-light pl-4"
                        onClick={() => handleListItemClick(subItem)}
                      >
                        {subItem.text}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Collapse>
              )}
            </div>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}
