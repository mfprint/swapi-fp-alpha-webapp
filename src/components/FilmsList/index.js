import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const FilmItem = (props) => {
    return (
        <div className='film-item'>
            <div className='film-title'>{props.title}</div>
            <div className='film-director'>{props.director}</div>
            <div className='film-starships'>
                <Link className='film-starships-btn' to={`/film/${props.title}`}>
                    Starships
                </Link>
            </div>
        </div>
    )
}


class FilmsList extends Component {
    render = () => {
        return (
            <div className='films-list'>
                {this.props.filmsList?.map((film, i) => {
                    return <FilmItem key={i} {...film} />
                })}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        filmsList: state.filmsList,
    }
}


export default connect(mapStateToProps)(FilmsList);