import React from "react"
import { Col, Container, Row, Card } from "react-bootstrap"
import { Book } from "react-bootstrap-icons"

import EducationStyles from "./Education.module.scss"
import cotarelo from '../../../images/asir.png'

const Education = () => {

	return (
		<Container className={EducationStyles.container}>
		
			<h4><Book/> Education</h4>
			<hr/>

			<Row>
				<Col xs={12} sm={6} md={4} lg={3}>
					<Card className={EducationStyles.card}>
						<Card.Img variant="top" src={cotarelo} alt="cotarelo"/>
						<Card.Body className={EducationStyles.cardCotarelo}>
							<Card.Title>System Administration</Card.Title>
							<Card.Subtitle>Higher Technical Certificate</Card.Subtitle>
							<p>sept/2017 - jun/2020</p>
						</Card.Body>
					</Card>
				</Col>

			</Row>
		</Container>
	)
}

export default Education