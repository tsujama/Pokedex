function getPokemonTemplate(i) {
    return `
        <div id="pokemon${i}" class="pokemon" onclick="overlayOn(${i})">
            <div class="pokemon-name"><h2>${filteredPokemons[i].name}</h2></div>
            <div id="pokemon-img${i}" class="pokemon-img">
                <img src="${filteredPokemons[i].sprites.other.home.front_default}">
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

function getPokemonDetailTemplate(i,abilities) {
    return `
        <div class="pokemon-detail-wrapper" onclick="event.stopPropagation()">
            <div class="pokemon-detail-name"><h2>${filteredPokemons[i].name}</h2></div>
            <div class="pokemon-detail-img">
                <img src="${filteredPokemons[i].sprites.other.home.front_default}">
            </div>
            <div id="pokemon-types${i}" class="pokemon-types">
            
            </div>
            <table>
            <tr>
                <td>Height:</td>
                <td>${filteredPokemons[i].height}</td>
            </tr>
            <tr>
                <td>Weight:</td>
                <td>${filteredPokemons[i].weight}</td>
            </tr>
            <tr>
                <td>Base experience:</td>
                <td>${filteredPokemons[i].base_experience}</td>
            </tr>
            <tr>
                <td>Abilities:</td>
                <td>${abilities}</td>
            </tr>
            </table>
            <div class="pokemon-detail-buttons">
                <button id="button-detail-previous" class="hidden" onclick="showPreviousDetailPokemon()">previous</button>
                <button id="button-detail-next" onclick="showNextDetailPokemon()">next</button>
            </div>
        </div>
    `;
}