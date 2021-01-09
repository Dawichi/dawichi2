import React from "react"
import { Col, Container, Row, Button, Card } from "react-bootstrap"
import { ArrowUpRight } from "react-bootstrap-icons"

import StudiesSectionStyles from "./StudiesSection.module.scss"
import cotarelo from '../../images/asir.png'

const StudiesSection = () => {

	return (
		<Container className={StudiesSectionStyles.studiesSection} fluid>

			<Container className={StudiesSectionStyles.studies} fluid>
				<Row>
					<Col xs={12} md={4} lg={3} height="100%">
						<h4>Education</h4>
						<Button variant="info" href="https://www.linkedin.com/in/dawichi/" target="blank" className={StudiesSectionStyles.button}><ArrowUpRight/> More info</Button>
					</Col>

					<Col xs={12} md={4} lg={3}>
						<Card className={StudiesSectionStyles.card}>
							<Card.Img variant="top" src={cotarelo} alt="cotarelo"/>
							<Card.Body className={StudiesSectionStyles.cardCotarelo}>
								<Card.Title>System Administration</Card.Title>
								<Card.Subtitle>Higher Technical Certificate</Card.Subtitle>
								<p>sept/2017 - jun/2020</p>
							</Card.Body>
						</Card>
					</Col>

				</Row>
			</Container>
		</Container>
	)
}

export default StudiesSection