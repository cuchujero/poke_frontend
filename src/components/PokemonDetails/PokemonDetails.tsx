// PokemonDetails.tsx

import React from 'react';
import './PokemonDetails.css';

interface PokemonDetailsProps {
  pokemonDetail: {
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
  };
  onBack: () => void;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemonDetail, onBack }) => {
  return (
    <div className="pokemon-details">
      <div className="pokemon-left-side">
        <img src={pokemonDetail.imagenes[0].url} className="pokemonDetail-img" alt={pokemonDetail.nombre} />
        <h2 className="pokemonDetail-nombre">{pokemonDetail.nombre}</h2>
        <button className="boton-volver" onClick={onBack}>
        Volver
        </button>
      </div>
      <div className="pokemon-details-info">

      <span  className="pokemon-titulo"> Caracteristicas: </span>
      <span className='pokemon-caracteristicas'>
          ID: {pokemonDetail.id} | 
          Color principal: {pokemonDetail.color.nombre} |
          Altura: {pokemonDetail.altura} |
          Habitat: {pokemonDetail.habitat} |
          Tasa de crecimiento: {pokemonDetail.tasa_crecimiento} |
          Tasa de captura: {pokemonDetail.tasa_captura}
      </span>
       
      <p></p>
      <span className="pokemon-titulo"> Pre evolucion:  </span>
      {pokemonDetail.pre_evo && (
          <span>{pokemonDetail.pre_evo.nombre}</span>
      )}

      <p></p>
      <span  className="pokemon-titulo"> Tipos: </span>
      <span>
          {pokemonDetail.pokemon_tipo.map((tipo, index) => (
            <span key={tipo.id} className="pokemon-tipo">
              {tipo.nombre}
              {index < pokemonDetail.pokemon_tipo.length - 1 && ' | '}
            </span>
          ))}
      </span>  

      <p></p>

      <span className="pokemon-titulo"> Habilidades: </span>
      <span>
          {pokemonDetail.pokemon_habilidad.map((habilidad, index) => (
            <span key={habilidad.id} className="pokemon-habilidad">
              {habilidad.nombre}
              {index < pokemonDetail.pokemon_habilidad.length - 1 && ' | '}
            </span>
          ))}
      </span>

      <p></p>
            
      <span className="pokemon-titulo"> Movimientos: </span>
      <span className="segundo-titulo">
          {pokemonDetail.pokemon_movimiento.map((movimiento, index) => (
            <span key={movimiento.id} className="pokemon-movimiento">
              {movimiento.nombre}
              {index < pokemonDetail.pokemon_movimiento.length - 1 && ' | '}
            </span>
          ))}
      </span>
       
      </div>
    </div>
  );
};

export default PokemonDetails;