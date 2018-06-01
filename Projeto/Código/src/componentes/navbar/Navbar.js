import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import './Navbar.css'


function Navbar(props) {
    return (
        <header className="navbar">
            <a onClick={props.onLogoClick}>
                <Logo />
            </a>

            <Menu 
                usuario={props.usuario}
                onQuemSomosClick={props.onQuemSomosClick}
                onContatoClick={props.onContatoClick}
                onLoginClick={props.onLoginClick}
                onSairClick={props.onSairClick}
            />
        </header>
    )
}

export default Navbar