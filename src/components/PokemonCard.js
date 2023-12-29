import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const { id, name, hp, sprites } = pokemon
  // console.log(sprites.front)
  const [ isSpriteFront, setFrontSprite ] = useState(true)

  function handleImgSwap() {
    setFrontSprite(!isSpriteFront)
  }
  
  return (
    <Card>
      <div>
        <div key={id} className="image">
          {<img onClick={handleImgSwap} src={isSpriteFront ? sprites.front : sprites.back} alt={name} />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
