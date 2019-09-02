import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    //Sirve para el manejo de error al cargar el componente
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        //Revisa si el estado posee un error
        if(this.state.hasError) {
            //Retorna un aviso de error
            return <h1>{ this.state.errorMessage }</h1>
        } else {
            //Retorna los props para el siguiente componente
            return this.props.children;
        }
    }
}

// Nota: Estos componentes son de orden primario es decir; primero pasan por este componente donde se valida y si es valido continua el flujo 

export default ErrorBoundary;