import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from './components/MyNavbar'
import MyCarousel from './components/MyCarousal';
import MyCarouselSc from './components/MyCarousalSc';
import MyCarouselOf from './components/MyCarousalOf';
import MenuHome from './components/MenuHome';
import MenuSchool from './components/MenuSchool';
import MenuOffice from './components/MenuOffice';
import Contact from './components/Contact';
import {Container, Row, Col, Card } from 'react-bootstrap'
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom'
import Sofas from './components/Sofas';
import Bed from './components/Bed';
import Wardrobe from './components/Wardrobe';
import Dining from './components/Dining';
import TV from './components/TV';
import Dressing from './components/Dressing';
import SDesks from './components/SDesks';
import SChair from './components/SChair';
import Benches from './components/Benches';
import Almirah from './components/Almirah';
import Cabinet from './components/Cabinet';
import Shelfs from './components/Shelf';
import ODesks from './components/ODesks';
import OChair from './components/OChair';

function App() {
  return (<><BrowserRouter>
  <Switch>
  <Route path='/' exact>
  <MyNavbar/>
  <MyCarousel/>
  <hr/>
  <MyCarouselSc/>
  <hr/>
  <MyCarouselOf/>
  <hr/>
  <Row>
  <Col lg={4}><MenuHome/></Col>
  <Col lg={4}>
  <MenuSchool/> </Col> 
  <Col lg={4}>
  <MenuOffice/>
  </Col>
  </Row>
  <hr/>
  <Contact/>
  </Route>

  {/* Home */}

  <Route path='/sofas'><Sofas/></Route>
  <Route path='/Bed'><Bed/></Route>
  <Route path='/Wardrobe'><Wardrobe/></Route>
  <Route path='/dining'><Dining/></Route>
  <Route path='/tv'><TV/></Route>
  <Route path='/dressing'><Dressing/></Route>

  {/* school */}
  <Route path='/sdesks'><SDesks/></Route>
  <Route path='/schair'><SChair/></Route>
  <Route path='/benches'><Benches/></Route>
  <Route path='/almirah'><Almirah/></Route>
  <Route path='/cabinet'><Cabinet/></Route>
  <Route path='/shelfs'><Shelfs/></Route>

  {/* Office */}
  <Route path='/odesks'><ODesks/></Route>
  <Route path='/ochairs'><OChair/></Route>
  </Switch>
 </BrowserRouter>
</>
  );
}

export default App;
