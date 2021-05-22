import React from 'react'
import { Link } from 'react-router-dom'

const NaviBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>{' | '}
            <Link to="/about">About Us</Link>{' | '}
            <Link to="/contact">Contact Us</Link>{' | '}
            <Link to="/volunteer">Volunteer</Link>{' | '}
            <Link to="/faq">FAQ</Link>
        </div>
    )
}

export default NaviBar
