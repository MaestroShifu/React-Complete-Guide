import React, { useEffect, useRef, useContext } from 'react';

import './Cockpit.css';//-> Importa clases especiales solo para el componente

import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toogleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request....
        const timer = setTimeout(() => {
            alert('Saved data to cloud!! ');
        }, 1000);

        toogleBtnRef.current.click();

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

            <button ref={toogleBtnRef} style={props.style} onClick={props.clicked}>Toggle Name</button>
            {/* <AuthContext.Consumer>
                {context => <button style={props.style} onClick={context.login}>Log in</button>}
            </AuthContext.Consumer> */}
            <button style={props.style} onClick={authContext.login}>Log in</button>
        </div>
    );
}

export default React.memo(Cockpit);//-> Guardara en memoria una instancia del componente si sus entradas no cambian



 
/* Es ineficiente el onClick={() =>{switchNameHandler("Maximilian")}} ya que peude generarnos problemas de rendimiento de la aplicación */
/* style={style} Nos limita; ya que no podemos usar toda la potencia del CSS */
/* <button style={style} onClick={() =>{switchNameHandler("Maximilian")}}>Switch Name</button> */