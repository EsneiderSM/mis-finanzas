import React from 'react'

import '../styles/ListExpenses.css';
class ListExpensesComponent extends React.Component {
    render() {
        return (
            <div className="expenses">
                {this.props.expenses.map(expenses => {
                    return (
                        <div key={expenses.id} className="expenses__item">

                            <div>{expenses.date}</div>
                            <div>{expenses.type}</div>
                            <div>{expenses.value}</div>

                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ListExpensesComponent;