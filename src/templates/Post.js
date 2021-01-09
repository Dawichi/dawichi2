import React from "react"
import { Container } from "react-bootstrap"
import { Calendar3, Clock } from "react-bootstrap-icons"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// Components
import Layout from "../components/layout/Layout"
import Metadata from "../components/layout/Metadata"
// Styles
import postStyles from "./Post.module.scss"


export const query = graphql`
  	query($slug: String!) {
   		markdownRemark(fields: { slug: { eq: $slug } }) {
      		frontmatter {
        		title
				date(formatString: "DD MMMM, YYYY")
				featured {
					childImageSharp {
					  	fluid(maxWidth: 750) {
							...GatsbyImageSharpFluid
					  	}
					}
				}
      		}
      		timeToRead
      		html
    	}
  	}
`

const Post = props => {
	return (
		<Layout>
			<Container>
				<Metadata title={props.data.markdownRemark.frontmatter.title} />
				<div className={postStyles.content}>
					<h1>{props.data.markdownRemark.frontmatter.title}</h1>

					<div className={postStyles.postedOn}>
						<Calendar3/> Posted on {props.data.markdownRemark.frontmatter.date}{" "}
						<span> / </span> <Clock/> {props.data.markdownRemark.timeToRead} min read
					</div>

					{props.data.markdownRemark.frontmatter.featured && (
						<Img
							className={ postStyles.featured }
							fluid={ props.data.markdownRemark.frontmatter.featured.childImageSharp.fluid }
							alt={ props.data.markdownRemark.frontmatter.title }
						/>
					)}

					<Container>
						<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} >
						</div>
					</Container>
					
				</div>
			</Container>
		</Layout>
	)
}

export default Post