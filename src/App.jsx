import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
import { startGame, ataque } from "./utils/function";
import bgBatle from "./assets/pokemongym.png";
import bgInicio from "./assets/galar.png";

function App() {
  const [player, setPlayer] = useState(undefined);
  const [pc, setPc] = useState(undefined);
  const [isPlaying, setPlaying] = useState(false);
  const [log, setLog] = useState([]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    let jugadores = startGame();
    setPlayer(jugadores[0]);
    setPc(jugadores[1]);
  }, []);

  useEffect(() => {
    if (player && player.vida <= 0) {
      setWinner("PC");
      setPlaying(false);
      setLog((prev) => [...prev, "GAME OVER"]);
    } else if (pc && pc.vida <= 0) {
      setWinner("Jugador");
      setPlaying(false);
      setLog((prev) => [...prev, "GAME OVER"]);
    }
  }, [player, pc]);

  // 👉 ESTE es el if que tenés que agregar acá
  if (winner) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-6">
          ¡{winner} ganó la partida!
        </h1>
        <button
          className="border border-white rounded-xl px-4 py-2 text-lg font-medium bg-red-500 text-white"
          onClick={() => {
            let jugadores = startGame();
            setPlayer(jugadores[0]);
            setPc(jugadores[1]);
            setLog([]);
            setWinner(null);
            setPlaying(true);
          }}
        >
          Volver a Jugar
        </button>
      </div>
    );
  }

  function damageDealt() {
    let playerDamage = ataque(player, pc);
    let move = player.moves[Math.floor(Math.random() * player.moves.length)];
    let logText = `Jugador usó ${move} y causó ${playerDamage} de daño.`;
    setPc((prevPc) => ({ ...prevPc, vida: Math.max(prevPc.vida - playerDamage, 0) }));
    setLog((prev) => [...prev, logText]);

    setTimeout(() => {
      let pcDamage = ataque(pc, player);
      let pcMove = pc.moves[Math.floor(Math.random() * pc.moves.length)];
      let pcLogText = `PC usó ${pcMove} y causó ${pcDamage} de daño.`;
      setPlayer((prevPlayer) => ({ ...prevPlayer, vida: Math.max(prevPlayer.vida - pcDamage, 0) }));
      setLog((prev) => [...prev, pcLogText]);
    }, 1000);
  }

  return isPlaying ? (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{
        background: `url(${bgBatle})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full p-4 gap-4">
        <Card pokemon={player} />
        <div className="flex flex-col bg-white p-2 rounded overflow-y-auto h-64 w-1/3">
          <h2 className="font-bold">Registro</h2>
          {log.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <Card pokemon={pc} />
      </div>

      <button
        onClick={() => damageDealt()}
        className="border border-white rounded-xl px-4 py-2 text-lg font-medium bg-red-500 text-white mt-4"
      >
        Atacar
      </button>
    </div>
  ) : (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{
        background: `url(${bgInicio})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        className="border border-white rounded-xl px-4 py-2 text-lg font-medium bg-red-500 text-white"
        onClick={() => setPlaying(true)}
      >
        Comenzar partida
      </button>
    </div>
  );
}

export default App;
