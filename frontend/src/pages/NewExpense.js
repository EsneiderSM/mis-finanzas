import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/NewExpenses.css'
import HeaderComponent from '../components/HeaderComponent';

class NewExpenses extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            category: '',
            description: ''
        };
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = e => {

        e.preventDefault();

        let headers = {
            'Content-Type': 'application/json'
        }

        let data = JSON.parse(JSON.stringify(this.state));
        axios.post('http://localhost:8080/api/expense', data, { headers: headers })
            .then(resp => {
                this.props.history.push("/home");
            })
            .catch(error => {
                console.error(error);
            })
    }

    render() {
        const { value, category } = this.state;
        return (
            <div>
                <HeaderComponent />
                <div className="wrapper__content">
                    <h2 className="title-section">Nuevo gasto</h2>
                    <div className="white-content balance">
                        <form className="new-expense-form" onSubmit={this.submitHandler}>
                            <div className="control-form">
                                <input name="value" type="text" placeholder="Valor" value={value} onChange={this.changeHandler} />
                            </div>
                            <div className="control-form">
                                <select name="category" select={category} onChange={this.changeHandler}>
                                    <option value="">Categoría</option>
                                    <option value="Salida">Salida</option>
                                    <option value="Comida">Comida</option>
                                    <option value="Transporte">Transporte</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <div className="btns-add">
                                <Link className="button button-outline button-outline-gray" to="/home">- Cancelar</Link>

                                <button className="button button-outline" type="submit">
                                    + Agregar
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default NewExpenses;