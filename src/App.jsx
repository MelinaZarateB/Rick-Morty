import './App.css';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar';
import { useState } from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import About from './views/About';
import Detail from './views/Detail';
import Form from './components/Form/Form';

function App() {
  const [characters,setCharacters] = useState([]); // cree el estado


  const onSearch = (id) => { // Funcion que hace el pedido al servidor usando Api Axios
    //setCharacters([...characters,example]) // para que no pise y se acumule
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        window.alert(error.response.data.error); // esto sirve para que si en el input se ingresa una letra y no un numero(id), salte 
        // un error y no se rompa el codigo por no poder procesarse la solicitud correctamente. 
        // mensaje que muestra: Hey! you must provide an id -> este esta seteado asi desde el servidor, en los casos que
        // al ingresar al servidor(en este caso se recorre desde la URL) y 
        // quieras buscar un personaje por letra te salte eso. 
      });
  };

const onClose = (id) => { // Funcion que dara vida al boton 'X' que renderiza Card. Este boton elimina la Card renderizada
 setCharacters(characters.filter((character) => character.id !== Number(id)));
 // Por lo general, los id que se almacenan en el estado se guardan como number pero los que vengan de los servidores
 // pueden venir como un string. Por ende, se hace un parseo
 };
 return (
  <div className='App'>
    <hr />
    <NavBar onSearch={onSearch} />

    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
      <Route path='/about' element={<About />} />
      <Route path='/detail/:id' element={<Detail />} />
    </Routes>
  </div>
);
}

 export default App;