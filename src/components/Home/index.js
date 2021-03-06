import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import FilmsList from '../FilmsList';
import BreadCrumbs from '../BreadCrumbs';

class HomeView extends Component {
    render = () => {
        return (
            <div className='home-container'>
                <BreadCrumbs>
                    <h2>Films</h2>
                </BreadCrumbs>
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