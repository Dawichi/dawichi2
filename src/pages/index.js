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
			
			<div className={indexStyles.overlay}>
				<Container className={indexStyles.greetsSection} fluid>
					<Container className={indexStyles.subtitle}>
						<Row><h2>Hi all, I am Dawichi! <SuitHeartFill/></h2></Row>
						<Row><h2>Welcome to my portfolio!</h2></Row>
						<Row><p> </p></Row>
						<Row><h2>IMPORTANT: THIS SITE IS UNDER CONSTRUCTION, ITS INCOMPLETE!</h2></Row>
						<Row><h2>YOU CAN FOLLOW THE DEVELOPMENT ON GITHUB</h2></Row>
					</Container>

					<AboutmeSection/>{/* Who i am and what i can do */}
				</Container>
			</div>
			
			
			<ExperiencieSection/>{/* My experiencie on jobs */}
			
			<StudiesSection/>{/* My formal education */}
			
			<ProjectsSection/>{/* My github projects */}
			

		</Layout>
	)
}

export default Index