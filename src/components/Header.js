import './header.css'
import React from 'react'
import logo from './assets/taste_logo.png'


function Header() {
    return (
        <div className='container-header'>
            <img className='img-header' src={logo} alt='taste logo' />
        </div>
    )
}

export default Header
