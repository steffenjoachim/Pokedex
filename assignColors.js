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
    const content = document.getElementById(`big-pokedex${index}`);
    
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
