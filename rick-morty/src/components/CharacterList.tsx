import React from 'react';
import Card from './Card';

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
}

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;
