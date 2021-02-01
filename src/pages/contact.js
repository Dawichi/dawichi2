import React from "react"
import { Col, Container, Row } from "react-bootstrap"
// Components
import Layout from "../components/layout/Layout"
import Metadata from "../components/layout/Metadata"

const Contact = () => {
	return (
		<Layout>
			<Metadata title="Contact" description="Contact me" />
			<Container>
				<Row>
					<Col xs={12} md={8} lg={6}>Contact page</Col>
				</Row>
			</Container>
		</Layout>
	)
}

export default Contact