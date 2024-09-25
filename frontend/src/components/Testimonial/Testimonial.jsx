import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpg';
import ava05 from '../../assets/images/ava-5.jpg';
import ava06 from '../../assets/images/ava-6.jpg';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,  // Corrected this
    autoplaySpeed: 2000, // Corrected this
    slidesToShow: 3,

    responsive: [        // Corrected this
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>Our trip was absolutely fantastic! The team planned everything down to the last detail, making our vacation stress-free and enjoyable. The local guides were knowledgeable, and the itinerary was perfectly balanced with adventure and relaxation. We’ll definitely be booking our next trip with you!</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} className="w-25 h-25 round-2" alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Atlas Corrigon</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>I had the best travel experience with this agency! From the moment we booked, we were well taken care of. The recommendations for sightseeing and restaurants were spot on, and the accommodations were top-notch. This was a truly memorable holiday, thanks to their excellent service</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} className="w-25 h-25 round-2" alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Noah</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>This was our first family trip with young kids, and it couldn’t have gone better! The team took into account all our preferences and needs, making the experience enjoyable for everyone. The activities were exciting, the hotels were kid-friendly, and the overall service was exceptional. Highly recommend!</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} className="w-25 h-25 round-2" alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Miles</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>A dream vacation come true! Every aspect of the trip exceeded our expectations, from the hassle-free booking process to the personalized travel itinerary. The local experiences we had were unique and gave us a real taste of the culture. <br/>Can’t wait to travel with you again!</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava05} className="w-25 h-25 round-2" alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Emma</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>Incredible service from start to finish! <br/>The team was always available to answer our questions and even made last-minute adjustments to our itinerary. The tours were well-organized, and the guides were friendly and professional. We had the time of our lives!</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava04} className="w-25 h-25 round-2" alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Rachel</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>This was by far the best trip we’ve ever taken. The seamless coordination and attention to detail made everything perfect. From the luxury accommodations to the guided tours, everything was exactly what we hoped for. Highly recommend this travel service to anyone looking for a flawless experience!</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava06} className="w-25 h-25 round-2" alt="" />
          <div>
            <h6 className='mb-0 mt-3'>Chris Evans</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default Testimonial;
