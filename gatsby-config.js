module.exports = {
	siteMetadata: {
		title: `Dawichi`,
		description: `Web developer, JavaScript lover.`,
		author: `Dawichi`,
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		`gatsby-plugin-styled-components`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "src",
				path: `${__dirname}/src/`,
			},
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
