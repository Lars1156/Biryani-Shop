import React from 'react';
import { Card, Col, Row } from 'antd';
import '../cssFiles/menu.css';

const Menu = () => {
     const menuData = [
        {
          category: 'Starters',
          items: [
            { name: 'Chicken Tikka', price: 8.99, description: 'Marinated chicken skewers' },
            { name: 'Paneer Tikka', price: 7.99, description: 'Marinated paneer skewers' },
          ],
        },
        {
          category: 'Biryani',
          items: [
            { name: 'Chicken Biryani', price: 12.99, description: 'Spicy chicken biryani' },
            { name: 'Vegetable Biryani', price: 10.99, description: 'Mixed vegetable biryani' },
          ],
        },
        {
          category: 'Desserts',
          items: [
            { name: 'Gulab Jamun', price: 4.99, description: 'Sweet milk dumplings' },
            { name: 'Rasgulla', price: 4.99, description: 'Syrupy dessert' },
          ],
        },
        {
          category: 'Drinks',
          items: [
            { name: 'Mango Lassi', price: 3.99, description: 'Mango yogurt drink' },
            { name: 'Masala Chai', price: 2.99, description: 'Spiced tea' },
          ],
        },
      ];
      
  return (
    <div className="menu-container">
      {menuData.map((category) => (
        <div key={category.category} className="menu-category">
          <h2>{category.category}</h2>
          <Row gutter={[16, 16]}>
            {category.items.map((item) => (
              <Col key={item.name} xs={24} sm={12} md={8} lg={6}>
                <Card hoverable className="menu-item">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="menu-price">${item.price.toFixed(2)}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Menu;
