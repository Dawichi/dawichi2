import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Calendar3, Clock } from "react-bootstrap-icons"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
// Components
import Layout from "../components/layout/Layout"
import Metadata from "../components/layout/Metadata"
// Styles
import blogStyles from "./blog.module.scss"

const Blog = () => {

	const data = useStaticQuery(
		graphql`
		  	query {
				allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
			  		edges {
						node {
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
				  			excerpt
				  			id
				  			fields {
								slug
				 			}
						}
			 		}
				}
		  	}
		`
	)

	return (
		<Layout>
			<Metadata title="Blog" description="My last articles" />
				<Container>
					<Row className={blogStyles.container}>
		
						{data.allMarkdownRemark.edges.map(edge => {
							return (
								<Col xs={12} md={6}>
									<Container className={blogStyles.containerPost}>
										<div key={edge.node.id}>
											
											<h2>
												<Link to={`/blog/${edge.node.fields.slug}/`}>
													{edge.node.frontmatter.title}
												</Link>
											</h2>
											
											<div className={blogStyles.postedOn}>
												<p>
													<Calendar3/> Posted on { edge.node.frontmatter.date }  / {" "}
													<Clock/> { edge.node.timeToRead } min read
												</p>
											</div>

											{
												edge.node.frontmatter.featured && (
													<Link to={`/blog/${edge.node.fields.slug}/`}>	
														<Img
															className={blogStyles.featured}
															fluid={edge.node.frontmatter.featured.childImageSharp.fluid}
															alt={edge.node.frontmatter.title}
														/>
													</Link>
												)
											}

											<p className={blogStyles.excerpt}> {edge.node.excerpt} </p>
											
											<div className={blogStyles.button} >
												<Link to={`/blog/${edge.node.fields.slug}/`}>
													<Button variant="outline-dark">Read More</Button>
												</Link>
											</div>
																		
										</div>
									</Container>
								</Col>
							)
						})}
					
					</Row>
				</Container>
		</Layout>
	)
}

export default Blog