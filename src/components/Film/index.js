import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { setFilm } from '../../actions/filmsActions';
import { fetchStarshipsList } from '../../actions/starshipsActions';
import StarshipsList from '../StarshipsList';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../BreadCrumbs';

class FilmView extends Component {
    componentDidMount = () => {
        if (this.props.filmsList?.length > 0) {
            this.loadFilm();
        }
    }

    loadFilm = () => {
        var { filmTitle } = this.props.match.params;
        this.props.setFilm(filmTitle).then(() => {
            this.props.fetchStarshipsList();
        });
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.filmsList !== prevProps.filmsList) {
            this.loadFilm();
        }
    }

    render = () => {
        return (
            <div className='film-container'>
                <BreadCrumbs>
                    <Link className='return-link' to='/'>Films</Link>
                    <h2>{this.props.film?.title}</h2>
                </BreadCrumbs>
                <StarshipsList />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filmsList: state.filmsList,
        film: state.film,
    }
}

export default connect(mapStateToProps, { setFilm, fetchStarshipsList })(FilmView);