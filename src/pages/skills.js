import React from "react"
import SkillsCards from "../components/fragments/SkillsCards"
// Components
import Layout from "../components/layout/Layout"
import Metadata from "../components/layout/Metadata"

const Skills = () => {
	return (
		<Layout>
			<Metadata title="Skills" description="My best skills" />

			<SkillsCards/>
		</Layout>
	)
}

export default Skills