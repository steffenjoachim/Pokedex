async function loadPokemons(){
    let url = `https://pokeapi.co/api/v2/pokemon/pikachu`
    console.log('loaded');
    let response = await fetch(url);
    let responseAsJason = await response.json();
   console.log(responseAsJason);
}