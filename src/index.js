import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Users from './users';
import Contact from './contact';
import Notfound from './notfound';
/**
 * Redirecting in React - Annee Barrett - Medium
 * https://medium.com › redirecting-in-react-4de5e517354a
*/
const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/users/:id" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} />
        </Switch>
    </Router>
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
