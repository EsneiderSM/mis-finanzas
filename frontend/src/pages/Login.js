import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Login.css';

class Login extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Click!!")
    }

    render() {
        return (
            <div className="login">
                <h1>Login</h1>
                <form className="login__form">

                    <div className="control-form">
                        <input type="text" placeholder="Usuario" />
                    </div>

                    <div className="control-form">
                        <input type="password" placeholder="Contraseña" />
                    </div>

                    <div className="control-form">
                        <Link to="/home">
                            <button className="button button-white">Ingresar</button>
                        </Link>
                    </div>

                </form>
            </div>
        )
    }
}
export default Login;