import React from "react"
import { Link } from "gatsby"
// Components
import Layout from "../components/layout/Layout"
import Metadata from "../components/layout/Metadata"

const NotFound = () => {
	return (
		<Layout>
			<Metadata title="404" description="404 - Page not found" />
			<h1>404: Page Not Found</h1>
			<p>
				<Link to="/blog/">Check our latest articles</Link>
			</p>
		</Layout>
	)
}

export default NotFound