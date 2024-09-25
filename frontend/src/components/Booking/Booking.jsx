import React,{useState} from 'react'
import './booking.css';
import {Form,FormGroup,ListGroup,ListGroupItem,Button} from 'reactstrap';

import {useNavigate} from 'react-router-dom';

const Booking = ({tour, avgRating}) => {


  const {price,reviews}= tour

  const navigate= useNavigate()
   
  const [credentials,setCredentials]=useState({
    userId:'01',
    userEmail:'abc@gmail.com',
    fullName:'',
    phone:'',
    guestSize: 1,
    bookAt:''
  })
  const handleChange=e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  };


  const serviceFees=835
  const totalAmount=Number(price)*Number(credentials.guestSize)+Number(serviceFees)

  //send data to server

  const handleClick=e=>{
    e.preventDefault()

    navigate('/thank-you');
  }

  return (
    <div className='booking'>
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>Rs {price} <span>/per person</span></h3>
        <span className="tour__rating d-flex align-items-center ">
            <i className="ri-star-fill"></i>
            {avgRating !== 0 && avgRating.toFixed(1)}({reviews?.length})
        </span>
      </div>
      {/*Booking start*/}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleClick}>
          <FormGroup>
            <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
          </FormGroup>
          <FormGroup className='d-flex align-itmes-center gap-3'>
            <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
            <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
          </FormGroup>
          
        </Form>
      </div>
      {/*Booking end*/}

      {/*Booking bottom*/}
      <div className="booking__button">
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
            <h5 className='d-fle align-items-center gap-1'>Rs {price} <i class="ri-close-line"></i> 1 person </h5>
            <span>Rs {price}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
            <h5>Service Charges</h5>
            <span>{serviceFees}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0 total'>
            <h5>Total</h5>
            <span>{totalAmount}</span>
          </ListGroupItem>
        </ListGroup> 

        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</Button>
      </div>
    </div>
  )
}

export default Booking