import React from "react"
import { Nav, Navbar } from 'react-bootstrap'
import { ArrowUpRight } from 'react-bootstrap-icons'
import { Link } from "gatsby"
// Styles
import NavigationbarStyles from "./Navigationbar.module.scss"

const Navigationbar = () => {
	return (
		<Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className={NavigationbarStyles.NavbarContainer}>
				<Navbar.Brand to="/">다 위 치</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto ml-auto">
						<Link to="/" activeClassName={NavigationbarStyles.active}>Home</Link>
						<Link to="/about/" activeClassName={NavigationbarStyles.active} >About me</Link>
						<Link to="/skills/" activeClassName={NavigationbarStyles.active} >My skills</Link>
						<Link to="/projects/" activeClassName={NavigationbarStyles.active} >My projects</Link>
						<Link to="/contact/" activeClassName={NavigationbarStyles.active} >Contact</Link>
						<Link to="/blog/" cactiveClassName={NavigationbarStyles.active} >Blog</Link>
					</Nav>
					<Nav>
						<Nav.Link href="https://github.com/dawichi" target="blank"><ArrowUpRight/> My GitHub</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
	)
}

export default Navigationbar