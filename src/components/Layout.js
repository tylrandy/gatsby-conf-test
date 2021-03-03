import React from "react";
import Nav from '../components/Nav'
import { useStaticQuery, graphql } from 'gatsby';
import {
    container,
    heading,
} from './layout.module.css'

const Layout = ({ pageTitle, children}) => {
    const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <header>
                <Nav/>
            </header>
            <main>
                <p>{data.site.siteMetadata.title}</p>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;