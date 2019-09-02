import React from 'react';

import ErrorBoundary from '../../containers/ErrorBoundary/ErrorBoundary';
import Person from './Person/Person'

const Persons = (props) => props.persons.map((person, index) => {
    //Manejo de componente superior: Primero evalua el componente principal y si cambia de estado da acceso al nuevo componente. [Loading - Manejo de errores personalizados - Espera de cargas] 
    return <ErrorBoundary key={index}><Person 
        click={() => props.clicked(index)} 
        changed={(event) => {props.changed(event.target.value, index)}} 
        name={person.name} 
        age={person.age}
    /></ErrorBoundary>
});

export default Persons;