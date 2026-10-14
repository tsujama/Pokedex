let pokemonDetailIndex = 0;
let abilities = "";

function overlayOn(i) {
    let overlayRef = document.getElementById("overlay");

    pokemonDetailIndex = i;
    overlayRef.classList.add("active");
    document.body.style.overflow = "hidden";

    getDetailPokemonAbilities(pokemonDetailIndex);
    overlayRef.innerHTML = getPokemonDetailTemplate(pokemonDetailIndex, abilities);

    toggleDetailButton();
}

function overlayOff() {
    document.getElementById("overlay").classList.remove("active");
    document.body.style.overflow = "";
}

function showNextDetailPokemon(i) {
    let overlayRef = document.getElementById("overlay");

    if (pokemonDetailIndex < filteredPokemons.length - 1) {
        pokemonDetailIndex++;
    }
    getDetailPokemonAbilities(pokemonDetailIndex);
    overlayRef.innerHTML = getPokemonDetailTemplate(pokemonDetailIndex, abilities);

    toggleDetailButton();
}

function showPreviousDetailPokemon(i) {
    let overlayRef = document.getElementById("overlay");

    if(pokemonDetailIndex > 0) {
        pokemonDetailIndex--;
    }
    getDetailPokemonAbilities(pokemonDetailIndex);
    overlayRef.innerHTML = getPokemonDetailTemplate(pokemonDetailIndex, abilities);
    toggleDetailButton();
}

function toggleDetailButton() {
    let prevButtonRef = document.getElementById("button-detail-previous");
    let nextButtonRef = document.getElementById("button-detail-next");

    if (pokemonDetailIndex > 0) {
        prevButtonRef.classList.remove("hidden");
    } else {
        prevButtonRef.classList.add("hidden");
    }

    if (pokemonDetailIndex < filteredPokemons.length - 1) {
        nextButtonRef.classList.remove("hidden");
    } else {
        nextButtonRef.classList.add("hidden");
    }
}

function getDetailPokemonAbilities(i) {
    abilities = "";

    for (let j = 0; j < filteredPokemons[i].abilities.length; j++) {

        if (j > 0) {
            abilities += ", ";
        }
        abilities += filteredPokemons[i].abilities[j].ability.name;
    }
}