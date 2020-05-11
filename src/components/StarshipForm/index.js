import React, { Component } from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import { saveStarship } from '../../actions/starshipsActions';

const InputField = (props) => {
    return (
        <div className='input-field'>
            <input disabled={props.disabled || false} value={props.value || ''} onChange={props.onChage} />
            <p>{props.name}</p>
        </div>
    )
}

class StarshipForm extends Component {
    state = {
        starship: {}
    }

    componentDidMount = () => {
        if (this.props.starship !== null) {
            this.setState({ starship: Object.assign({}, this.props.starship) });
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.starship !== prevProps.starship) {
            this.setState({ starship: Object.assign({}, this.props.starship) });
        }
    }

    inputField_Change = (fieldName) => {
        return (e) => {
            var starship = {...this.state.starship};
            starship[fieldName] = e.currentTarget.value;
            this.setState({ starship });
        }
    }

    saveBtn_Click = () => {
        var payload = {...this.state.starship};
        payload.originalModel = this.props.starship?.model;

        this.props.saveStarship(payload)
            .then(() => {
                window.alert('Changes saved correctly.');                
            });
    }

    render = () => {
        return (
            <div className='starship-form'>
                <form>
                    <InputField
                        name='Name'
                        value={this.state.starship?.name}
                        onChage={this.inputField_Change('name')}
                    />
                    <InputField
                        name='Model (not editable)'
                        disabled
                        value={this.state.starship?.model}
                        onChage={this.inputField_Change('model')}
                    />
                    <div className='multi-field'>
                        <InputField
                            name='Starship class'
                            value={this.state.starship?.starship_class}
                            onChage={this.inputField_Change('starship_class')}
                        />
                        <InputField
                            name='Manufacturer'
                            value={this.state.starship?.manufacturer}
                            onChage={this.inputField_Change('manufacturer')}
                        />
                    </div>
                    <div className='multi-field'>
                        <InputField
                            name='Cost in credits'
                            value={this.state.starship?.cost_in_credits}
                            onChage={this.inputField_Change('cost_in_credits')}
                        />
                        <InputField
                            name='Length'
                            value={this.state.starship?.length}
                            onChage={this.inputField_Change('length')}
                        />
                        <InputField
                            name='Crew'
                            value={this.state.starship?.crew}
                            onChage={this.inputField_Change('crew')}
                        />
                    </div>
                    <div className='multi-field'>
                        <InputField
                            name='Passengers'
                            value={this.state.starship?.passengers}
                            onChage={this.inputField_Change('passengers')}
                        />
                        <InputField
                            name='Max atmosphering speed'
                            value={this.state.starship?.max_atmosphering_speed}
                            onChage={this.inputField_Change('max_atmosphering_speed')}
                        />
                        <InputField
                            name='Hyperdrive rating'
                            value={this.state.starship?.hyperdrive_rating}
                            onChage={this.inputField_Change('hyperdrive_rating')}
                        />
                    </div>
                    <div className='multi-field'>
                        <InputField
                            name='MGLT'
                            value={this.state.starship?.MGLT}
                            onChage={this.inputField_Change('MGLT')}
                        />
                        <InputField
                            name='Cargo capacity'
                            value={this.state.starship?.cargo_capacity}
                            onChage={this.inputField_Change('cargo_capacity')}
                        />
                        <InputField
                            name='Consumables'
                            value={this.state.starship?.consumables}
                            onChage={this.inputField_Change('consumables')}
                        />
                    </div>
                    <div className='save-btn-container'>
                        <button className='save-btn' onClick={this.saveBtn_Click}>Save Changes</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        starship: state.starship
    }
}

export default connect(mapStateToProps, { saveStarship })(StarshipForm);