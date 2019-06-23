import React from 'react'

import '../styles/ListExpenses.css';
class ListExpensesComponent extends React.Component {
    render() {
        return (
            <div className="expenses">
                {this.props.expenses.map(expenses => {
                    return (
                        <div key={expenses.id} className="expenses__item">

                            <div>{expenses.name}</div>
                            <div>{expenses.created}</div>
                            <div>{expenses.id}</div>


                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ListExpensesComponent;