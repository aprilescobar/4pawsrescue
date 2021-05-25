import React from 'react'
import { Link } from 'react-router-dom'

const NaviBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>{' | '}
            <Link to="/about">About Us</Link>{' | '}
            <Link to="/contact">Contact Us</Link>{' | '}
            <Link to="/volunteer">Volunteer</Link>{' | '}
            <Link to="/faq">FAQ</Link>{' | '}
            <Link to="/mission">Mission and Values</Link>{' | '}
            <Link to="/adopt">Adopt</Link>{' | '}
            <Link to="/locations">Locations</Link>{' | '}
            <Link to="/donate">Donate</Link>{' | '}
            <Link to="/stories">Foster Stories</Link>{' | '}
        </div>
    )
}

export default NaviBar
