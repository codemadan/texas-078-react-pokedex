import {useEffect, useState} from 'react'
import axios from "axios";
import Single from "./Single";
import { Col, Row } from 'antd';


function App() {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        setTimeout( function(){
            axios.get('https://pokeapi.co/api/v2/pokemon')
                .then((res) => {
                    setPokemons(res.data.results);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                })
        }, 2000);

    }, [] )

    return (
        <>
            <h1>List of Pokemons</h1>
            {
                isLoading ?
                    <h2>Loading....</h2>
                    :
                    <Row>
                        {
                            pokemons.map( (pokemon, index) => {
                                return (
                                    <Col key={index} span={8}>
                                        <Single data={pokemon} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
            }
        </>
    );
}

export default App;
