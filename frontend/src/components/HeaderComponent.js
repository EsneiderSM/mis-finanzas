import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__logo">
                    POCKET
                </div>
                <div className="header__menu">
                    <ul>
                        <li>
                            <Link className="button-outline" to="/home">Home</Link>
                        </li>
                        <li>
                            <Link className="button-outline" to="/expenses">Gastos</Link>
                        </li>
                        <li>
                            <Link className="button-outline" to="/">Salir</Link>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default HeaderComponent;