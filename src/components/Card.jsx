function Card({ pokemon }) {
  if (!pokemon) return null;

  const vidaPorcentaje = (pokemon.vida / (pokemon.level * 1000)) * 100;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-64">
      <img src={pokemon.img} alt={pokemon.nombre} className="w-32 h-32" />
      <h2 className="text-xl font-bold">{pokemon.nombre}</h2>
      <p className="text-sm text-gray-600">Tipo: {pokemon.type}</p>
      <p className="text-sm text-gray-600">Nivel: {pokemon.level}</p>

      {/* Barra de vida */}
      <div className="w-full bg-gray-300 rounded-full h-4 mt-2 overflow-hidden">
        <div
          className="h-full transition-all duration-500"
          style={{
            width: `${vidaPorcentaje}%`,
            backgroundColor:
              vidaPorcentaje > 60
                ? "#4ade80"
                : vidaPorcentaje > 30
                ? "#facc15"
                : "#f87171",
          }}
        />
      </div>

      <p className="text-sm mt-1">Vida: {pokemon.vida}</p>
    </div>
  );
}

export default Card;
