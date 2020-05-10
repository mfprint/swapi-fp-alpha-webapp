import React, { Component } from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HomeView from './components/Home';
import FilmView from './components/Film';
import StarshipView from './components/Starship';
import MainTemplate from './templates/MainTemplate';
import { connect } from 'react-redux';
import { fetchFilmsList } from './actions/filmsActions';

class App extends Component {
    componentDidMount = () => {
        this.props.fetchFilmsList();
    }

    render = () => {
        return (
            <HashRouter>
                <MainTemplate>
                    <Switch>
                        <Route exact path='/' component={HomeView} />
                        <Route exact path='/film/:filmTitle' component={FilmView} />
                        <Route exact path='/film/:filmTitle/starship/:starshipModel' component={StarshipView} />
                    </Switch>
                </MainTemplate>
            </HashRouter>
        )
    }
}

export default connect(null, { fetchFilmsList })(App);