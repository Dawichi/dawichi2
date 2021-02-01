import React from "react"
import { Container, Row } from "react-bootstrap"
import { SuitHeartFill } from 'react-bootstrap-icons'
// Components
import Layout from "../components/layout/Layout"
import Metadata from "../components/layout/Metadata"
// Components/indexsections
import AboutmeSection from '../components/indexsections/AboutmeSection'
import ExperiencieSection from '../components/indexsections/ExperiencieSection'
import StudiesSection from '../components/indexsections/StudiesSection'
import ProjectsSection from '../components/indexsections/ProjectsSection'
// Styles
import indexStyles from "./index.module.scss"

const Index = () => {
	return (
		<Layout>
			<Metadata title="Home" description="My home page" />
			
			<Container fluid className={indexStyles.greetsContainer}>
				<Container className={indexStyles.greets}>
					<Row><h2>Hi all <SuitHeartFill/></h2></Row>
					<Row><h2>I am <span><strong>David M. Fajardo</strong></span></h2></Row>
					<Row><h2 className={indexStyles.underline}>Welcome to my <span>portfolio</span>!</h2></Row>
				</Container>

				<AboutmeSection/>{/* Who i am and what i can do */}
			</Container>


			
			<ExperiencieSection/>{/* My experiencie on jobs */}
			
			<StudiesSection/>{/* My formal education */}
			
			<ProjectsSection/>{/* My github projects */}
			

		</Layout>
	)
}

export default Index