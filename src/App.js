import React, { useState } from 'react';
// import React, { Component } from 'react'; -> Componentes que extienden directamente de Component

import './App.css';

import Person from './Person/Person'

//-> class-based components
// class App extends Component {
//   state = {
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Daniel", age: 19 },
//       { name: "Manu", age: 15 },
//     ],
//     otherState: 'Some other value'
//   }

//   //Si no lo llamo de esta manera, va a hacer referencia a la clase y no al evento como tal
//   switchNameHandler = () => {//-> Expresion de Handler da referencia a eventos [Buenas practicas]
//     console.log('Was cliked!');
//     this.setState({//-> Cambia el estado del componente; Ejecuta el redenrizado del DOM por el nodo
//       persons: [
//         { name: "Maximilian", age: 25 },
//         { name: "Daniel Santos", age: 22 },
//         { name: "Manu", age: 15 },
//       ],
//     });
//   }

//   render() {
//     /* Forma tradicional de retornar */
//     return (
//       <div className="App">
//         <h1>Hi, I´m a React App</h1>
//         <p>This is really working!</p>

//         <button onClick={this.switchNameHandler}>Switch Name</button>

//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Run in the park </Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     );

//     /* Crear un elemento -> createElement('html', configuración, 'Nodos hijos') */
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I´m a React App'));
//   }
// }

// export default App;

//Datos importantes

//-> Props: Son los atributos de configuración para el componente.

//-> State: Es la representacion del componente en un tiempo determinado, esta data puede variar en el ciclo de vida del mismo [Al detectar cambio renderiza en el DOM el componente]




// React Hooks

// Que son los Hooks de React? -> Un Hook es una función especial que permite “conectarse” a características de React.
// Cuando deberia usar un Hook? ->  Cuando quieras hacer un componente funcional y agregarle un estado; antiguamente tocaba con una [clase].

// Nota:
// -> En los componentes funcionales no se usa el this.
// -> Las variables de estado las conserva React

const App = props => {
  // useState() -> El estado actual / Una función que lo actualiza.
  const [ personsState, setPersonsState ] = useState({//-> Propiedad de ES6  “Desestructuración de Arrays” / Declara una “variable de estado del componente” / Puedes usar cuantas variables de estados quieras y con nombres diferentes
    persons: [
      { name: "Max", age: 28 },
      { name: "Daniel", age: 19 },
      { name: "Manu", age: 15 },
    ]
  });

  // const [ otherState, setotherState ] = useState('Some other value'); -> Otra variable de entorno

  const switchNameHandler = () => {
    setPersonsState({//-> Se crea un set para modificar cada estado
      persons: [
        { name: "Maximilian", age: 25 },
        { name: "Daniel Santos", age: 22 },
        { name: "Manu", age: 15 },
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I´m a React App</h1>
      <p>This is really working!</p>

      <button onClick={switchNameHandler}>Switch Name</button>

      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbies: Run in the park </Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App; 