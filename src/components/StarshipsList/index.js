import React, { Component } from 'react';
import './styles.scss';
import { connect, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StarshipItem = (props) => {
    var film = useSelector(state => state.film);

    return (
        <Link className='starship-item' to={`/film/${film?.title}/starship/${props.model}`}>
            {props.name}
        </Link>
    )
}

class StarshipsList extends Component {
    render = () => {
        return (
            <div className='starships-list'>
                {this.props.starshipsList?.map((starship, i) => {
                    return <StarshipItem key={i} {...starship} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        starshipsList: state.starshipsList
    }
}

export default connect(mapStateToProps)(StarshipsList);