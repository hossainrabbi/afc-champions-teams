import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Teams from './components/Teams/Teams';
import TeamDetails from './components/TeamDetails/TeamDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NotFound from './components/NotFound/NotFound';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Teams />
                </Route>
                <Route exact path="/team/:teamId">
                    <TeamDetails />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
