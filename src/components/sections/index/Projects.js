import React from "react"
import { Col, Container, Row, Button } from "react-bootstrap"

import ProjectsStyles from "./Projects.module.scss"
import { Link } from "gatsby"
import { Envelope, Github } from "react-bootstrap-icons"

const Projects = () => {

	return (
		<>
			<Container className={ProjectsStyles.container}>

				<h4><Github/> Open source projects</h4>
				<hr/>
				
				<Row>
					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/dawichi.dev" target="blank">
							<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=dawichi.dev&theme=custom" alt="project1" />
						</a>
					</Col>

					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/cloud-app" target="blank">
							<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=cloud-app&theme=custom" alt="project2" />
						</a>
					</Col>

					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/gif-expert-app" target="blank">
							<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=gif-expert-app&theme=custom" alt="project3" />
						</a>
					</Col>

					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/dawichi-card" target="blank">
							<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=dawichi-card&theme=custom" alt="project4" />
						</a>
					</Col>

					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/ReactHooks" target="blank">
							<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=ReactHooks&theme=custom" alt="project5" />
						</a>
					</Col>

					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/w3-bootstrap4" target="blank">
							<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=w3-bootstrap4&theme=custom" alt="project6" />
						</a>
					</Col>
				</Row>

				<Row><Button variant="info"><Link to="/projects/">My projects</Link></Button></Row>
			</Container>





			<br/>

			<Container className={ProjectsStyles.contactContainer}>
				
				<h4><Envelope/> Get in touch</h4>
				<hr/>
				<Row>
					<Button variant="info">Contact me</Button>
				</Row>
			</Container>

			
		</>
	)
}

export default Projects