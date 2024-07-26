import React from 'react';
import { Row, Col } from 'antd';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import '../cssFiles/foot.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Biryani Shop</p>
            <p>123 Biryani Street</p>
            <p>City, State, ZIP</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@biryanishop.com</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookOutlined />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterOutlined />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramOutlined />
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <p className="footer-copy">&copy; {new Date().getFullYear()} Biryani Shop. All rights reserved.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
