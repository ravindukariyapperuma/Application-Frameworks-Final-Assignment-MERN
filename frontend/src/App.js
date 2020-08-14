import React from 'react';
import {BrowserRouter as Router, BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import Homepage from "./components/Homepage";
import Login from "./components/Login"
import Register from "./components/Register";
import Addgame from "./components/Addgame";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path = {'/Addgame'} exact component={Addgame}/>
            <Route path = {'/Register'} exact component={Register}/>
            <Route path = {'/Login'} exact component={Login}/>
            <Route path = {'/'} exact component={Homepage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
