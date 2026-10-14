let pokemonsRef = document.getElementById("all-pokemons-wrapper");
let count = 0;
let url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${count}`;

let urlResultArray = [];
let urlsArrayOfAllPokemons = [];
let pokemonsCurrentPage = [];
let filteredPokemons = [];
let pokemonCache = {};

async function init() {
    let loadingBarRef = document.getElementById("loading-bar");
    let nextButtonRef = document.getElementById("button-next");

    loadingBarRef.classList.remove("hidden");
    nextButtonRef.disabled = true;

    await getPokemonURL();
    await renderPokemons();

    loadingBarRef.classList.add("hidden");
    nextButtonRef.disabled = false;
}

async function getPokemonURL() {
    await getPokemons();

    for (let i = 0; i < urlResultArray.results.length; i++) {
        urlsArrayOfAllPokemons.push(urlResultArray.results[i].url);
    }
}

async function getPokemons() {

    let response = await fetch(url);
    urlResultArray = await response.json();
}

async function renderPokemons() {
    let pokemonHTML = "";

    for (let i = 0; i < urlsArrayOfAllPokemons.length; i++) {

        if (!pokemonCache[urlsArrayOfAllPokemons[i]]) {
            let response = await fetch(urlsArrayOfAllPokemons[i]);
            pokemonCache[urlsArrayOfAllPokemons[i]] = await response.json();
        }

        pokemonsCurrentPage.push(pokemonCache[urlsArrayOfAllPokemons[i]]);
    }

    filteredPokemons = pokemonsCurrentPage;

    for (let i = 0; i < filteredPokemons.length; i++) {
        pokemonHTML += getPokemonTemplate(i);
    }

    pokemonsRef.innerHTML = pokemonHTML;
    await getType();
}

function checkBackgroundColor(i, colorHex) {
    let pokemonImgDivRef = document.getElementById("pokemon-img"+i)

    if(!pokemonImgDivRef.style.backgroundColor) {
        pokemonImgDivRef.style.backgroundColor = colorHex;
    }
}

async function getType() {
    for (let i = 0; i < filteredPokemons.length; i++) {
        for (let j = 0; j < filteredPokemons[i].types.length; j++) {
            let pokemonTypesDivRef = document.getElementById("pokemon-types"+i);
            let pokemonImgDivRef = document.getElementById("pokemon-img"+i)
            let typeImg = "";

            switch (filteredPokemons[i].types[j].type.name) {
                case "normal":
                    typeImg = "01_Normal.png"
                    checkBackgroundColor(i, "#9298A4");
                    break;

                case "fire":
                    typeImg = "02_Feuer.png" 
                    checkBackgroundColor(i, "#FB9B51");
                    break;
                
                case "water":
                    typeImg = "03_Wasser.png"
                    checkBackgroundColor(i, "#4A90DD");
                    break;

                case "electric":
                    typeImg = "04_Elektro.png"
                    checkBackgroundColor(i, "#EDD53E");
                    break;

                case "grass":
                    typeImg = "05_Pflanze.png"
                    checkBackgroundColor(i, "#5FBC51");
                    break;
                    
                case "ice":
                    typeImg = "06_Eis.png"
                    checkBackgroundColor(i, "#70CCBD");
                    break;

                case "fighting":
                    typeImg = "07_Kampf.png"
                    checkBackgroundColor(i, "#CE4265");
                    break;

                case "poison":
                    typeImg = "08_Gift.png"
                    checkBackgroundColor(i, "#A864C7");
                    break;

                case "ground":
                    typeImg = "09_Boden.png"
                    checkBackgroundColor(i, "#DC7545");
                    break;

                case "flying":
                    typeImg = "10_Flug.png"
                    checkBackgroundColor(i, "#90A7DA");
                    break;

                case "psychic":
                    typeImg = "11_Psycho.png"
                    checkBackgroundColor(i, "#F66F71");
                    break;

                case "bug":
                    typeImg = "12_Kaefer.png"
                    checkBackgroundColor(i, "#92BC2C");
                    break;

                case "rock":
                    typeImg = "13_Gestein.png"
                    checkBackgroundColor(i, "#C5B489");
                    break;

                case "ghost":
                    typeImg = "14_Geist.png"
                    checkBackgroundColor(i, "#516AAC");
                    break;

                case "dragon":
                    typeImg = "15_Drache.png"
                    checkBackgroundColor(i, "#0C69C8");
                    break;

                case "dark":
                    typeImg = "16_Unlicht.png"
                    checkBackgroundColor(i, "#595761");
                    break;

                case "steel":
                    typeImg = "17_Stahl.png"
                    checkBackgroundColor(i, "#52869D");
                    break;

                case "fairy":
                    typeImg = "18_Fee.png"
                    checkBackgroundColor(i, "#EC8CE5");
                    break;
            
                default:
                    break;
            }

            pokemonTypesDivRef.innerHTML+= getTypesTemplate(i, j, typeImg);
        }
    }
}

async function showNextPokemon() {
    let prevButtonRef = document.getElementById("button-previous");
    
    prevButtonRef.classList.remove("hidden");

    if(count < 1000) {
        count = count + 20;
        url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${count}`;
        urlResultArray = [];
        urlsArrayOfAllPokemons = [];
        pokemonsCurrentPage = [];

        await init();
    }
}

function showPreviousPokemon() {
    let prevButtonRef = document.getElementById("button-previous");

    if(count > 0) {
        count = count - 20;
        url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${count}`;
        urlResultArray = [];
        urlsArrayOfAllPokemons = [];
        pokemonsCurrentPage = [];

        init();
    }

    if(count == 0) {
        prevButtonRef.classList.add("hidden");
    }
}




