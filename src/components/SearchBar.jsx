
import { useState } from 'react';

export default function SearchBar({onSearch}) {
 const [id, setId] = useState("")
 
 const handleChange = (event) => {
   setId(event.target.value) //target: elemento que disparo el evento.
 }
 // Definimos una funcion controladora que realice la busqueda del persona, dependiendo el id que ingrese el usuario
 const handleSearch = (id) => {
  onSearch(id)
  setId('') // seteas nuevamente el valor del estado a 0, para no tener que borrar manualmente
 }

   return ( // onChange es para que se setee automaticamente, lo que el usuario escriba, en el id
      <div>
         <input onChange={handleChange} type='search' placeholder="Ingrese un ID por favor" /> 
         <button onClick={ () => handleSearch(id)}>Agregar</button> 
      </div>
   );
}
// onSearch recibe un parametro, por lo cual necesita si o si de un arrow que la 
// llame, asi no se autoinvocaria o se pasaria  la ejecucion de la misma al cargar la pag
// le pones una callback al handleSearch para evitar renderización infinito