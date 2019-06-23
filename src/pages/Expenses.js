import React from 'react';
import axios from 'axios';

import HeaderComponent from '../components/HeaderComponent';
import ListExpensesComponent from '../components/ListExpensesComponent';

import '../styles/Expenses.css'

class Expenses extends React.Component {
    
    state = {
        expenses: []
    }

    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(res => {

                this.setState({
                    expenses: res.data.results
                })
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="wrapper__content">
                    <h2 className="title-section">Tus gastos</h2> 
                    <div className="white-content">
                        <ListExpensesComponent expenses={this.state.expenses} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Expenses;