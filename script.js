let allPokemon;
let pokemonToBeShown;
let lastId = 40; 

function init(){
  getPokemonName();
}

function loadMore() {
  lastId += 40; 
  getPokemonName();
 
}

async function getPokemonName() {
    
    for (let i = lastId-39; i <= lastId; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        response = await response.json();
        allPokemon = response['results'];
        loadPokemons(i);
    }
    
}

async function loadPokemons(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    pokemonToBeShown = await response.json();
    renderPokemonInfo(i);
    renderBigPokemonInfo(i);
}

function renderBigPokemonInfo(index) {
  let content = document.getElementById('content2');

  createBigCardHtml(index, content);

  document.getElementById(`big-name${index}`).innerHTML = pokemonToBeShown['name'];
  document.getElementById(`big-type${index}`).innerHTML = pokemonToBeShown['types'][0]['type']['name'];
  if (pokemonToBeShown['types'][1]) {
    document.getElementById(`big-type2${index}`).innerHTML = pokemonToBeShown['types'][1]['type']['name'];
  } else {
    document.getElementById(`big-type2${index}`).classList.add('d-none')
  }
  document.getElementById(`big-pokemon-picture${index}`).src = pokemonToBeShown['sprites']['other']['official-artwork']['front_default'];
  document.getElementById(`base-experience${index}`).innerHTML = 'Base Experience: ' + pokemonToBeShown['base_experience'];
  document.getElementById(`height${index}`).innerHTML = 'Height: ' + pokemonToBeShown['height'];
  document.getElementById(`weight${index}`).innerHTML = 'Weight: ' + pokemonToBeShown['weight'];
  let pokemonType = pokemonToBeShown['types'][0]['type']['name'];
  assignBackgroundColor2(pokemonType, index);

}


function createBigCardHtml(index, content){

  content.innerHTML += `
  <div id="big-content${index}" class="d-none" >
    <div pokedex${index} class="bigContent">
      <img onclick="showBefore(${index})" id="arrow-left${index}" class="arrow" src="./img/arrow_left.png">
      <div class="cotentcontainer">
          <div id="big-pokedex${index}" class="bigpokedex">
              <h2 id="big-name${index}"></h2>
              <div class="typecontainer">
                  <span id="big-type${index}"></span>
                  <span id="big-type2${index}"></span>
                </div>
                <div class="bigImageContainer">
                    <img id="big-pokemon-picture${index}" class="big-pokemon-picture" src="#">
                </div>
          </div>
          <div id="info-container${index}" class="infoContainer">
              <p id="base-experience${index}" class="base-experience"></p>
              <p id="height${index}"></p>
              <p id="weight${index}"></p>
          </div>
      </div>
      <img onclick="showNext(${index})" id="arrow-right${index}" class="arrow" src="./img/arrow_right.png">
      </div>
    </div>
  `;
}


function renderPokemonInfo(index) {
  let content = document.getElementById('content');
  createSmallCardHtml(index, content);

  document.getElementById(`pokemon-name${index}`).innerHTML = pokemonToBeShown['name'];
  document.getElementById(`pokemon-picture${index}`).src = pokemonToBeShown['sprites']['front_shiny'];
  document.getElementById(`pokemon-type${index}`).innerHTML = 'Typ: ' + pokemonToBeShown['types'][0]['type']['name'];

  let pokemonType = pokemonToBeShown['types'][0]['type']['name'];
  assignBackgroundColor(pokemonType, index);

}


function createSmallCardHtml(index, content) {
content.innerHTML += `
  <div onclick="openBigCard(${index})" id="pokedex${index}" class="pokedex">
      <h2 id="pokemon-name${index}">Name</h2>
      <b>${index}</b>
      <img id="pokemon-picture${index}" src="#">
      <h3 id="pokemon-type${index}"></h3>
  </div>
  `;
}

function openBigCard(index) {
  document.getElementById(`big-content${index}`).classList.remove('d-none');
}


function showBefore(index){
console.log('before')
document.getElementById(`big-content${index}`).classList.add('d-none');
index = index - 1;
document.getElementById(`big-content${index}`).classList.remove('d-none');
if (index == 1) {
  document.getElementById(`arrow-left${index}`).classList.add('d-none');
}
}


function showNext(index){
  console.log('before')
  document.getElementById(`big-content${index}`).classList.add('d-none');
  index = index + 1;
  document.getElementById(`big-content${index}`).classList.remove('d-none');
  if (index == lastId) {
    document.getElementById(`arrow-right${index}`).classList.add('d-none');
  }
  }


function closeBigCard(index){
  console.log('clicked');
  document.getElementById(`big-content${index}`).classList.add('d-none');
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
 
  
  function assignBackgroundColor2(pokemonType, index) {
    const content = document.getElementById(`big-content${index}`);
    
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

  function filterArrays(){
    for (let i = 0; i < jsonname.length; i++) {
      let search = document.getElementById('searching').value;
      search = search.toLowerCase();
      let searchId = category + [i];
      let searchParameter = jsonname[i]

      let title = searchParameter['title'];
      let description = searchParameter['description'];
      title = title.toLowerCase().includes(search);
      description = description.toLowerCase().includes(search);

      if (title || description == true) {
      }else{
          jsonname.splice(i, 1);
      }
      checkIfAreaEmpty();
      renderMenu();
  };
  }