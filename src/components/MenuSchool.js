import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card } from 'react-bootstrap'
import { alignPropType } from "react-bootstrap/esm/types";
import { icons } from "react-icons";
import "./MenuHome.css";
import {GiDesk} from 'react-icons/gi';
import {MdOutlineChairAlt} from 'react-icons/md';
import {BiCabinet} from 'react-icons/bi'
import {BsTv} from 'react-icons/bs'
import {MdKitchen} from 'react-icons/md'
import {BsBookshelf} from 'react-icons/bs'
import {MdOutlineCountertops} from 'react-icons/md'
import Button from "@restart/ui/esm/Button";
import Almirah from '../images/Almirah.png'
import Bench from '../images/bench.png'
import {Link} from 'react-router-dom'


function MenuSchool(){
    return(<Container fluid className='explore'><Row>
        <h3>Education Institutions</h3>
        </Row>
        <Row className='row'>
            <Col xs={6} lg={6}><Link to='/sdesks'><Button className='menubutton'><GiDesk size='75px'/><div className='text'>Desks</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/schair'><Button className='menubutton'><MdOutlineChairAlt size='75px'/><div className='text'>Chairs</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/benches'><Button className='menubutton'><img src={Bench} height='70px'/><div className='text'>Benches</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/almirah'><Button className='menubutton'><img src={Almirah} height='70px'/><div className='text'>Almirahs</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/cabinet'><Button className='menubutton'><BiCabinet size='75px'/><div className='text'>Cabinets</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/shelfs'><Button className='menubutton'><BsBookshelf size='75px'/><div className='text'>Shelfs</div></Button></Link></Col>
        </Row>
        </Container>)
}

export default MenuSchool