import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '../styles/App.css';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Expenses from '../pages/Expenses';

function App() {
  return (
    <BrowserRouter>
      {/* colocamos las rutas */}
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/expenses" component={Expenses} />
        <Route exact path="/" render={() => (<Redirect to="/login" />)} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
