import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import FilmsList from '../FilmsList';

class HomeView extends Component {
    render = () => {
        return (
            <div className=''>
                <FilmsList />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps)(HomeView);