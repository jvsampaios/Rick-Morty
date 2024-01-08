import React from 'react';
import Card from './Card';

const CharacterList = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;