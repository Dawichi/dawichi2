import React from "react"

// Components
import Layout from "../components/layout/Layout"
import Metadata from "../components/layout/Metadata"

// Components/sections/index
import Landing from "../components/sections/index/Landing"
import Skillbars from "../components/sections/index/Skillbars"
import Experiencies from "../components/sections/index/Experiencies"
import Education from "../components/sections/index/Education"
import Projects from "../components/sections/index/Projects"

// Styles
import indexStyles from "./index.module.scss"
import Aboutme from "../components/sections/index/Aboutme"



const Index = () => {

	return (
		<Layout>
			<Metadata title="Home" description="My home page" />

			<Landing/>
			
			<Skillbars/><br/>
			<Aboutme/><br/>
			<Experiencies/><br/>
			<Education/><br/>
			<Projects/><br/>
			
			
			
		</Layout>
	)
}

export default Index