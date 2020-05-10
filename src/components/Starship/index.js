import React, { Component } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BreadCrumbs from '../BreadCrumbs';
import { setFilm } from '../../actions/filmsActions';
import { fetchStarship, verifyStarshipModification, fetchStarshipById, emptyStarship } from '../../actions/starshipsActions';
import StarshipForm from '../StarshipForm';

class StarshipView extends Component {
    componentDidMount = () => {
        var { starshipModel } = this.props.match.params;
        this.props.emptyStarship();
        
        if (this.props.filmsList?.length > 0) {
            this.loadFilm();
        }

        this.props.verifyStarshipModification(starshipModel)
            .then(id => {
                if (id !== -1) {
                    this.props.fetchStarshipById(id);
                }
                else {
                    this.props.fetchStarship(starshipModel);
                }
            });
    }

    loadFilm = () => {
        var { filmTitle } = this.props.match.params;
        this.props.setFilm(filmTitle);
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.filmsList !== prevProps.filmsList) {
            this.loadFilm();
        }
    }

    render = () => {
        return (
            <div className='starship-container'>
                <BreadCrumbs>
                    <Link className='return-link' to='/'>Films</Link>
                    <Link className='return-link' to={`/film/${this.props.film?.title}`}>{this.props.film?.title}</Link>
                    <h2>{this.props.starship?.name}</h2>
                </BreadCrumbs>
                <StarshipForm />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        filmsList: state.filmsList,
        film: state.film,
        starship: state.starship
    }
}

export default connect(mapStateToProps, {
    setFilm, fetchStarship, verifyStarshipModification,
    fetchStarshipById, emptyStarship
})(StarshipView);