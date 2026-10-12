function getPokemonTemplate(i) {
    return `
        <div id="pokemon${i}" class="pokemon">
            <div class="pokemon-name">${pokemons[i].name}</div>
            <div id="pokemon-img${i}" class="pokemon-img">
                <img src="${pokemons[i].sprites.other.home.front_default}">
            </div>
            <div id="pokemon-types${i}" class="pokemon-types">
            
            </div>
        </div>
        `;
}

function getTypesTemplate(i, j, typeImg) {
    return `
        <span><img src="./assets/img/types/${typeImg}"></span>
    `;
}