import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

class MenuComponent extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__logo">
                    logo
                </div>
                <div className="header__menu">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/expenses">Gastos</Link>
                        </li>
                        <li>
                            <Link to="/expenses">Salir</Link>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default MenuComponent;