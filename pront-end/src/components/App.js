import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Login, Join, List } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/" component={Login}/>
                <Route exact path="/Join" component={Join}/>
                <Route exact path="/List" component={List}/>
            </div>
        );
    }
}

export default App;