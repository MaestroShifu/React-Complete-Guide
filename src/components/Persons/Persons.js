import React, { Component } from 'react';

import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import Person from './Person/Person'

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        // return null;
        return { message: 'snapshot!!' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log('Snapshot: ', snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');

        return this.props.persons.map((person, index) =>{
            return (
                <ErrorBoundary key={index}>
                    <Person 
                        click={() => this.props.clicked(index)} 
                        changed={(event) => {this.props.changed(event.target.value, index)}} 
                        name={person.name} 
                        age={person.age}
                    />
                </ErrorBoundary>
            );
        });
    }
}

export default Persons;