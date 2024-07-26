import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './nav.css'; 

const Navbar = () => {
  return (
    <Menu mode="horizontal" className="navbar">
      <Menu.Item key="logo" className="navbar-logo">
        <Link to="/">
          <img src="path_to_logo.png" alt="Biryani Shop Logo" className="logo"/>
        </Link>
      </Menu.Item>
      <Menu.Item key="home" className="navbar-item">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="menu" className="navbar-item">
        <Link to="/menu">Menu</Link>
      </Menu.Item>
      <Menu.Item key="about" className="navbar-item">
        <Link to="/about">About Us</Link>
      </Menu.Item>
      <Menu.Item key="contact" className="navbar-item">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
