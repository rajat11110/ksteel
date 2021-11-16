import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel, Container, Row, Col } from 'react-bootstrap'
import Office1 from'../images/Office1.jpg';
import Office2 from'../images/Office2.jpg';
import Office3 from'../images/Office3.jpg';
import Office4 from'../images/Office4.jpg';
import Office5 from'../images/Office5.jpg';
import Office6 from'../images/Office6.jpg';
// import Office7 from'../images/Office7.jpg';

import './MyCarousal.css'

function MyCarouselOf(){
    return(<Container fluid breakpoint='lg'><Row className='row1'><Col md='4' className='caption'>
      
    <h1 className='tag'>Give Your Office</h1>
    <h1 className='tag1'>A Modern Look and Feel</h1>
    <p className='tag2'>We manufacture office furniture, tailor-made 
    as per your requirements, to give a modern look and feel to your office</p>
    
    </Col>
      <Col md='8' className='row1'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Office1}
            alt="First slide"
            height='50%'
          />
          <Carousel.Caption>
            <h3>Sofas</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Office2}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Beds</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Office3}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Wardrobes</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Office4}
            alt="FOurth1 slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Office5}
            alt="Fourth slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Office6}
            alt="Fifth slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel></Col>
      
      </Row></Container>)
}

export default MyCarouselOf