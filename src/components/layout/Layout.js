import React from "react"
// Components
import Footer from "./Footer"
import Navigationbar from "./Navigationbar"

const Layout = props => {
	return (
		<>
			<Navigationbar/>
				<main>{props.children}</main>
			<Footer />
		</>
	)
}

export default Layout