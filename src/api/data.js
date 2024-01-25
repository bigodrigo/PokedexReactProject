export async function getPokemonData(endpointNumber) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${endpointNumber}`);
    const pokemonData = await response.json();
    return pokemonData;
}

export async function getPokemonSpeciesData(endpointNumber) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${endpointNumber}`);
    const pokemonSpeciesData = await response.json();
    return pokemonSpeciesData;
}

export function removeBarra(value) {
    const stringValue = value.toString();
    const replacedValue = stringValue.replaceAll('\n', ' ').replaceAll('\f', ' ');
    return replacedValue;
}