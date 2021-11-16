import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel, Container, Row, Col } from 'react-bootstrap'
import Sofa from'../images/SofaF.jpg';
import Bed from'../images/Bed1.jpg';
import Wardrobe from'../images/Wardrobe2.jpg';
import TV from'../images/TV3.jpg';
import Crockery from'../images/Crockery1.jpeg';
import Dressing from'../images/Dressing2.jpg';
import Dining from'../images/Dining2.jpg';
import './MyCarousal.css'

function MyCarousel(){
    return(<Container fluid breakpoint='lg'><Row className='row1'>
      <Col md='4' className='caption'>
      
      <h1 className='tag'>25</h1>
      <h1 className='tag1'>Years of trust</h1>
      <p className='tag2'>Diligently serving both Retail and Wholesale 
      customers since 1995 with all kind of Steel and Wooden Furniture.</p>
      
      </Col>
      <Col md='8' className='row1'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Sofa}
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
            src={Bed}
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
            src={Wardrobe}
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
            src={Dining}
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
            src={TV}
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
            src={Crockery}
            alt="Fifth slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Dressing}
            alt="Sixth slide"
            height='500px'
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel></Col>
      </Row></Container>)
}

export default MyCarousel