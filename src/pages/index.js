import * as React from "react"
import Layout from '../components/Layout';
import { StaticImage } from "gatsby-plugin-image";


// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home | Gatsby Conf 2021">
      <StaticImage 
        src="https://source.unsplash.com/random"
        alt="random image from unsplash"
       />
    </Layout>
    
  )
}

export default IndexPage
