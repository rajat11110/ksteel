import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card } from 'react-bootstrap'
import { alignPropType } from "react-bootstrap/esm/types";
import { icons } from "react-icons";
import "./MenuHome.css";
import OfficeDesk from '../images/officedesk.png'
import {MdOutlineChairAlt} from 'react-icons/md';
import {BiCabinet} from 'react-icons/bi'
import {FaCouch} from 'react-icons/fa'
import {MdKitchen} from 'react-icons/md'
import {BsBookshelf} from 'react-icons/bs'
import {GiOfficeChair} from 'react-icons/gi'
import Button from "@restart/ui/esm/Button";
import Almirah from '../images/Almirah.png'
import Bench from '../images/bench.png'
import {Link} from 'react-router-dom'


function MenuOffice(){
    return(<Container fluid className='explore'><Row>
        <h3>Office Furniture</h3>
        </Row>
        <Row className='row'>
            <Col xs={6} lg={6}><Link to='/odesks'><Button className='menubutton'><img src={OfficeDesk} height='70px'/><div className='text'>Desks</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/ochairs'><Button className='menubutton'><GiOfficeChair size='75px'/><div className='text'>Chairs</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/sofas'><Button className='menubutton'><FaCouch size='75px'/><div className='text'>Couch</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/almirah'><Button className='menubutton'><img src={Almirah} height='70px'/><div className='text'>Almirahs</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/cabinet'><Button className='menubutton'><BiCabinet size='75px'/><div className='text'>Cabinets</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/shelfs'><Button className='menubutton'><BsBookshelf size='75px'/><div className='text'>Shelfs</div></Button></Link></Col>
        </Row>
        </Container>)
}

export default MenuOffice