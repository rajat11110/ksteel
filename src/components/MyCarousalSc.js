import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel, Container, Row, Col } from 'react-bootstrap'
import School1 from'../images/School1.jfif';
import School2 from'../images/School2.jpg';
import School3 from'../images/School3.jfif';
import School4 from'../images/School4.jpg';
import School5 from'../images/School5.jpg';
import School6 from'../images/School6.jpg';
import School7 from'../images/School7.jpg';

import './MyCarousal.css'

function MyCarouselSc(){
    return(<Container fluid breakpoint='lg'><Row className='row1'>
      <Col md='8' className='row1'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={School1}
            alt="First slide"
            height='50%'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={School2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={School3}
            alt="Third slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={School4}
            alt="FOurth1 slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={School5}
            alt="Fourth slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={School6}
            alt="Fifth slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={School7}
            alt="Sixth slide"
            height='500px'
          />
      
        </Carousel.Item>
      </Carousel></Col>
      <Col md='4' className='caption'>
      
      <h1 className='tag'>Complete </h1>
      <h1 className='tag1'>Furninshing Solution for Educational Institutions</h1>
      <p className='tag2'>Long Experience in serving Education Institutions such as Schools and Colleges for
      highly customized furniture at a very resonable rates.</p>
      
      </Col>
      </Row></Container>)
}

export default MyCarouselSc