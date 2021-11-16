import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col, Card } from 'react-bootstrap'
import { alignPropType } from "react-bootstrap/esm/types";
import { icons } from "react-icons";
import "./MenuHome.css";
import {FaCouch} from 'react-icons/fa';
import {IoBed} from 'react-icons/io5';
import {BiCabinet} from 'react-icons/bi'
import {BsTv} from 'react-icons/bs'
import {MdKitchen} from 'react-icons/md'
import Button from "@restart/ui/esm/Button";
import wardrobe from '../images/wardrobe.png'
import dressing from '../images/dressing.png'
import dining from '../images/dining.png'
import {Link} from 'react-router-dom'

function MenuHome(){
    return(<Container fluid className='explore'><Row>
        <h3>Home Furnishing</h3>
        </Row>
        <Row className='row'>
            <Col xs={6} lg={6}><Link to='/sofas'><Button className='menubutton'><FaCouch size='75px'/><div className='text'>Sofa</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/bed'><Button className='menubutton'><IoBed size='75px'/><div className='text'>Bed</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/wardrobe'><Button className='menubutton'><img src={wardrobe} height='70px'/><div className='text'>Wardrobe</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/dining'><Button className='menubutton'><img src={dining} height='70px'/><div className='text'>Dining</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/tv'><Button className='menubutton'><BsTv size='75px'/><div className='text'>TV Units</div></Button></Link></Col>
            <Col xs={6} lg={6}><Link to='/dressing'><Button className='menubutton'><img src={dressing} height='70px'/><div className='text'>Dressing</div></Button></Link></Col>
        </Row>
        </Container>)
}

export default MenuHome