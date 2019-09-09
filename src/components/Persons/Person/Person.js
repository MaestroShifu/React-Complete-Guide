import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import WithClass from "../../../hoc/WithClass";

import AuthContext from '../../../context/auth-context';

import './Person.css';

class Person extends Component {    
    // static contextType = AuthContext; -> Otra manera de declarar un contexto 

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }

    componentDidMount() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');

        return (
            <Fragment>
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}
                </AuthContext.Consumer> */}

                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}
                <p onClick={this.props.click}>I´m a <span className="Name">{ this.props.name }</span> and I am { this.props.age } years old!</p>
                <p>{ this.props.children }</p>
                <input 
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElement} 
                    type="text" 
                    onChange={this.props.changed} 
                    defaultValue={this.props.name}
                />
            </Fragment>
        );
    }
}

//Manejo de proptypes
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

//LLamar el contexto
Person.contextType = AuthContext;

export default WithClass(Person, "Person");