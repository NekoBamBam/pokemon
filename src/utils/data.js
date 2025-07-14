import pikachuImg from "../assets/pikachu.png"
import squirteImg from "../assets/squirtle.png"
import charmanderImg from "../assets/charmander.png"
import onixImg from "../assets/onix.png"
import teemoImg from "../assets/teemo.jpg"

export const pokemons = [
  {
    nombre: "pikachu",
    type: "electrico",
    img: pikachuImg,
    color: "#FFD700",
    moves: ["Impactrueno", "Chispa", "Rayo"]
  },
  {
    nombre: "squirtle",
    type: "agua",
    img: squirteImg,
    color: "#3B9AE1",
    moves: ["Pistola Agua", "Burbuja", "HidroBomba"]
  },
  {
    nombre: "charmander",
    type: "fuego",
    img: charmanderImg,
    color: "#FF4500",
    moves: ["Ascuas", "Lanzallamas", "Giro Fuego"]
  },
  {
    nombre: "onix",
    type: "roca",
    img: onixImg,
    color: "#A9A9A9",
    moves: ["Placaje", "Roca Afilada", "Terremoto"]
  },
  {
    nombre: "teemo",
    type: "beemo",
    img: teemoImg,
    color: "#00FF7F",
    moves: ["Dardo Venenoso", "Seta Mortal", "Sprint"]
  }
];
