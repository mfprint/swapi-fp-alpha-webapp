import React, { Component } from 'react';
import './styles.scss';

class BreadCrumbs extends Component {
    render = () => {
        return (
            <div className='bread-crumbs'>
                {this.props.children.map(element => {
                    return (
                        <React.Fragment>
                            {element}
                            <div className='pointer'></div>
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
}

export default BreadCrumbs;