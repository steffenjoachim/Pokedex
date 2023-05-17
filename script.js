let currentPokemon;
let currentPokemonName;
let allPokemon;
let pokemonToBeShown;

async function getPokemonName(){
    let url = `https://pokeapi.co/api/v2/pokemon?limit=40&offset=0`
    let response = await fetch(url);
    response = await response.json();
    allPokemon = response['results'];
    let content = document.getElementById('content');
    content.innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        const currentPokemon = allPokemon[i]['name'];
        // console.log(currentPokemon)
        loadPokemons(currentPokemon,i);
    }
    
}


// function getPokemonName(){
//     for (let i = 1; i < 21; i++) {
//         const currentPokemon = i;
//         console.log(currentPokemon)
//         loadPokemons(currentPokemon);
//     }
    
// }

async function loadPokemons(currentPokemon,i){
    let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemon}`
    let response = await fetch(url);
    pokemonToBeShown = await response.json();
    console.log(pokemonToBeShown)
    renderPokemonInfo(i);   
}

function renderPokemonInfo(i){
    let index = i;
    console.log(index);
    content.innerHTML +=`
    <div class="pokedex" id="pokedex${index}">
        <h2 id="pokemon-name${index}">Name</h2>
        <img id="pokemon-picture${i}" src="#">
        <h3 id="pokemon-type${i}"></h3>
    </div>
    `

document.getElementById(`pokemon-name${index}`).innerHTML = pokemonToBeShown['name'];
document.getElementById(`pokemon-picture${index}`).src =pokemonToBeShown['sprites']['front_shiny']
document.getElementById(`pokemon-type${index}`).innerHTML = 'Typ: ' + pokemonToBeShown['types'][0]['type']['name'];

let pokemonType = pokemonToBeShown['types'][0]['type']['name'];

 assignBackgroundColor(pokemonType, index)
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

    console.log(typeClass)
  
    content.classList.add(typeClass);
  }
  