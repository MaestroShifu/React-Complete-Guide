import React from 'react'

//-> Functional components [Es la mejor practica]
const person = (props) => {
    // return <p>I´m a Person and I am { Math.floor(Math.random() * 30) } years old!</p>//-> Para que el jsx interprete el js es con { }
    
    //-> Cuando son mas de dos lineas, se debe poner un div para agrupar y poner parentesis ( ).
    return (
        <div>
            <p>I´m a { props.name } and I am { props.age } years old!</p>
            <p>{ props.children }</p>
        </div>
    );//-> Cuando se usa una clase como componente se maneja [this.props] para acceder a ellos.
};

export default person