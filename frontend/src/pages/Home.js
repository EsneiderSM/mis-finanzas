import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../styles/Home.css';
import HeaderComponent from '../components/HeaderComponent';

class Home extends React.Component {

    state = {
        expenses: [],
        total: "0"
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/expense')
            .then(res => {
                this.setState({
                    expenses: res.data.data
                });

                this.sumValues();

            }).catch(err => console.log(err))
    }

    sumValues = e => {

        let total = 0;
        this.state.expenses.forEach(element => {
            total += element.value;
        });

        this.setState({
            total: `$${total}`
        });

    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="wrapper__content">
                    <h2 className="title-section">Tu saldo</h2>
                    <div className="white-content balance">
                        <div>
                            <h3>Total gastos mes</h3>
                            <span className="balance__balance-number">{this.state.total}</span>
                        </div>
                        <div className="btns-add">
                            {/* <Link className="button-outline" to="/new-expense">+ Ingreso</Link> */}
                            <Link className="button button-outline" to="/new-expense">Nuevo Gasto</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;