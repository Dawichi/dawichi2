import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { PersonFill } from "react-bootstrap-icons"

import meSvg from '../../../images/svg/me.svg'
import AboutmeStyles from "./Aboutme.module.scss"

const Aboutme = () => {
	
	const [scrolled, setScrolled] = useState(true)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY > 1300 && window.scrollY < 2500
			if (isTop !== scrolled) { setScrolled(isTop)}
		})
	}, [scrolled])

	const setClassName = () => {
		if (scrolled) {
			return "animate__animated animate__pulse"
		} else {
			return ""
		}
	}

	return (
		<Container className={AboutmeStyles.container}>
			
			<h4><PersonFill/> About me</h4>
			<hr/>
			
			<Row>
				<Col xs={12} lg={7}>
					<div className={AboutmeStyles.text}>
						<p className={setClassName()}>
							I'm a fullstack <strong>web developer</strong>, mainly focused on <strong>MERN/MEVN stacks</strong>. I have studied systems administration while learning self-taught my real love: programming. I have specialized in JS-based technologies.
						</p>
						<p className={setClassName()}>
							I invest my time in continuing to improve as a developer and <strong>never stop learning</strong>. I'm currently studying <i>Microservices</i> and <i>Data Analysis</i> in freecodecamp and Udemy, getting better in python.
						</p>
						<p  className={setClassName()}>
							I try to contribute and publish good <strong>open source</strong> apps, always thinking on what could be useful or interesting fot the community. I have <strong>colaborated with remote developers</strong> on small projects for fun, and I believe that being surrounded by a good team is the best asset to succeed. I am also fascinated by UI design, so I always try to make any project look its best in terms of <strong>aesthetics and usability</strong>.
						</p>
					</div>
				</Col>
				<Col xs={12} lg={5}>
					<img src={meSvg} className={AboutmeStyles.meSvg} alt=""/>
				</Col>
			</Row>
		</Container>
	)
}

export default Aboutme