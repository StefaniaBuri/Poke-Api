function crearPokemon(pokemon){
    let lista = document.getElementById("pokemon-list");
    
     let imagen = lista.querySelectorAll("img");
     
    for(let i = 0; i <imagen.length; i++){
        imagen[i].setAttribute("src", pokemon.sprites.front_default);
    }

     let nombre = lista.getElementsByTagName("p");
     nombre.textContent = pokemon.name;
    }



function buscarPokemon(){
    let name= document.getElementById("nombre").value;
   let url = "https://pokeapi.co/api/v2/pokemon";

   if(name != ""){
    url = `https://pokeapi.co/api/v2/pokemon/${name}`+ name;
    }


    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(function(response){
        response.json()
    

     .then(function(pokemon){
         console.log(pokemon);
        console.log(pokemon.abilities);
        document.getElementById("descripcion").innerHTML += ` 
        Name: ${pokemon.name}, 
        Abilities: ${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name},
        Type:${pokemon.types[0].type.name}`;
       crearPokemon(pokemon)
            
     })
        
    })

    .catch (function(error){
        console.log(error)
    })
}




