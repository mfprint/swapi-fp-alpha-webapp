import React, { Component } from 'react';
import './styles.scss';

class MainTemplate extends Component {
    render = () => {
        return (
            <div className='main-template'>
                <div className='header'>
                    <h1>swapi implementation</h1>
                </div>
                <div className='content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default MainTemplate;