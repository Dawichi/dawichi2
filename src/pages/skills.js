import React from "react"
import Cards from "../components/sections/skills/Cards"
// Components
import Layout from "../components/layout/Layout"
import Metadata from "../components/layout/Metadata"

const Skills = () => {
	return (
		<Layout>
			<Metadata title="Skills" description="My best skills" />

			<Cards/>
		</Layout>
	)
}

export default Skills