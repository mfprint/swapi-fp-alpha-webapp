import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { setFilm } from '../../actions/filmsActions';

class FilmView extends Component {
    componentDidMount = () => {
        if (this.props.filmsList?.length > 0) {
            this.loadFilm();
        }
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
            <div>
                {this.props.film?.title}
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

export default connect(mapStateToProps, { setFilm })(FilmView);