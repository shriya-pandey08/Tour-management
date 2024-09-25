import React from 'react'
import './newsletter.css'

import { Container,Col,Row } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
             <div className="newsletter__content">
              <h2>Subscribe to get more travelling information</h2>
                <div className="newsletter__input">
                    <input type='email' placeholder='Enter your mail id'/>
                     <button className="newsletter__btn">Subscribe</button>
                </div>
              <p>Stay updated with the latest travel tips, destination guides, and exclusive offers! Subscribe to our newsletter and be the first to discover hidden gems, adventure ideas, and essential travel information tailored just for you. Let us help you plan your next unforgettable journey!</p>
             </div>
          </Col>
            
          <Col lg='6'>
          <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Newsletter