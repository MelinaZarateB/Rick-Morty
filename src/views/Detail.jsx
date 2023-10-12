import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const Detail = () => {
 
    const [character, setCharacter] = useState({})
    const {id} = useParams()
    console.log(character)

    useEffect (
        () => {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
               if (data.name) {
                  setCharacter(data);
               } else {
                  window.alert('No hay personajes con ese ID');
               }
            });
            return setCharacter({});
         }, [id]
    );

    return (
            <div>
              <h1>{character.name}</h1>
              <h2>STATUS: {character.status}</h2>
              <h2>GENDER: {character.gender}</h2>
              <h2>SPECIE: {character.species}</h2>
              <h2>ORIGIN: {character.origin && character.origin.name}</h2>
              <img src={character.image} alt="" />
            </div>
          );
          
};

export default Detail; 