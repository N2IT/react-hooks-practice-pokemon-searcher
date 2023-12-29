import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  return (
    // <Card.Group itemsPerRow={3}>
      
    //   {/* <h1>Hello From Pokemon Collection</h1> */}
      
    // </Card.Group>
    <PokemonCard key={pokemon.id} pokemon={pokemon} />
  );
}

export default PokemonCollection;
