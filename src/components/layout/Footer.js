import React from "react"
import {Col, Row, Container} from 'react-bootstrap'
// Styles
import footerStyles from "./Footer.module.scss"

const Footer = () => {
	return (
		<>
			<Container className={footerStyles.buymeacoffee} fluid>
				<a href="https://www.buymeacoffee.com/dawichi">
					<img
						alt="https://www.buymeacoffee.com/dawichi"
						src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=dawichi&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
					/>
				</a>
			</Container>
		
			<footer className={ footerStyles.siteFooter }>
				<div className={ footerStyles.container }>
					<Container>
						<Row>
							<Col>
								Site developed by me &copy;{" "}
								{new Date().getFullYear().toString()}{" "}
							</Col>
							<Col>
								Made with so much <span>♥</span>! 감사합니다!
							</Col>
						</Row>
					</Container>
					
				</div>
			</footer>
		</>
	)
}

export default Footer