import React from 'react';
import { Row, Col, Card } from 'antd';
import '../css/Contact.css';
import sofie from '../images/sofie.jpg';
import dwit from '../images/dwit.png';
import adrian from '../images/adrian.png';
import keong from '../images/keong.png';

function App() {
  const teamMembers = [
    {
      name: 'Dwight Ciervo',
      role: 'Senior Programmer',
      description: 'Dwight designs and develops complex software solutions, ensuring code quality and optimal performance.',
      image: dwit,
    },
    {
      name: 'Sofia Ilustre',
      role: 'Project Manager',
      description: 'Sofia oversees project timelines, manages team coordination, and ensures project goals are met effectively.',
      image: sofie,
    },
    {
      name: 'Adrian Pueblo',
      role: 'System Analyst',
      description: 'Adrian analyzes and models the system requirements, bridging the gap between business needs and technical solutions.',
      image: adrian,
    },
    {
      name: 'Keona Curbi',
      role: 'Documenter',
      description: 'Keona documents technical specifications, processes, and user manuals to support project transparency and knowledge transfer.',
      image: keong,
    },
  ];

  return (
    <div>
      <section className="team-section">
        <h2>Know More About the Team!</h2>
        <div className="underline"></div>
        <Row gutter={[16, 16]} justify="center">
          {teamMembers.map((member, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card
                className="team-card"
                style={{ backgroundColor: '#8b5cf6', color: 'white', textAlign: 'center' }}
                cover={
                  <div className="image-container">
                    <img alt={member.name} src={member.image} className="team-image" />
                  </div>
                }
                bodyStyle={{ padding: '1.5rem', backgroundColor: '#4a4a4a' }}
              >
                <h3 style={{ color: '#ffffff' }}>{member.name}</h3>
                <p style={{ color: '#ffffff' }}>{member.role}</p>
                <p style={{ color: '#cccccc' }}>{member.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
}

export default App;
  