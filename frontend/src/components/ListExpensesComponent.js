import React from 'react'

import '../styles/ListExpenses.css';
class ListExpensesComponent extends React.Component {
    render() {
        return (
            <div className="expenses">
                {this.props.expenses.map(expenses => {
                    return (
                        <div key={expenses._id} className="expenses__item">

                            <div>{expenses.createdAt}</div>
                            <div>{expenses.category}</div>
                            <div>{expenses.value}</div>

                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ListExpensesComponent;