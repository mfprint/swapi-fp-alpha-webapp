import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';

class StarshipsList extends Component {
    render = () => {
        return (
            <div className='starships-list'>
                {this.props.starshipsList?.map(starship => {

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