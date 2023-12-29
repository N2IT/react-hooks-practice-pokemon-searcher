import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [ search, setSearch ] =useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then((res) => res.json())
      .then((pokemon) => console.log(pokemon))
      
  }, [])

  const searchPokemon = pokemons.filter((pokemon) => {
    if(search === ""){
      return pokemon
    } else {
      return pokemon.name.includes(search)
    }
  })

  function onSearchInput(value){
    setSearch(value)
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search search={search} setSearch={setSearch} onSearchInput={onSearchInput} />
      <br />
      {searchPokemon.map((pokemon) => (
        <PokemonCollection key={pokemon.id} pokemon={pokemon} />
      ))}

    </Container>
  );
}

export default PokemonPage;
