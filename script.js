let pokemonToBeShown;
let allPokemon = [];
let lastId = 40; 
const config_bg_color =  [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)'
];
const config_border_color =  [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)'
]  

const config_chart_options =  {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}


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
        loadPokemons(i);
    }    
}


async function loadPokemons(i) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    pokemonToBeShown = await response.json();
    allPokemon.push(pokemonToBeShown);
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
  // renderPokemonChart(pokemonToBeShown,index);
}


function createBigCardHtml(index, content){

  content.innerHTML += `
  <div id="big-content${index}" class="d-none" onclick="closeBigCard(${index})">
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
              <canvas class="canvas" id="myChart${index}"></canvas>
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


let myChart;

function renderPokemonChart(pokemonToBeShown,i){
  const hp = allPokemon[i]['stats'][0]['base_stat'];
  const attack = allPokemon[i]['stats'][1]['base_stat'];
  const defense = allPokemon[i]['stats'][2]['base_stat'];
  const specialAttack = allPokemon[i]['stats'][3]['base_stat'];
  const specialDefense = allPokemon[i]['stats'][4]['base_stat'];
  const speed = allPokemon[i]['stats'][5]['base_stat'];
  let ctx = document.getElementById(`myChart${i}`);

  if(myChart){
    myChart.clear();
    myChart.destroy();
  }
  
  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:[ 'hp', 'attack', 'defense', 'special Attack', 'special Defense', 'speed'],
        datasets: [{
            label: 'Pokemon Fähigkeiten',
            data: [hp, attack, defense, specialAttack, specialDefense, speed], 
            backgroundColor: config_bg_color,
            borderColor: config_border_color,
            borderWidth: 1
        }]
    },
    options: config_chart_options
});

}


function openBigCard(index) {
  document.getElementById(`big-content${index}`).classList.remove('d-none');
  if (index == 1) {
    document.getElementById(`arrow-left${index}`).classList.add('d-none');};
  if (index == lastId) {
    document.getElementById(`arrow-right${index}`).classList.add('d-none');
  }
  renderPokemonChart(pokemonToBeShown,index);
}


function showBefore(index){
  
document.getElementById(`big-content${index}`).classList.add('d-none');
index = index - 1;
document.getElementById(`big-content${index}`).classList.remove('d-none');
if (index == 1) {
  document.getElementById(`arrow-left${index}`).classList.add('d-none');
}
event.stopPropagation();
renderPokemonChart(pokemonToBeShown,index);
}


function showNext(index){

  document.getElementById(`big-content${index}`).classList.add('d-none');
  index = index + 1;
  document.getElementById(`big-content${index}`).classList.remove('d-none');
  if (index == lastId) {
    document.getElementById(`arrow-right${index}`).classList.add('d-none');
  }
  event.stopPropagation();
  renderPokemonChart(pokemonToBeShown,index);
  }


function closeBigCard(index){
  
  document.getElementById(`big-content${index}`).classList.add('d-none');
}


  async function createSearchArray(){

    for (let i = 1; i < 1011; i++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      let response = await fetch(url);
      allPokemon = await response.json();
      filterArrays(allPokemon);
  }    
    
  }


  function filterArrays(allPokemon){
      let name = allPokemon['name'];
      let picture = allPokemon['sprites']['front_shiny'];
      let type = allPokemon['types'][0]['type']['name'];
   
      let search = document.getElementById('searching').value;
      search = search.toLowerCase();

      let searchResults = document.getElementById('searchResults');
      

      if(name.toLowerCase().includes(search)){
        
        searchResults.innerHTML += name + ' ' + type;

      }

  
  }