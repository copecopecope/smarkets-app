import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Event from './Event.js'; 

class App extends Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/event/:id" component={Event} />
                </Switch>
            </div>
        );
    }
}

export default App;
