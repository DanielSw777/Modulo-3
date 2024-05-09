import React from 'react';
import './Header.css'

  
function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="container-icon-list">
                    <i className="icon-list bi bi-list"></i>
                </div>
                <div className="social-icons">
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-instagram"></i>
                </div>
                <div className="container-logo">
                    <img className="logo" src="/images/PANIFICADOS INTEGRALES.png" alt="Logo" />
                </div>
                <div className="user">
                    <div className="user-container-register">
                        <a className="user-account" href="/Register">CREAR CUENTA</a>
                        <a className="user-sesion" href="/Login">INICIAR SESIÓN</a>
                    </div>
                    <div className="user-container-cart">
                        <a href="/Cart"><i className="user-cart bi bi-cart2"></i></a>
                        <div className="container-count">
                            <span className="user-count">0</span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="tabs">
                <ul className="tabs-list">
                    <li className="tabs-list-item"><a className="tabs-item-link" href="/">INICIO</a></li>
                    <li className="tabs-list-item"><a className="tabs-item-link" href="/Products">PRODUCTOS</a></li>
                    <li className="tabs-list-item"><a className="tabs-item-link" href="/Contact">CONTACTO</a></li>
                    <li className="tabs-list-item"><a className="tabs-item-link" href="/AboutUs">NOSOTROS</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
