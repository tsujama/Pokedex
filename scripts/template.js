function getPokemonTemplate(i) {
    return `
        <div id="pokemon${i}" class="pokemon">
            <div class="pokemon-name">${pokemons[i].name}</div>
            <div class="pokemon-img">
                <img src="${pokemons[i].sprites.other.home.front_default}">
            </div>
            <div class="pokemon-types">${pokemons[i].types[0].type.name}</div>
        </div>
        `;
}