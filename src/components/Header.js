import './header.css'
import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className='container-header'>
            <img className='img-header' src='taste_logo.png' alt='taste logo' />
            <div className='links-header'>
                <h4>Login</h4>
                <h4>Register</h4>
            </div>
        </div>
    )
}

export default Header
