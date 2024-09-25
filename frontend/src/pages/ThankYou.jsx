import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/thank-you.css';
import Newsletter from '../shared/Newsletter'; // Adjust the path based on your project structure


const ThankYou = () => {
  return (
    <div className="section"> {/* Replaced Section with div */}
      <Container>
        <Row>
          <Col lg='12' className='pt-5 text-center'>
            <div className="thank__you">
              <span>
                <i className="ri-checkbox-circle-line"></i> {/* Corrected the class attribute */}
              </span>
              <h1 className="mt-3 fw-semibold">Thank You</h1>
              <h3 className="mt-4">Your Tour is Booked!!</h3>

              <Button className='btn primary__btn w-25'>
                <Link to='/home'>Back To Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Newsletter />
    </div>
    
  );
}

export default ThankYou;
