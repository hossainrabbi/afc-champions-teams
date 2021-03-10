import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Teams from './components/Teams/Teams';
import TeamDetails from './components/TeamDetails/TeamDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Teams />
                </Route>
                <Route path="/team/:teamId">
                    <TeamDetails />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
