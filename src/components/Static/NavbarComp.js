import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

function NavbarComp() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-top">
				<Navbar.Brand href="#home">IEEE Yaşar Üniversitesi</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto"></Nav>
					<Nav >
						<NavDropdown title="Komitelerimiz" id="collasible-nav-dropdown">
							<NavDropdown.Item href="">Aerospace and Electronic Systems Society</NavDropdown.Item>
							<NavDropdown.Item href="">Computer Society</NavDropdown.Item>
							<NavDropdown.Item href="">Robotics and Automation Society</NavDropdown.Item>
							<NavDropdown.Item href="">Power and Energy Society</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="">Women in Engineering</NavDropdown.Item>
							<NavDropdown.Item href="">Kardeş Öğrenci Kolları Projesi</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="">Hakkımızda</Nav.Link>
						<Nav.Link href="">Etkinliklerimiz</Nav.Link>
						<Nav.Link href="">Blog</Nav.Link>
						{/* Iconlar mobile geçildiği */}
						<Nav.Link href="https://www.linkedin.com/company/ieee-ya%C5%9Far-%C3%B6%C4%9Frenci-kolu/"><i class="fab fa-linkedin"></i></Nav.Link>
						<Nav.Link href="https://www.instagram.com/ieeeyasarsb/"><i class="fab fa-instagram"></i></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default NavbarComp
