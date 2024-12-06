import { useState } from "react";
import "./App.css";
import Card from "./components/card";
import { startGame } from "./utils/function";
import { useEffect } from "react";
import bgBatle from "./assets/pokemongym.png";
import bgInicio from "./assets/galar.png";
/*componente card(que contenga vida,nivel,nombre,tipo,img,color,moves,isplayer) jugador y pc
directorio utils(funcionatacar,stargame,endgame,posegame,calculo de efectividad,calculo de daño
elegir pokemon random,calculo de nivel random,calculo de vida dendiendo lvl) con pokemodata y funciones

 */
function App() {
  const [player, setPlayer] = useState(undefined);
  const [pc, setPc] = useState(undefined);
  const [isPlaying, setPlaying] = useState(false);
  useEffect(() => {
    let jugadores = startGame();
    setPlayer(jugadores[0]);
    setPc(jugadores[1]);
  }, []);

  function damageDealt() {
    let playerDamage = attack(player, pc);
    let indexMove = Math.floor(Math.random() * player.moves.length);
    let move = player.moves[indexMove];
    let log = `de Jugador ha utilizado ${move}`;
    setAttacker(player);
    setLog(log);

    setComputer({
      ...pc,
      vida: Math.floor(pc.vida - playerDamage),
    });
    setTimeout(() => {
      let computerDamage = attack(pc, player);
      let pcIndexMove = Math.floor(Math.random() * player.moves.length);
      let pcMove = pc.moves[pcIndexMove];
      let pclog = `de Pc ha utilizado ${pcMove}`;
      setAttacker(pc);
      setLog(pclog);
      setPlayer({ ...player, vida: Math.floor(player.vida - computerDamage) });
    }, 1000);
  }
  return isPlaying ? (
    <div
      className={"w-screen h-screen flex bg-gray-600 border"}
      style={{
        background: `url(${bgBatle})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-1/3">
        <Card pokemon={player} />
      </div>
      <div className="w-1/3">Log</div>
      <div className="w-1/3">
        <Card pokemon={pc} />
      </div>
      <button
        onClick={() => damageDealt()}
        className="w-2/4 text-white "
      >
        Attack
      </button>
    </div>
  ) : (
    <div
      className={
        "w-screen h-screen flex items-center justify-center bg-gray-600"
      }
      style={{
        background: `url(${bgInicio})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        className="border border-white rounded-xl px-4 py-2 text-lg font-medium bg-red-500 text-wrap text-white"
        onClick={() => setPlaying(true)}
      >
        start
      </button>
    </div>
  );
}

export default App;
