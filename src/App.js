import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person'

//-> class-based components
class App extends Component {
  render() {
    /* Forma tradicional de retornar */
    return (
      <div className="App">
        <h1>Hi, I´m a React App</h1>
        <p>This is really working!</p>

        <Person />
      </div>
    );

    /* Crear un elemento -> createElement('html', configuración, 'Nodos hijos') */
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I´m a React App'));
  }
}

export default App;
 