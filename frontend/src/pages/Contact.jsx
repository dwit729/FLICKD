import React from 'react';
import { Row, Col, Card } from 'antd';
import '../css/Contact.css';

function App() {
  return (
    <div>
 <section className="team-section">
        <h2>Know More About the Team!</h2>
        <div className="underline"></div>
        <Row gutter={[16, 16]} justify="center">
          {[...Array(4)].map((_, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                className="team-card"
                style={{ backgroundColor: '#8b5cf6', color: 'white', textAlign: 'center' }}
                bodyStyle={{ padding: '1.5rem', backgroundColor: '#4a4a4a' }}
              >
                <h3 style={{ color: '#ffffff' }}>Name</h3>
                <p style={{ color: '#ffffff' }}>Role</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}

export default App;
