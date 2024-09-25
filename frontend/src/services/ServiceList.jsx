import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
  {
    imgUrl: weatherImg,
    title:"Weather calculator",
    desc: "Plan your trips with ease using our weather calculator! Get real-time weather updates for your destination, ensuring you're always prepared for the perfect adventure, rain or shine.",
  },
  {
    imgUrl: guideImg,
    title:"Tour Guide",
    desc: "Explore the world with our expert tour guides! Whether you're seeking adventure or relaxation, our knowledgeable guides ensure a memorable experience from start to finish.",
  },
  {
    imgUrl: customizationImg,
    title:"Customization",
    desc: "Tailor your journey with our customization service! From destinations to activities, personalize every detail of your trip for an experience that's uniquely yours.",
  }
]
const ServiceList = () => {
  return (
    <>
    {
      servicesData.map((item,index)=>
      <Col lg='3'key={index}>
        <ServiceCard item={item}/>
      </Col>)
    }
    </>
  )
}

export default ServiceList