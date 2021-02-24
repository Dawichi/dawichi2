import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Globe2 } from 'react-bootstrap-icons'

import world from '../../../images/svg/languages.svg'
import LanguagesStyles from "./Languages.module.scss"

const Languages = () => {

	return (
		<Container className={LanguagesStyles.container}>
			
			<h4><Globe2/> Languages</h4>
			<hr/>
			
			<Row>
				<Col xs={12} md={6}>
					<img src={world} alt="" className={LanguagesStyles.worldSvg} />
				</Col>
				<Col xs={12} md={6}>
					<Container className={LanguagesStyles.langBarContainer}>
						<Row>
							<h5>Spanish</h5><br/>
							<div className={LanguagesStyles.progress}>
								<div className={LanguagesStyles.spanish}></div>
							</div>
						</Row>
						<Row>
							<h5>Galician</h5><br/>
							<div className={LanguagesStyles.progress}>
								<div className={LanguagesStyles.galician}></div>
							</div>
						</Row>
						<Row>
							<h5>English</h5><br/>
							<div className={LanguagesStyles.progress}>
								<div className={LanguagesStyles.english}></div>
							</div>
						</Row>
						<Row>
							<h5>German</h5><br/>
							<div className={LanguagesStyles.progress}>
								<div className={LanguagesStyles.german}></div>
							</div>
						</Row>
						<Row>
							<h5>Korean</h5><br/>
							<div className={LanguagesStyles.progress}>
								<div className={LanguagesStyles.korean}></div>
							</div>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	)
}

export default Languages