import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import calculateAvgRating from '../utils/avgRating';

import './tour-card.css';

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, reviews = [] } = tour;

  const { totalRating = 0, avgRating = 0 } = calculateAvgRating(reviews || []);

  return (
    <div className="tour__card">
      <Card className="card">
        <div className="tour__img">
          {/* Fallback for photo */}
          <img src={photo || 'default-image-path.jpg'} alt="tour-img" />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i>{city}
            </span>
            <span className="tour__rating d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>{avgRating !== 0 && avgRating}
              {totalRating === 0 ? 'Not rated' : (
                <span>({reviews.length})</span>
              )}
            </span>
          </div>

          <h5 className="tour__title">
            <Link to={`/tours/${id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>${price}<span>/per person</span></h5>

            <Link to={`/tours/${id}`}>
              <button className="btn booking__btn">Book Now</button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;
