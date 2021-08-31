import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ListData from './components/ListData';
import About from './components/About';
import Login from './components/Login';
import SignUp  from './components/SignUp';
import Home from './components/Home';

function Main(){
return (
    <Switch>
        <Route exact path="/">
      <Home/>
        </Route>
    <Route path="/sign-up">
      <SignUp />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/listData">
      <div className="container">
        <ListData />
      </div>
    </Route>
  </Switch>
)

}

export default Main;


