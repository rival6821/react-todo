import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={Login}/>
            </div>
        );
    }
}

export default App;