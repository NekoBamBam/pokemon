import { pokemons } from "./data";

function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function startGame() {
  const random = randomize(0, pokemons.length - 1);
  const random2 = randomize(0, pokemons.length - 1);

  let pokePlayer = pokemons[random]
  let pokePc = pokemons[random2]
  let levelPLayer = randomize[1,10]
  let levelPc = randomize[1,10]
  let vidaPlayer = levelPLayer * 1000
  let vidaPc = levelPc * 1000
  let player = {...pokePlayer, vida:vidaPlayer,level:levelPLayer,isPlayer:true}
  let pc = {...pokePc, vida:vidaPc,level:levelPc,isPlayer:false}

  return [player,pc];
}

export function efectividad(att,deff) {
  if (att == "agua" && deff == "fuego"){
    
 } else  if (att == "fuego" && deff == "roca") {
    
  } else if (att == "roca" && deff == "electrico") {
    
  } else if (att == "electrico" && deff == "agua") {
    
  } else {
    return 0.5}
  
}
export function suerte() {
  
}
export function ataque(att,deff) {
  
}
export function gameOver() {}

export function calculoDamage() {}