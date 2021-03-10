import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavbarComp() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="fixed-top"
      >
        <Navbar.Brand as={Link} to="/">
          IEEE Yaşar Üniversitesi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <NavDropdown title="Komitelerimiz" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/society/aess">
                Aerospace and Electronic Systems Society
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/society/cs">
                Computer Society
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/society/ras">
                Robotics and Automation Society
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/society/pes">
                Power and Energy Society
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/society/wie">
                Women in Engineering
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/society/kok">
                Kardeş Öğrenci Kolları Projesi
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Hakkımızda</Nav.Link>
            <Nav.Link>Etkinliklerimiz</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
            {/* Iconlar mobile geçildiği */}
            <Nav.Link
              href="https://www.linkedin.com/company/ieee-ya%C5%9Far-%C3%B6%C4%9Frenci-kolu/"
              target="_blank"
              rel="norefferer"
            >
              <i class="fab fa-linkedin"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/ieeeyasarsb/"
              target="_blank"
              rel="norefferer"
            >
              <i class="fab fa-instagram"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
