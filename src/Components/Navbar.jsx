import "../CSS/Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import {Link} from "react-router-dom";
import {Logo} from "./Logo";

function TheNavbar() {
  return (
    <Navbar expand="lg" className="tiza pt-4 justify-content-between mx-5">
      <div>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
      </div>
      <div className="">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="align-">
          <Nav className="me-auto justify-content-between">
            <Nav.Link href="#home">
              <p className="lavanda me-5">Inicio</p>
            </Nav.Link>
            <Nav.Link href="#about">
              <p className="lavanda me-5">Sobre</p>
            </Nav.Link>
            <NavDropdown
              title="Proyectos"
              id="basic-nav-dropdown"
              className="me-5"
            >
              <NavDropdown.Item href="/modeloifc">
                Visualizador 3D
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Servicios"
              id="basic-nav-dropdown"
              className="me-5"
            >
              <NavDropdown.Item href="#action/3.1">BIM</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Data</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Project browser
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">
              <p className="lavanda">Contacto</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default TheNavbar;
