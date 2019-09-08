import React, { useEffect } from 'react';

import './Cockpit.css';//-> Importa clases especiales solo para el componente

const Cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request....
        const timer = setTimeout(() => {
            alert('Saved data to cloud!! ');
        }, 1000);

        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    useEffect(() => {   
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={props.class}>This is really working!</p>

            <button style={props.style} onClick={props.clicked}>Toggle Name</button>
        </div>
    );
}

export default React.memo(Cockpit);//-> Guardara en memoria una instancia del componente si sus entradas no cambian



 
/* Es ineficiente el onClick={() =>{switchNameHandler("Maximilian")}} ya que peude generarnos problemas de rendimiento de la aplicación */
/* style={style} Nos limita; ya que no podemos usar toda la potencia del CSS */
/* <button style={style} onClick={() =>{switchNameHandler("Maximilian")}}>Switch Name</button> */