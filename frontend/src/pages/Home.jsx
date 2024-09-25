import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList';

import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know before you go'} />
                  <img src={worldImg} alt="globe" />
                </div>
                <h1>
                  Travelling opens the door to creating{' '}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Welcome to Travel World—where your next adventure begins!
                  Discover stunning destinations, unique experiences, and
                  seamless bookings all in one place. Whether you’re craving a
                  relaxing retreat or an exhilarating journey, we’ve got the
                  perfect trip for you. Let’s make your travel dreams come
                  true!
                </p>
              </div>
            </Col>

            {/* Images and Video */}
            <Col lg="2">
              <div className="hero__image-box">
                {heroImg && <img src={heroImg} alt="travel" />}
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__image-box mt-4">
                {heroVideo && <video src={heroVideo} controls />}
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__image-box mt-5">
                {heroImg02 && <img src={heroImg02} alt="adventure" />}
              </div>
            </Col>
          </Row>

          {/* Search Bar */}
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Featured Tours Section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle="EXPLORE" />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/* Experience Section */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle="Experience" />
                <h2>
                  With all our experiences <br />
                  We will serve you
                </h2>
                <p>
                  "Explore the world with personalized tours tailored to your preferences.
                  From hidden gems to iconic spots, we craft seamless journeys that let you
                  focus on making unforgettable memories."
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12K+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>3.5K+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>11+</span>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </Col>

            {/* Empty column */}
            <Col lg="6">
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*gallery section */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'gallery'}/>
              <h2 className="gallery__title">Visit our Client's gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery/>  
            </Col>
          </Row>
        </Container>
      </section>
      {/*testiminial section*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Clients Love'}/>
              <h2 className="testiminial__title">What our Client's says about us</h2>
            </Col>
            <Col lg='12'>
             <Testimonial/>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter/>
    </div>
  );
};

export default Home;
