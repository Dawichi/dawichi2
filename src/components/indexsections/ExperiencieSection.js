import React from "react"
import { Col, Container, Row, Button, Card } from "react-bootstrap"
import { ArrowUpRight, Laptop } from "react-bootstrap-icons"

import ExperiencieStyles from "./ExperiencieSection.module.scss"

import dosespacios from '../../images/dosespacios.png'
import nubodata from '../../images/nubodata.png'
import nontech from '../../images/non-tech.png'

const ExperiencieSection = () => {

	return (
		<Container className={ExperiencieStyles.experienciesContainer} fluid>

			<Container className={ExperiencieStyles.experiencies} fluid>
				<Row>
					<Col xs={12} sm={6} md={4} lg={3} height="100%">
						<h4><Laptop/> Experiencies</h4>
						<Button variant="info" href="https://www.linkedin.com/in/dawichi/" target="blank" className={ExperiencieStyles.button}><ArrowUpRight/> More info</Button>
					</Col>

					<Col xs={12} sm={6} md={4} lg={3}>
						<Card className={ExperiencieStyles.card}>
							<a href="https://dosespacios.com">
								<Card.Img variant="top" src={dosespacios} alt="dosespacios"/>
							</a>
							<Card.Body className={ExperiencieStyles.cardDosespacios}>
								<Card.Title>Dos Espacios</Card.Title>
								<Card.Subtitle>Frontend developer</Card.Subtitle>
								<p>dec/2020 - now</p>
							</Card.Body>
						</Card>
					</Col>


					<Col xs={12} sm={6} md={4} lg={3}>
						<Card className={ExperiencieStyles.card}>
							<a href="https://nubodata.com">
								<Card.Img variant="top" src={nubodata} alt="nubodata"/>
							</a>
							<Card.Body className={ExperiencieStyles.cardNubodata}>
								<Card.Title>Nubodata</Card.Title>
								<Card.Subtitle>Internship as Sysadmin</Card.Subtitle>
								<p>sep/2020 - dec/2020</p>
							</Card.Body>
						</Card>
					</Col>
					
					<Col xs={12} sm={6} md={4} lg={3}>
						<Card className={ExperiencieStyles.card}>
							<Card.Img variant="top" src={nontech} alt="nontechjobs"/>
							<Card.Body className={ExperiencieStyles.cardNontech}>
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