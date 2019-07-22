import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../styles/NewExpenses.css'
import HeaderComponent from '../components/HeaderComponent';

class NewExpenses extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            type: '',
            date: '',
            description: ''
        };
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:5700/api/expenses', this.setState)
            .then(resp => {
                console.log(resp);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { value, type } = this.state;
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
                                <select name="type" select={type} onChange={this.changeHandler}>
                                    <option value="">Categoría</option>
                                    <option value="Salida">Salida</option>
                                    <option value="Comida">Comida</option>
                                    <option value="Transporte">Transporte</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <div className="btns-add">
                                <Link className="button-outline button-outline-gray" to="/home">- Cancelar</Link>
                                <Link className="button-outline" to="/home">+ Agregar</Link>

                                <button type="submit"
                                    id="blog_post_submit"
                                    className="btn-default btn">
                                    Submit
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