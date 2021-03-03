import React from "react";
import Nav from '../components/Nav'

import {
    container,
    heading,
} from './layout.module.css'

const Layout = ({ pageTitle, children}) => {
    return (
        <div className={container}>
            <title>{pageTitle}</title>
            <header>
                <Nav/>
            </header>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout;