import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {
  const [ name, setName ] = useState("")
  const [ hp, setHp ] = useState(0)
  const [ frontImage, setFrontImage ] = useState("")
  const [ backImage, setBackImage ] = useState("")

  const newPokemonData = {
    id: "",
    name: name,
    hp: hp,
    sprites: {
      front: frontImage,
      back: backImage,
    }
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          fetch(`http://localhost:3001/pokemon`, {
          method: 'POST',  
          headers: {
            "Content-Type" : "application/json"
            },
          body: JSON.stringify(newPokemonData),
          })
          .then((res) => res.json())
          .then(() => addNewPokemon(newPokemonData))
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" value={name} onChange={(e) => setName(e.target.value.toLowerCase())} placeholder="Name" name="name" />
          <Form.Input fluid label="hp" value={hp} onChange={(e) => setHp(e.target.value)} placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontImage}
            onChange={((e) => setFrontImage(e.target.value))}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backImage}
            onChange={((e) => setBackImage(e.target.value))}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
