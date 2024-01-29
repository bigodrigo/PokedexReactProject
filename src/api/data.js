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

export async function getPokemonAbilities(url) {
    const response = await fetch(url);
    const pokemonAbilities = await response.json();
    return pokemonAbilities;
}

export function getEnglishFlavorText(flavorTextEntries) {
    for (const entry of flavorTextEntries) {
        if (entry.language.name === 'en') {
            return entry.flavor_text;
        }
    }
    return '';
}

export function removeBarra(value) {
    const stringValue = value.toString();
    const replacedValue = stringValue.replaceAll('\n', ' ').replaceAll('\f', ' ');
    return replacedValue;
}