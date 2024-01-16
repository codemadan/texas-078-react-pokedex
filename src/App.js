import {useEffect, useState} from 'react'


function App() {
    const [pokemons, setPokemons] = useState([]);

    useEffect( () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then( response => response.json())
            .then( data => setPokemons(data.results))
    } )

    return (
        <>
            <h1>List of Pokemons</h1>
        </>
    );
}

export default App;
