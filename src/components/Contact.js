import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card } from 'react-bootstrap'
import { alignPropType } from "react-bootstrap/esm/types";
import { icons } from "react-icons";
import "./Contact.css";



function Contact(){
    return(<Container fluid className='explore'><Row>
        <h2>Contact Us</h2>
        </Row>
        <Row>
            <Col lg={4} className='address'>
                <h3>Address</h3>
                <h6>Pati Ram Dharmshala</h6>
                <h6>In Front of Gurudwara</h6>
                <h6>Nagladeena, Fatehgarh</h6>
                <h6>Farrukhabad, Uttar Pradesh</h6>
                <h6>209601</h6>
                <h6>Mob: +91-9473729451, 9415167562</h6>
                <h6>email: ashokdubey74@gmail.com</h6>
                </Col>
            <Col lg={8}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.8036347634359!2d79.62575442920871!3d27.369014498933332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3171a235b93d%3A0x3974430a2249680d!2sKumar%20Steel!5e0!3m2!1sen!2sin!4v1635525902181!5m2!1sen!2sin" width="400" height="300" style={{border: '5px'}} allowfullscreen="" loading="lazy"></iframe></Col>
        </Row>
        
        </Container>)
}

export default Contact