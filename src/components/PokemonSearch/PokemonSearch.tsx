import React, { useState } from 'react';
import './PokemonSearch.css';

interface PokemonSearchProps {
  onSearch: (query: string) => void;
}

const PokemonSearch: React.FC<PokemonSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (event.target.value.length > 1) {
      onSearch(event.target.value);
    } else {
      onSearch('');
    }
  };

  return (
    <input
      type="text"
      className='entrada-busqueda'
      placeholder="Filtra pokemons por nombre..."
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
};

export default PokemonSearch;
