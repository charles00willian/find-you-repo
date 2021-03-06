import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../pages/Home';
import Repository from '../pages/Repository';

//Realiza o roteamento da aplicação
function Routes() {
  return (
  <Router>
    <Switch>
      <Route path="/repository" >
        <Repository/>
      </Route>
      <Route path="/" >
        <Home/>
      </Route>
    </Switch>
  </Router>
  );
}

export default Routes;