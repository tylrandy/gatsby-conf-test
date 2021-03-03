import React from "react";
import { Link } from 'gatsby'
import {
    navContainer,
    navLinks,
    navLinkItem,
    navLinkText
} from './nav.module.css'


const Nav = () => {
    return (
        <nav className={navContainer}>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to='/' className={navLinkText}>Home</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to='/about' className={navLinkText}>About</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to='/blog' className={navLinkText}>Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;