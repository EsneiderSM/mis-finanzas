import React from 'react'

class ListExpensesComponent extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.expenses.map(expenses => {
                    return(
                        <li key={expenses.id} className='Profile__section-name-list'>
                            <div>
                                {expenses.name}
                                <br/>
                                {expenses.created}
                                <br/>
                                {expenses.id}
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
export default ListExpensesComponent;