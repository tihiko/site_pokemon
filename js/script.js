
const PokemonImage = document.querySelector('okeimage');

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    
    const data = await APIResponse.json();
    return data;
    }


const renderPokemon = async  (pokemon) =>{
    const data = await fetchPokemon(pokemon);
    
    PokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}
renderPokemon('123');