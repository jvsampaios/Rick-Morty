import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Card.css';

interface Character {
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

const Card: React.FC<{ character: Character }> = ({ character }) => {
  const [locationInfo, setLocationInfo] = useState<React.ReactNode>('');
  const [originInfo, setOriginInfo] = useState<React.ReactNode>('');

  useEffect(() => {
    const fetchLocationInfo = async (url: string, infoSetter: React.Dispatch<React.SetStateAction<React.ReactNode>>) => {
      try {
        const response = await axios.get(url);
        const { name, dimension, type, residents } = response.data;
        const residentsCount = residents.length;

        infoSetter(
          <span>
            <strong>{name}</strong> {dimension}, {type}, {residentsCount} inhabitants
          </span>
        );
      } catch (error) {
        console.error(`Não conseguimos achar a informação. Aqui está o erro: ${error}`);
      }
    };

    if (character.location.name !== 'unknown') {
      fetchLocationInfo(character.location.url, setLocationInfo);
    } else {
      setLocationInfo(<strong>unknown</strong>);
    }

    if (character.origin.name !== 'unknown') {
      fetchLocationInfo(character.origin.url, setOriginInfo);
    } else {
      setOriginInfo(<strong>unknown</strong>);
    }
  }, [character.location.url, character.origin.url, character.location.name, character.origin.name]);

  return (
    <div className="cardContainer">
      <img
        src={character.image}
        alt={character.name}
        className="cardImage"
      />
      <div className="cardContent">
        <h3>{character.name}</h3>
        <p>
          {character.species} - {character.gender}
        </p>
        <p><span className="label"> Location: </span>{locationInfo}</p>
        <p><span className="label"> Origin: </span>{originInfo} </p>
      </div>
    </div>
  );
};

export default Card;
