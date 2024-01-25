import { useState, useEffect } from 'react';
import { getPokemonData, getPokemonSpeciesData, removeBarra } from '../../api/data';
import  PokeCard  from '../PokeCard/PokeCard';
import styled from 'styled-components';

export default function PokeList() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        async function fetchPokemonData() {
            try {
                const data = [];
                for (let i = 1; i <= 10; i++) {
                    const pokemonData = await getPokemonData(i);
                    const pokemonSpeciesData = await getPokemonSpeciesData(i);

                    const formattedData = {
                        name: pokemonData.name,
                        id: i,
                        gif: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${i}.gif`,
                        types: pokemonData.types.map((type) => type.type.name),
                        description: removeBarra(pokemonSpeciesData.flavor_text_entries.find((entry) => entry.language.name === 'en').flavor_text),
                    };
                    data.push(formattedData);
                }
                setPokemonList(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchPokemonData();
    }, []);

    const fetchMorePokemon = async () => {
        try {
            const newPokemonList = [];
            const startIndex = pokemonList.length + 1; // Index of the next Pokémon to fetch
            for (let i = startIndex; i <= startIndex + 9; i++) {
                const pokemonData = await getPokemonData(i);
                const pokemonSpeciesData = await getPokemonSpeciesData(i);
                newPokemonList.push({
                    name: pokemonData.name,
                    id: i,
                    gif: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${i}.gif`,
                    types: pokemonData.types.map((type) => type.type.name),
                    description: removeBarra(pokemonSpeciesData.flavor_text_entries.find((entry) => entry.language.name === 'en').flavor_text),
                });
            }
            setPokemonList([...pokemonList, ...newPokemonList]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Wrapper>
            {pokemonList.map((pokemon) => (
                <PokeCard key={pokemon.id} pokemon={pokemon} />
            ))}
            <button onClick={fetchMorePokemon}>Fetch 10 More Pokémon</button>
        </Wrapper>
    );
}

const Wrapper = styled.ul`
    padding: 25px 300px;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    list-style: none;

    /* Scrollbar CSS */
    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background: #f1e9e9;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #582965;
        border-radius: 10px;
        border: 3px solid #ffffff;
    }
`;