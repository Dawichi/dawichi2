import React from "react"
import {Col, Row, Container} from 'react-bootstrap'
// Styles
import footerStyles from "./Footer.module.scss"

const Footer = () => {
	return (
		<>
			{/* <Container className={footerStyles.buymeacoffee} fluid>
				<a href="https://www.buymeacoffee.com/dawichi">
					<img
						height="50px"
						width="235px"
						alt="https://www.buymeacoffee.com/dawichi"
						src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=dawichi&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
					/>
				</a>
			</Container> */}
		
			<footer className={ footerStyles.siteFooter }>
				<div className={ footerStyles.container }>
					<Container>
						<Row>
							<Col xs={12} sm={6}>
								Site developed by me :) &copy;{" "}
								{new Date().getFullYear().toString()}{" "}
							</Col>
							<Col xs={12} sm={6}>
								Made with <span className={footerStyles.js}>JS</span> and <span className={footerStyles.love}>♥</span> !
							</Col>
						</Row>
					</Container>
				</div>
			</footer>

			<script type="text/javascript" src="/navbarboxshadow.js"></script>
		</>
	)
}

export default Footer