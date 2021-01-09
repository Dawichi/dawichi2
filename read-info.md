# Plugins used

### SASS
`node-sass` compiles .scss files into .css  
`gatsby-plugin-sass` allows us to do that in a Gatsby project

### Bootstrap
`react-bootstrap` Bootstrap components  
`bootstrap` Basic bootstrap 4

### Google Fonts
`gatsby-plugin-google-fonts`

### Markdown
`gatsby-source-filesystem` source data into gatsby from local filesystem
> __dirname is a method of NodeJS that returns the absolute path of the currently running file

`gatsby-transformer-remark` transforms markdown into HTML

### Images
`gatsby-remark-images` allows use images on markdown posts and add responsive optimization
`gatsby-plugin-sharp` reduce the size of images to the minimum required for the website size

`gatsby-image` React component that allows render optimized image
`gatsby-transformer-sharp` Expose the node childImageSharp for processing the images

### SEO
`react-helmet` Manage document head: title, description, ...
`gatsby-plugin-react-helmet` Pulls that tags into Gatsby page