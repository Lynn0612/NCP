import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { HomePage, AboutPage } from './pages';
import { Faq } from './components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
  <div className="container">
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">NCP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
