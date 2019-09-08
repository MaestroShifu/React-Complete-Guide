// import React, { useState } from 'react';
import React, { Component } from 'react'; //-> Componentes que extienden directamente de Component

import './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import Auxiliary from '../hoc/Auxiliary';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    console.log('[App.js] constructor');
    super(props);
    
    this.state = {
      persons: [
        { name: "Max", age: 28 },
        { name: "Daniel", age: 19 },
        { name: "Manu", age: 15 },
      ],
      style: {
        backgroundColor: "green",
        color: "white",
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      },
      className: ['green', 'bold'],
      showPersons: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  nameChangedHandler = (newName, index) => {
    let state = {...this.state};

    state.persons[index].name = newName;

    this.setState(state);
  }

  deletePersonHandler = (index) => {
    let state = {...this.state};

    state.persons.splice(index, 1);

    this.setState(state);
  }

  tooglePersonsHandler = () => {
    let style = {...this.state.style};
    let className = {...this.state.className};

    style.backgroundColor = !this.state.showPersons ? "red" : "green";
    className = !this.state.showPersons ? ['red', 'bold'] : ['green', 'bold'];

    this.setState({style: style, className: className, showPersons: !this.state.showPersons});

    console.log(this.state)
  }

  render() {
    console.log('[App.js] render');

    return (
      <Auxiliary className="App">
        <Cockpit
          title={this.props.appTitle}
          class={this.state.className.join(' ')}
          style={this.state.style}
          clicked={this.tooglePersonsHandler}
        />
  
        {/* If pro  [showPersons && data] -> Solo muestra si es verdadero */}
        {this.state.showPersons &&
          <div>
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            />
          </div> 
        }
      </Auxiliary>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
}











// React Hooks

// Que son los Hooks de React? -> Un Hook es una función especial que permite “conectarse” a características de React.
// Cuando deberia usar un Hook? ->  Cuando quieras hacer un componente funcional y agregarle un estado; antiguamente tocaba con una [clase].

// Nota:
// -> En los componentes funcionales no se usa el this.
// -> Las variables de estado las conserva React
// -> No se deben mutar los estados del componente

// const App = props => {
//   // useState() -> El estado actual / Una función que lo actualiza.
//   const [ personsState, setPersonsState ] = useState({//-> Propiedad de ES6  “Desestructuración de Arrays” / Declara una “variable de estado del componente” / Puedes usar cuantas variables de estados quieras y con nombres diferentes
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Daniel", age: 19 },
//       { name: "Manu", age: 15 },
//     ]
//   });

//   //Otra manera de manejar los estilos
//   const [ styleSheet, setStyle] = useState(
//     {
//       style: {
//         backgroundColor: "green",
//         color: "white",
//         font: 'inherit',
//         border: '1px solid blue',
//         padding: '8px',
//         cursor: 'pointer'
//       },
//       className: ['green', 'bold']
//     }
//   );

//   const [ showPersons, setshowPersons ] = useState(false);
 
//   // const [ otherState, setotherState ] = useState('Some other value'); -> Otra variable de entorno

//   const nameChangedHandler = (newName, index) => {
//     let persons = [...personsState.persons];

//     persons[index].name = newName;

//     setPersonsState({//-> Se crea un set para modificar cada estado
//       persons: persons
//     });
//   }

//   const deletePersonHandler = (index) => {
//     // let persons = personsState.persons;-> Estoy copiando la asignacion por memoria a [persons], tenemos es que copiar el elemento
//     let persons = [...personsState.persons]; //-> Realizo la copia del elemento

//     persons.splice(index, 1);
    
//     setPersonsState({
//       persons: persons
//     });
//   }

//   const tooglePersonsHandler = () => {
//     let styleBtn = {...styleSheet.style};
//     let className = [...styleSheet.className];

//     styleBtn.backgroundColor = !showPersons ? "red" : "green";
//     className = !showPersons ? ['red', 'bold'] : ['green', 'bold'];

//     setStyle({style: styleBtn, className: className});
//     setshowPersons(!showPersons);
//   }

//   return (
//     <div className="App">
//       <Cockpit
//         title={props.appTitle}
//         class={styleSheet.className.join(' ')}
//         style={styleSheet.style}
//         clicked={tooglePersonsHandler}
//       />

//       {/* If pro  [showPersons && data] -> Solo muestra si es verdadero */}
//       {showPersons &&
//         <div>
//           <Persons 
//             persons={personsState.persons}
//             clicked={deletePersonHandler}
//             changed={nameChangedHandler}
//           />
//         </div> 
//       }
//     </div>
//   );
// }

export default WithClass(App, "App"); 