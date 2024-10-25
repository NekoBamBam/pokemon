function Card({pokemon}) {
  return (
    <div>
      <h2>{pokemon.nombre}</h2>
      <p>{pokemon.type}</p>
      <img src={pokemon.img} alt="pokeimg" />
      

    </div>
  );
}

export default Card;
