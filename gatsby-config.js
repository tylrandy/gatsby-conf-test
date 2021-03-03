module.exports = {
    siteMetadata: {
        description: "A test site built following the workshop at the Gatsby Conf",
        title: "Gatsby Workshop Test Site"
    },
    plugins: [
        `gatsby-plugin-gatsby-cloud`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/blog/`,
            },
        },
        `gatsby-plugin-mdx`
    ],
};