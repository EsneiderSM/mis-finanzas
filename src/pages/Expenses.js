import React from 'react'
import axios from 'axios'

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
        return <h1>Gastos</h1>
    }
}
export default Expenses;