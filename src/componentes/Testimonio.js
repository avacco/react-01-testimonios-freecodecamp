import React from 'react';
import '../estilos/Testimonio.css'

// Todos los componentes funcionales de React retornan un elemento JSX
// JSX es basicamente, una combinacion de HTML y JS
// Todo lo que vaya dentro de {} sera considerado js.

// Con ` ` (tildes invertidas) se puede incluir codigo js en cadenas de texto
function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../imagenes/${props.imagen}.jpg`)} alt={'Imagen de '+props.nombre} />
      <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
          <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}
// Para que el componente pueda ser importado, primero hay que exportarlo
export default Testimonio;