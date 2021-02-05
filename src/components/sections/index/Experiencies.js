import React from "react"
import { Col, Container, Row, Button, Card } from "react-bootstrap"
import { ArrowUpRight, Laptop } from "react-bootstrap-icons"

import ExperienciesStyles from "./Experiencies.module.scss"

import dosespacios from '../../../images/dosespacios.png'
import nubodata from '../../../images/nubodata.png'
import nontech from '../../../images/non-tech.png'

const Experiencies = () => {

	return (
		<Container className={ExperienciesStyles.container}>
			
			<h4><Laptop/> Experiencies</h4>
			<hr/>

			<Row>
				<Col xs={12} sm={6} md={4} lg={3}>
					<Card className={ExperienciesStyles.card}>
						<a href="https://dosespacios.com">
							<Card.Img variant="top" src={dosespacios} alt="dosespacios"/>
						</a>
						<Card.Body className={ExperienciesStyles.cardDosespacios}>
							<Card.Title>Dos Espacios</Card.Title>
							<Card.Subtitle>Frontend developer</Card.Subtitle>
							<p>dec/2020 - now</p>
						</Card.Body>
					</Card>
				</Col>

				<Col xs={12} sm={6} md={4} lg={3}>
					<Card className={ExperienciesStyles.card}>
						<a href="https://nubodata.com">
							<Card.Img variant="top" src={nubodata} alt="nubodata"/>
						</a>
						<Card.Body className={ExperienciesStyles.cardNubodata}>
							<Card.Title>Nubodata</Card.Title>
							<Card.Subtitle>Internship as Sysadmin</Card.Subtitle>
							<p>sep/2020 - dec/2020</p>
						</Card.Body>
					</Card>
				</Col>
				
				<Col xs={12} sm={6} md={4} lg={3}>
					<Card className={ExperienciesStyles.card}>
						<Card.Img variant="top" src={nontech} alt="nontechjobs"/>
						<Card.Body className={ExperienciesStyles.cardNontech}>
							<Card.Title>Non tech jobs</Card.Title>
							<Card.Subtitle>Waiter, storekeeper...</Card.Subtitle>
							<p>17 - 20 years old</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default Experiencies