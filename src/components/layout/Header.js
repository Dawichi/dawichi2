import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
// Components
import Navigationbar from "./Navigationbar"
// Styles
import headerStyles from "./Header.module.scss"

const Header = () => {

	const data = useStaticQuery(
		graphql`
		  	query {
				site {
			  		siteMetadata {
						title
						description
			  		}
				}
		  	}
		`
	  )

	return (
		<>
			<header className={headerStyles.header}>
				<div className={ headerStyles.overlay }></div>

				<div className={ headerStyles.content }>
					<p className={ headerStyles.brand }>
						<Link to="/">{data.site.siteMetadata.title}</Link>
					</p>
					<p className={ headerStyles.description }>
						{data.site.siteMetadata.description}
					</p>
				</div>
			</header>
			
			<Navigationbar/>
			
		</>		
	)
}

export default Header