import * as React from "react";
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <title>About Page</title>
            <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            </nav>
            <h1>About Page</h1>
            <p>This is the about page of the example website</p>
        </main>
    )
}

export default AboutPage;