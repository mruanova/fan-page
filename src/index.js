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
 * redirectToTarget = () => {this.props.history.push(`/target`)}
*/
const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/users/1">User 1 </Link>
                </li>
                <li>
                    <Link to="/users/2">User 2 </Link>
                </li>
                <li>
                    <Link to="/users/3">User 3 </Link>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/users/:id" component={Users} />
                <Route path="/contact" component={Contact} />
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
