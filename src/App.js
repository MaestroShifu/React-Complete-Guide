import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

//-> class-based components
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Daniel", age: 19 },
      { name: "Manu", age: 15 },
    ]
  }

  //Si no lo llamo de esta manera, va a hacer referencia a la clase y no al evento como tal
  switchNameHandler = () => {//-> Expresion de Handler da referencia a eventos [Buenas practicas]
    console.log('Was cliked!');
  }

  render() {
    /* Forma tradicional de retornar */
    return (
      <div className="App">
        <h1>Hi, I´m a React App</h1>
        <p>This is really working!</p>

        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Run in the park </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    /* Crear un elemento -> createElement('html', configuración, 'Nodos hijos') */
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I´m a React App'));
  }
}

export default App;

//Datos importantes

//-> Props: Son los atributos de configuración para el componente.

//-> State: Es la representacion del componente en un tiempo determinado, esta data puede variar en el ciclo de vida del mismo [Al detectar cambio renderiza en el DOM el componente]
 