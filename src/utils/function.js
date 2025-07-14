import { pokemons } from "../utils/data";

function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function startGame() {
  const random = randomize(0, pokemons.length - 1);
  const random2 = randomize(0, pokemons.length - 1);

  let pokePlayer = pokemons[random];
  let pokePc = pokemons[random2];

  let levelPlayer = randomize(1, 10);
  let levelPc = randomize(1, 10);

  let vidaPlayer = levelPlayer * 1000;
  let vidaPc = levelPc * 1000;

  let player = { ...pokePlayer, vida: vidaPlayer, level: levelPlayer, isPlayer: true };
  let pc = { ...pokePc, vida: vidaPc, level: levelPc, isPlayer: false };

  return [player, pc];
}

export function efectividad(attType, defType) {
  if (attType === "agua" && defType === "fuego") return 2;
  if (attType === "fuego" && defType === "roca") return 0.5;
  if (attType === "roca" && defType === "electrico") return 2;
  if (attType === "electrico" && defType === "agua") return 2;
  return 1;
}

export function suerte() {
  let rando = Math.random();
  if (rando < 0.33) return 3;
  return 1;
}

export function ataque(attacker, defender) {
  const suerte1 = suerte();
  const efectividad1 = efectividad(attacker.type, defender.type);
  const danho = Math.floor((50 * attacker.level / defender.level) * efectividad1 * suerte1);
  return danho;
}

