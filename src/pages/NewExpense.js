import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NewExpenses.css'
import HeaderComponent from '../components/HeaderComponent';

class NewExpenses extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="wrapper__content">
                    <h2 className="title-section">Nuevo gasto</h2>
                    <div className="white-content balance">
                        <form className="new-expense-form">
                            <div className="control-form">
                                <input type="text" placeholder="Valor" />
                            </div>
                            <div className="control-form">
                                <select>
                                    <option value="0">Categoría</option>
                                    <option value="1">Salida</option>
                                    <option value="2">Comida</option>
                                    <option value="3">Transporte</option>
                                    <option value="4">Otro</option>
                                </select>
                            </div>
                            <div className="btns-add">
                                <Link className="button-outline button-outline-gray" to="/home">- Cancelar</Link>
                                <Link className="button-outline" to="/home">+ Agregar</Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default NewExpenses;