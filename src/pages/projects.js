import React from "react"
// Components
import Layout from "../components/layout/Layout"
import Metadata from "../components/layout/Metadata"

const Projects = () => {
	return (
		<Layout>
			<Metadata title="Projects" description="My last projects" />
			<h1>Projects Page</h1>
			<p>My projects.</p>
		</Layout>
	)
}

export default Projects