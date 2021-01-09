import React from "react"
import { Col, Container, Row, Button, Card } from "react-bootstrap"
import { ArrowUpRight } from "react-bootstrap-icons"

import ExperiencieSectionStyles from "./ExperiencieSection.module.scss"

import dosespacios from '../../images/dosespacios.png'
import nubodata from '../../images/nubodata.png'
import nontech from '../../images/non-tech.png'

const ExperiencieSection = () => {

	return (
		<Container className={ExperiencieSectionStyles.experiencieSection} fluid>

			<Container className={ExperiencieSectionStyles.experiencies} fluid>
				<Row>
					<Col xs={12} md={4} lg={3} height="100%">
						<h4>Experiencies</h4>
						<Button variant="info" href="https://www.linkedin.com/in/dawichi/" target="blank" className={ExperiencieSectionStyles.button}><ArrowUpRight/> More info</Button>
					</Col>

					<Col xs={12} md={4} lg={3}>
						<Card className={ExperiencieSectionStyles.card}>
							<a href="https://dosespacios.com">
								<Card.Img variant="top" src={dosespacios} alt="dosespacios"/>
							</a>
							<Card.Body className={ExperiencieSectionStyles.cardDosespacios}>
								<Card.Title>Dos Espacios</Card.Title>
								<Card.Subtitle>Frontend developer</Card.Subtitle>
								<p>dec/2020 - now</p>
							</Card.Body>
						</Card>
					</Col>


					<Col xs={12} md={4} lg={3}>
						<Card className={ExperiencieSectionStyles.card}>
							<a href="https://nubodata.com">
								<Card.Img variant="top" src={nubodata} alt="nubodata"/>
							</a>
							<Card.Body className={ExperiencieSectionStyles.cardNubodata}>
								<Card.Title>Nubodata</Card.Title>
								<Card.Subtitle>Internship as Sysadmin</Card.Subtitle>
								<p>sep/2020 - dec/2020</p>
							</Card.Body>
						</Card>
					</Col>
					
					<Col xs={12} md={4} lg={3}>
						<Card className={ExperiencieSectionStyles.card}>
							<Card.Img variant="top" src={nontech} alt="nontechjobs"/>
							<Card.Body className={ExperiencieSectionStyles.cardNontech}>
								<Card.Title>Non tech jobs</Card.Title>
								<Card.Subtitle>Waiter, storekeeper...</Card.Subtitle>
								<p>17 - 20 years old</p>
							</Card.Body>
						</Card>
					</Col>


				</Row>
			</Container>
		</Container>
	)
}

export default ExperiencieSection