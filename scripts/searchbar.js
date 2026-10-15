function filterAndShowPokemons() {
    let filterWord = document.getElementById("searchbarInput").value.toLowerCase();

    filterPokemons(filterWord);
    toggleNextButton(filterWord);
    showPokemonCards();
    getType();
}

function filterPokemons(filterWord) {
    if (filterWord.length < 3) {
        filteredPokemons = pokemonsCurrentPage;
    } else {
        filteredPokemons = pokemonsCurrentPage.filter(pokemon => pokemon.name.includes(filterWord));
    }
}

function toggleNextButton(filterWord) {
    let nextButtonRef = document.getElementById("button-next");

    if (filterWord.length < 3) {
        nextButtonRef.classList.remove("hidden");
    } else {
        nextButtonRef.classList.add("hidden");
    }
}

function showPokemonCards() {
    let pokemonHTML = "";

    if (filteredPokemons.length === 0) {
        pokemonHTML = "<p>No pokemons found!</p>";
    } else {
        for (let i = 0; i < filteredPokemons.length; i++) {
            pokemonHTML += getPokemonTemplate(i);
        }
    }

    pokemonsRef.innerHTML = pokemonHTML;
}