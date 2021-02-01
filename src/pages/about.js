import React from "react"
import { Container } from "react-bootstrap"
import MeCard from "../components/fragments/MeCard"
// Components
import Layout from "../components/layout/Layout"
import Metadata from "../components/layout/Metadata"
// Styles
import aboutStyles from "./about.module.scss"

const About = () => {
	return (
		<Layout className="layout">
			<Metadata title="About" description="Some info about me" />

			<Container className={aboutStyles.container} fluid>
				<MeCard/>
				<span className={aboutStyles.s1}>HTML</span>
				<span className={aboutStyles.s2}>CSS</span>
				<span className={aboutStyles.s3}>JS</span>
				<span className={aboutStyles.s4}>React</span>
				<span className={aboutStyles.s5}>Gatsby</span>
				<span className={aboutStyles.s6}>Angular</span>
			</Container>
			{/* <div className={aboutStyles.container}>
				<h1 className={aboutStyles.title}>Me!</h1><hr/>

				<p>🖐Hi! My name is David Miguel Fajardo Oubiña.</p>
				<p>I'm a 21 years old web developer from Spain.</p>
				<br/>

				<img
					alt="me"
					className={aboutStyles.imgMe}
					src="https://avatars3.githubusercontent.com/u/51042900?s=460&u=6ea5a1a783846ff39228a3bff3db1a5bf6b8c17d&v=4"
				/>

				<br/>
				<p className={aboutStyles.pJustify}>
					I'm a selft-taught web developer who loves to learn new technologies. I usually spend my time writting CSS / JS, looking for that final feel on my projects wich make them look modern and clean.
				</p>
			</div>

			<div className={aboutStyles.container}>
				<h1 className={aboutStyles.title}>What I do?</h1><hr/>

				<p>💻 I'm currently working as a web developer at <a href="https://www.dosespacios.com/">Dos Espacios</a>.</p>
				<p>📖I keep learning every week, increasing my knowledge on programming.</p>
				<p>📚The main webs I use to study are:</p>
				<p>
					<ul className={aboutStyles.ulist}>
						<li><a href="https://www.freecodecamp.org/">freeCodeCamp</a></li>
						<li><a href="https://www.udemy.com/">Udemy</a></li>
					</ul>
					<ul className={aboutStyles.ulist}>
						<li><a href="https://platzi.com/">Platzi</a></li>
						<li><a href="https://www.w3schools.com/">w3schools</a></li>
					</ul>	
				</p>
			</div>

			<div className={aboutStyles.container}>
				<h1 className={aboutStyles.title}>My hobbies?</h1><hr/>

				<p>😄Languages! I really love studing new languages and new cultures.</p>
				<p className={aboutStyles.pJustify}>
					I'm a native <strong>Spanish</strong> and <strong>Galician</strong> speaker, with a C1 on <strong>English</strong>. Last year I started studing <strong>German</strong> and <strong>Korean</strong>, and I keep increasing my proficiency every week, road to be able to communicate in those countries. I think that nothing opens the mind more than understand new ways to live, thats why I loved undestand how to write and read Korean and I'm sure the next one I'll try will be Chinese.
				</p>
				<br/>

				<p>✈🌍Travel! Since the moment I got my first job, I started planning different trips to another countries, and every year I try to visit a new one.</p>
				<p className={aboutStyles.pJustify}>
					This is close connected to the languages one, same reasons. I dream of living in different countries throughout my life, adapting to different languages, cultures and people. There is a whole world out there ready to be discovered and I want to see it with my own eyes, not through images. Countries checklist:
				</p>
				<p>
					<img alt="spain" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-spain_1f1ea-1f1f8.png" width="30" />
					<img alt="portugal" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-portugal_1f1f5-1f1f9.png" width="30" />
					<img alt="france" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-france_1f1eb-1f1f7.png" width="30" />
					<img alt="andorra" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-andorra_1f1e6-1f1e9.png" width="30" />
					<img alt="czech" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-czech-republic_1f1e8-1f1ff.png" width="30" />
					<img alt="germany" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/flag-for-germany_1f1e9-1f1ea.png" width="30" />
				</p>

				<p>🏀Sport! Mens sana in corpore sano.</p>

				<p>📗 Read a book every two weeks.</p>

				<p>♟ Online chess at breaks.</p>
				
			</div> */}
			
		</Layout>
	)
}

export default About