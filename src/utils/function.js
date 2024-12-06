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
  let rando = Math.random();
    if (rando < 0.33) {
        return 3
    }else {
        return 1}
}
export function ataque(att,deff) {
  const suerte1 = suerte()
    const efectividad1 = efectividad(ataque.type , defensa.type)
    const danho = 50 * ataque.level / defensa.level * efectividad1 * suerte1 
    return danho 
}
export function gameOver() {}

export function calculoDamage() {}