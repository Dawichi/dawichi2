import React from "react"
import { Col, Container, Row, Button, Card } from "react-bootstrap"

import ProjectsSectionStyles from "./ProjectsSection.module.scss"
import { Link } from "gatsby"

const ProjectsSection = () => {

	return (
		<>
			<Container className={ProjectsSectionStyles.projectsSection} fluid>

				<Row><h4>Open Source Projects</h4></Row>

				<Row><Container><Row><Col><hr/></Col></Row></Container></Row>

				<Row>
					<Container>
						<Row>
							<Col xs={12} md={6} lg={4}>
								<a href="https://github.com/dawichi/dawichi.dev" target="blank">
									<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=dawichi.dev&theme=custom" />
								</a>
							</Col>

							<Col xs={12} md={6} lg={4}>
								<a href="https://github.com/dawichi/cloud-app" target="blank">
									<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=cloud-app&theme=custom" />
								</a>
							</Col>

							<Col xs={12} md={6} lg={4}>
								<a href="https://github.com/dawichi/gif-expert-app" target="blank">
									<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=gif-expert-app&theme=custom " />
								</a>
							</Col>

							<Col xs={12} md={6} lg={4}>
								<a href="https://github.com/dawichi/dawichi-card" target="blank">
									<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=dawichi-card&theme=custom " />
								</a>
							</Col>

							<Col xs={12} md={6} lg={4}>
								<a href="https://github.com/dawichi/ReactHooks" target="blank">
									<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=ReactHooks&theme=custom " />
								</a>
							</Col>

							<Col xs={12} md={6} lg={4}>
								<a href="https://github.com/dawichi/w3-bootstrap4" target="blank">
									<img src="https://github-readme-stats.dawichi.vercel.app/api/pin/?username=dawichi&repo=w3-bootstrap4&theme=custom" />
								</a>
							</Col>
						</Row>
					</Container>
				</Row>
			</Container>

			<Container className={ProjectsSectionStyles.contactContainer} fluid>
				<Row>
					<h4>Get in touch</h4>
				</Row>
				<Row>
					<Button variant="info"><Link to="/contact/">Contact me</Link></Button>
				</Row>
			</Container>
		</>
	)
}

export default ProjectsSection