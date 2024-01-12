document.addEventListener('DOMContentLoaded', () => {
    getRandomPokemon('pokemonCard1');
    getRandomPokemon('pokemonCard2');
    getRandomPokemon('pokemonCard3');
    getRandomPokemon('pokemonCard4');
    getRandomPokemon('pokemonCard5');
});


async function getRandomPokemon(cardId) {
    const card = document.getElementById(cardId);
    const image = card.querySelector('.pokemonImage');
    const name = card.querySelector('.pokemonName');
    const type = card.querySelector('.pokemonType');

    const randomNumber = Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon in total
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayPokemon(card, data);
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
}

function displayPokemon(card, pokemon) {
    const image = card.querySelector('.pokemonImage');
    const name = card.querySelector('.pokemonName');
    const type = card.querySelector('.pokemonType');

    image.src = pokemon.sprites.other['official-artwork'].front_default;
    name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    type.textContent = `Type: ${pokemon.types.map(type => type.type.name).join(', ')}`;

    // Adiciona o nome do Pokémon ao atributo data-text
    card.setAttribute('data-text', pokemon.types[0].type.name);

    // Remove todas as classes de tipo existentes
    card.classList.remove('grass', 'fire', 'water'); // Adicione mais classes conforme necessário

    // Adiciona a classe de tipo correspondente
    const typeClass = pokemon.types[0].type.name;
    card.classList.add(typeClass);

    // Atualiza a cor de fundo com base no tipo do Pokémon
    const backgroundColor = getTypeColor(typeClass);
    card.style.backgroundColor = backgroundColor;
}

function getTypeColor(type) {
    // Mapeia cores para tipos específicos (personalize conforme necessário)
    switch (type) {
        case 'grass':
            return '#78C850'; // Verde para tipo Grama
        case 'fire':
            return '#F08030'; // Laranja para tipo Fogo
        case 'water':
            return '#6890F0'; // Azul para tipo Água
        case 'normal':
            return '#A8A878'; 
        case 'electric':
            return '#F8D030';      
        case 'ice':
            return '#98D8D8';
        case 'figthing':
            return '#C03028';
        case 'poison':
            return '#A040A0';
        case 'earth':
            return '#E0C068';
        case 'flyer':
            return '#A890F0';
        case 'psychic':
            return '#F85888';
        case 'bug':
            return '#A8B820';
        case 'rock':
            return '#B8A038';
        case 'ghost':
            return '#705898';
        case 'steel':
            return '#B8B8D0';
        case 'fairy':
            return '#EE99AC';
        case 'dragon':
            return '#7038F8';
        case 'dark':
            return ' #705848 ';



        default:
            return '#A8A878'; // Cor padrão para tipos desconhecidos
    }
}