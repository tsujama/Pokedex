function filterAndShowPokemons() {
    let pokemonHTML = "";
    let filterWord = document.getElementById("searchbarInput").value.toLowerCase();
    let nextButtonRef = document.getElementById("button-next");


    if(filterWord.length < 3) {
        filteredPokemons = pokemonsCurrentPage;
        nextButtonRef.classList.remove("hidden");
    } else {
        filteredPokemons = pokemonsCurrentPage.filter(pokemon => pokemon.name.includes(filterWord));
        nextButtonRef.classList.add("hidden");
    }

    if(filteredPokemons.length === 0) {
        pokemonHTML = "<p>No pokemons found!</p>"
    } else {
        for (let i = 0; i < filteredPokemons.length; i++) {
            pokemonHTML += getPokemonTemplate(i); 
        }
    }
    
    pokemonsRef.innerHTML = pokemonHTML;
    getType();
}