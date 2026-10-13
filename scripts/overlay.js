let pokemonDetailIndex = 0;
let abilities = "";

function overlayOn(i) {
    let overlayRef = document.getElementById("overlay");

    pokemonDetailIndex = i;
    overlayRef.classList.add("active");

    getDetailPokemonAbilities(pokemonDetailIndex);
    overlayRef.innerHTML = getPokemonDetailTemplate(pokemonDetailIndex, abilities);
    console.log(pokemons);

    togglePrevButton();
}

function overlayOff() {
    document.getElementById("overlay").classList.remove("active");
}

function showNextDetailPokemon(i) {
    let overlayRef = document.getElementById("overlay");

    if (pokemonDetailIndex < pokemons.length - 1) {
        pokemonDetailIndex++;
    }
    getDetailPokemonAbilities(pokemonDetailIndex);
    overlayRef.innerHTML = getPokemonDetailTemplate(pokemonDetailIndex, abilities);

    togglePrevButton();
}

function showPreviousDetailPokemon(i) {
    let overlayRef = document.getElementById("overlay");

    if(pokemonDetailIndex > 0) {
        pokemonDetailIndex--;
    }
    getDetailPokemonAbilities(pokemonDetailIndex);
    overlayRef.innerHTML = getPokemonDetailTemplate(pokemonDetailIndex, abilities);
    togglePrevButton();
}

function togglePrevButton() {
    let prevButtonRef = document.getElementById("button-detail-previous");

    if(pokemonDetailIndex > 0) {
        prevButtonRef.classList.remove("hidden");
    } else {
        prevButtonRef.classList.add("hidden");
    }
}

function getDetailPokemonAbilities(i) {
    abilities = "";

    for (let j = 0; j < pokemons[i].abilities.length; j++) {

        if (j > 0) {
            abilities += ", ";
        }
        abilities += pokemons[i].abilities[j].ability.name;
    }
}