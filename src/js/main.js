const pokemonSec = document.getElementById('pokemonList')
const loadMorePokemons = document.getElementById('loadMore')
const maxRecords = 152
const limit = 12
let offset = 0

function loadMorePokemonItems(offset,limit){



    pokeApi.getPokemons(offset,limit).then((pokemonList=[]) => {    
       const newHtml = pokemonList.map((pokemon)=>`
         <div class="pokemon_fundo">
                        <div class="pokemon">
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                            <div class="pokemon_title">
                            <p class="number">#000${pokemon.number}</p>
                            <p class="name">${pokemon.name}</p>
                            </div>
                        <div class="pokemon_details">
                        ${pokemon.types.map((type) => `<p class="btn ${type}">${type}</p>`).join('')}
                        </div>            
                     </div>    
                     `).join('')
       pokemonSec.innerHTML += newHtml
    })
    
}
loadMorePokemonItems(offset,limit)

loadMorePokemons.addEventListener('click',()=>{
    offset += limit
    const qtdRecordsNexPage = offset + limit
    if(qtdRecordsNexPage >= maxRecords ){
      
        const newLimit = maxRecords - offset
        loadMorePokemonItems(offset,newLimit)    
        loadMorePokemons.parentElement.removeChild(loadMorePokemons)
    }else{
        loadMorePokemonItems(offset,limit)
    }
})




// function convertPokemonTypes(pokemonTypes){
//     return pokemonTypes.map((typeSlot) => `<p class="btn_one btn">${typeSlot.type.name}</p>`)
// }
// const listItems = []    
// for(let i = 0; i < pokemonList.length; i++){
    //     const pokemon = pokemonList[i]
    //     listItems.push(convertPokemonTohtml(pokemon))
    //     pokemonSec.innerHTML += convertPokemonTohtml(pokemon)    
    // }
    // console.log(listItems)
    
