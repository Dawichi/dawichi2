import React from "react"
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from "gatsby"
// Components
import DarkToggle from '../../styles/DarkToggle'
// Styles
import NavbarStyles from "./Navigationbar.module.scss"

const Navigationbar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" variant="light" sticky="top" id="navboxshadow" className={NavbarStyles.NavbarContainer}>
			<Navbar.Brand to="/" className={NavbarStyles.brand}>다 위 치</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />

			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto ml-auto">
					<Link to="/" activeClassName={NavbarStyles.active}>Home</Link>
					<Link to="/skills/" activeClassName={NavbarStyles.active} >My skills</Link>
					<Link to="/projects/" activeClassName={NavbarStyles.active} >My projects</Link>
					<Link to="/blog/" activeClassName={NavbarStyles.active} >Blog</Link>
				</Nav>
				<Nav>
					<DarkToggle/>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigationbar