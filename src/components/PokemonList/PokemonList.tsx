import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonList.css';
import PokemonSearch from './../PokemonSearch/PokemonSearch';
import PokemonDetails from './../PokemonDetails/PokemonDetails';

interface Pokemon {
  id: number;
  nombre: string;
  altura: string;
  peso: string;
  habitat: string;
  tasa_crecimiento: string;
  tasa_captura: string;
  imagenes: { url: string }[];
  pokemon_tipo: { id: number; nombre: string }[];
  pokemon_movimiento: { id: number; nombre: string }[];
  pokemon_habilidad: { id: number; nombre: string }[];
  color: { id: number; nombre: string };
  pre_evo: { id: number; nombre: string } | null;
}

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/pokemons/?limit=150', {
          headers: {
            Authorization: 'Bearer Axx190zFQ7dsf***AYE24u5XZA',
          },
        });
        setPokemons(response.data);
        setFilteredPokemons(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = async (pokemonId: number) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/pokemons/${pokemonId}`, {
        headers: {
          Authorization: 'Bearer Axx190zFQ7dsf***AYE24u5XZA',
        },
      });
      setSelectedPokemon(response.data);
    } catch (error) {
      console.error('Error fetching selected Pokemon data:', error);
    }
  };

  const handleBackClick = () => {
    setSelectedPokemon(null);
    setFilteredPokemons(pokemons);
  };

  const handleSearch = (query: string) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="pokemon-list-container">
      {!selectedPokemon && <PokemonSearch onSearch={handleSearch} />}
      {selectedPokemon ? (
        <PokemonDetails pokemonDetail={selectedPokemon} onBack={handleBackClick} />
      ) : (
        <div className="pokemon-cards-container">
          {filteredPokemons.map((pokemon) => (
            <div key={pokemon.id} className="pokemon-card" onClick={() => handleCardClick(pokemon.id)}>
              <img src={pokemon.imagenes[0].url} alt={pokemon.nombre} />
              <div className="top-left">
                <span className="id-text">ID / {pokemon.id}</span>
              </div>
              <div className="bottom-section">
                <p className="pokemon-nombre">{pokemon.nombre}</p>
                <p className="tipos-text">
                  <span className="tipos">
                    {pokemon.pokemon_tipo.map((tipo) => (
                      <span key={tipo.id} className="tipo">
                        {tipo.nombre}
                      </span>
                    ))}
                  </span>
                </p>
                {pokemon.pre_evo && (
                  <div className="pre-evolucion">
                    <p className="principio_pre_evo">Evoluciona de: </p>
                    <span>{pokemon.pre_evo.nombre}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
