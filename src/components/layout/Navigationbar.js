import React from "react"
import { Nav, Navbar } from 'react-bootstrap'
import { ArrowUpRight } from 'react-bootstrap-icons'
import { Link } from "gatsby"
// Components
import DarkToggle from '../../styles/DarkToggle'
// Styles
import NavbarStyles from "./Navigationbar.module.scss"

const Navigationbar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className={NavbarStyles.NavbarContainer}>
				<Navbar.Brand to="/" className={NavbarStyles.brand}>다 위 치</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto ml-auto">
						<Link to="/" activeClassName={NavbarStyles.active}>Home</Link>
						<Link to="/about/" activeClassName={NavbarStyles.active} >About me</Link>
						<Link to="/skills/" activeClassName={NavbarStyles.active} >My skills</Link>
						<Link to="/projects/" activeClassName={NavbarStyles.active} >My projects</Link>
						<Link to="/contact/" activeClassName={NavbarStyles.active} >Contact</Link>
						<Link to="/blog/" activeClassName={NavbarStyles.active} >Blog</Link>
					</Nav>
					<Nav>
						<Nav.Link href="https://github.com/dawichi" target="blank"  className={NavbarStyles.link}><ArrowUpRight/> My GitHub</Nav.Link>
						<DarkToggle/>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
	)
}

export default Navigationbar