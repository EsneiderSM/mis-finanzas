import React from 'react';
import axios from 'axios';

import MenuComponent from '../components/MenuComponent';
import ListExpensesComponent from '../components/ListExpensesComponent';

class Expenses extends React.Component {
    state = {
        expenses: []
    }

    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(res => {

                debugger
                this.setState({
                    expenses: res.data.results
                })
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
                <MenuComponent />
                <h2>Listado de gastos</h2>
                <ListExpensesComponent expenses = {this.state.expenses}/>
            </React.Fragment>
        )
    }
}
export default Expenses;