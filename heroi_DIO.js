let nomeHeroi = "RobPeep";
let XP = 10999;

if (XP < 1000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Ferro");
} 
else if (XP >= 1000 && XP < 2000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Bronze");
} 
else if (XP >= 2000 && XP < 5000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Prata");
} 
else if (XP >= 5000 && XP < 7000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Ouro");
} 
else if (XP >= 7000 && XP < 8000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Platina");
} 
else if (XP >= 8000 && XP < 9000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Ascendente");
} 
else if (XP >= 9000 && XP < 10000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Imortal");
} 
else {
  console.log("O Herói " + nomeHeroi + " está no nível de Radiante");
}
