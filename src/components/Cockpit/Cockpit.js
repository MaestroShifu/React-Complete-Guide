import React from 'react';

import './Cockpit.css';//-> Importa clases especiales solo para el componente

const Cockpit = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p className={props.class}>This is really working!</p>

            <button style={props.style} onClick={props.clicked}>Toggle Name</button>
        </div>
    );
}

export default Cockpit;
 
/* Es ineficiente el onClick={() =>{switchNameHandler("Maximilian")}} ya que peude generarnos problemas de rendimiento de la aplicación */
/* style={style} Nos limita; ya que no podemos usar toda la potencia del CSS */
/* <button style={style} onClick={() =>{switchNameHandler("Maximilian")}}>Switch Name</button> */