let currentPokemon;
let currentPokemonName;
let allPokemon;
let pokemonToBeShown;
let offset = 0; // Startwert für den Offset
let count = 0; // Zählvariable für eindeutige IDs

async function getPokemonName() {
  let url = `https://pokeapi.co/api/v2/pokemon/1`;
  let response = await fetch(url);
  currentPokemon = await response.json();
  console.log(currentPokemon);
  let bigContent = document.getElementById('big-content');
  document.getElementById('big-name').innerHTML = currentPokemon['name'];
  document.getElementById('big-type').innerHTML = currentPokemon['types'][0]['type']['name'];
  document.getElementById('big-type2').innerHTML = currentPokemon['types'][1]['type']['name'];
  document.getElementById('big-pokemon-picture').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
  document.getElementById('base-experience').innerHTML = 'Base Experience: ' + currentPokemon['base_experience'];
  document.getElementById('height').innerHTML = 'Height: ' + currentPokemon['height'];
  document.getElementById('weight').innerHTML = 'Weight: ' + currentPokemon['weight'];
  
  

}


// async function getPokemonName() {
//     let url = `https://pokeapi.co/api/v2/pokemon?limit=40&offset=${offset}`;
//     let response = await fetch(url);
//     response = await response.json();
//     allPokemon = response['results'];
//     let content = document.getElementById('content');
//     content.innerHTML = '';
//     for (let i = 0; i < allPokemon.length; i++) {
//         const currentPokemon = allPokemon[i]['name'];
//         loadPokemons(currentPokemon);
//     }
// }


async function loadPokemons(currentPokemon) {
    let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`;
    let response = await fetch(url);
    pokemonToBeShown = await response.json();
    renderPokemonInfo();
}


function renderPokemonInfo() {
    let index = count;
    let content = document.getElementById('content');
    let pokemonContainer = document.createElement('div');
    pokemonContainer.className = 'pokedex';
    pokemonContainer.id = `pokedex${index}`;
    pokemonContainer.innerHTML = `
        <h2 id="pokemon-name${index}">Name</h2>
        <img id="pokemon-picture${index}" src="#">
        <h3 id="pokemon-type${index}"></h3>
    `;

    content.appendChild(pokemonContainer);

    document.getElementById(`pokemon-name${index}`).innerHTML = pokemonToBeShown['name'];
    document.getElementById(`pokemon-picture${index}`).src = pokemonToBeShown['sprites']['front_shiny'];
    document.getElementById(`pokemon-type${index}`).innerHTML = 'Typ: ' + pokemonToBeShown['types'][0]['type']['name'];
    


    let pokemonType = pokemonToBeShown['types'][0]['type']['name'];
    assignBackgroundColor(pokemonType, index);

    count++; // Erhöht die Zählvariable
}


async function loadMore() {
    offset += 40; // Erhöht den Offset um 40

    let url = `https://pokeapi.co/api/v2/pokemon?limit=40&offset=${offset}`;
    let response = await fetch(url);
    response = await response.json();
    let additionalPokemon = response['results'];

    for (let i = 0; i < additionalPokemon.length; i++) {
        const currentPokemon = additionalPokemon[i]['name'];
        loadPokemons(currentPokemon);
    }
}

function closeBigPicture(){
  console.log('clicked');
  document.getElementById('big-content').classList.add('d-none');
}

function assignBackgroundColor(pokemonType, index) {
    const content = document.getElementById(`pokedex${index}`);
    let typeClass = "";
  
    switch (pokemonType) {
      case "electric":
        typeClass = "t-electric";
        break;
      case "water":
        typeClass = "t-water";
        break;
      case "fire":
        typeClass = "t-fire";
        break;
      case "grass":
        typeClass = "t-grass";
        break;
      case "ice":
        typeClass = "t-ice";
        break;
      case "fighting":
        typeClass = "t-fighting";
        break;
      case "poison":
        typeClass = "t-poison";
        break;
      case "ground":
        typeClass = "t-ground";
        break;
      case "flying":
        typeClass = "t-flying";
        break;
      case "psychic":
        typeClass = "t-psychic";
        break;
      case "bug":
        typeClass = "t-bug";
        break;
      case "rock":
        typeClass = "t-rock";
        break;
      case "ghost":
        typeClass = "t-ghost";
        break;
      case "dragon":
        typeClass = "t-dragon";
        break;
      case "dark":
        typeClass = "t-dark";
        break;
      case "steel":
        typeClass = "t-steel";
        break;
      case "fairy":
        typeClass = "t-fairy";
        break;
        case "normal":
        typeClass = "t-normal";
        break;
      default:
        typeClass = "";
        break;
    }

    content.classList.add(typeClass);
  }
  