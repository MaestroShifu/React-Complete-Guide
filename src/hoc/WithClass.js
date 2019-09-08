import React from 'react';

const WhithClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
}

export default WhithClass;

// {...props} ->  Sirve para copiar y enviar todo el objeto de props