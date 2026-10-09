let pokemonsRef = document.getElementById("all-pokemons-wrapper");
let url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

let urlResultArray = [];
let urlsArrayOfAllPokemons = [];
let pokemons = [];

async function init() {
    await getPokemonURL();
    await renderPokemons();
    await getType();
}

async function getPokemonURL() {
    await getPokemons();

    for (let i = 0; i < urlResultArray.results.length; i++) {
        urlsArrayOfAllPokemons.push(urlResultArray.results[i].url);
    }
    console.log(urlResultArray);
    console.log(urlResultArray.results);
    console.log(urlsArrayOfAllPokemons);
}

async function getPokemons() {

    let response = await fetch(url);
    urlResultArray = await response.json();
}

async function renderPokemons() {
    for (let i = 0; i < urlsArrayOfAllPokemons.length; i++) {
        let response = await fetch(urlsArrayOfAllPokemons[i]);  
        pokemons.push(await response.json()); 
        pokemonsRef.innerHTML+= getPokemonTemplate(i);
    }
    console.log(pokemons);
}

async function getType() {
    for (let i = 0; i < pokemons.length; i++) {
        for (let j = 0; j < pokemons[i].types.length; j++) {
            console.log(pokemons[i].types[j].type.name);
        }
        console.log("test");
    }
}


