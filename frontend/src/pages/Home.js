import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Home.css';
import HeaderComponent from '../components/HeaderComponent';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="wrapper__content">
                    <h2 className="title-section">Tu saldo</h2> 
                    <div className="white-content balance">
                        <div>
                            <h3>Disponible</h3>
                            <span className="balance__balance-number">$450.000</span>
                        </div>
                        <div>
                            <h3>Total gastos mes</h3>
                            <span className="balance__balance-number">$655.000</span>
                        </div>
                        <div className="btns-add">
                            <Link className="button-outline" to="/new-expense">+ Ingreso</Link>
                            <Link className="button-outline" to="/new-expense">+ Gasto</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;