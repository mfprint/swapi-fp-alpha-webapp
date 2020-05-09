import React, { Component } from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import FilmView from './views/FilmView';
import StarshipView from './views/StarshipView';

class App extends Component {
    render = () => {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={HomeView} />
                    <Route exact path='/film/:filmTitle' component={FilmView} />
                    <Route exact path='/starship/:starshipId' component={StarshipView} />
                </Switch>
            </HashRouter>
        )
    }
}

export default App;