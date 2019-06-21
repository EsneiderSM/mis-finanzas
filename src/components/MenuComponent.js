import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class MenuComponent extends Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/expenses">Gastos</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MenuComponent;