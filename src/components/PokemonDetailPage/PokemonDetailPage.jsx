import { useEffect, useState } from 'react';
import { getPokemonData, getPokemonSpeciesData, removeBarra } from '../../api/data';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PokemonDetailCard from '../PokemonDetailCard/PokemonDetailCard';

function PokemonDetailPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
        try {
            const data = []; // Corrected declaration
            const pokemonData = await getPokemonData(id);
            const pokemonSpeciesData = await getPokemonSpeciesData(id);

            const formattedData = {
                name: pokemonData.name,
                id: id,
                gif: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`,
                types: pokemonData.types.map((type) => type.type.name),
                description: removeBarra(pokemonSpeciesData.flavor_text_entries.find((entry) => entry.language.name === 'en').flavor_text),
                abilities: pokemonData.abilities
            };
            data.push(formattedData);
            setPokemon(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchPokemonData();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
        <PokemonDetailCard pokemon={pokemon[0]} /> {/* Access the first item of the array */}
    </Wrapper>
  );
}

export default PokemonDetailPage;

const Wrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 25px;
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
