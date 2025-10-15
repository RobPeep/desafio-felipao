let nomeHeroi = "RobPeep"

let XP = 3000

if(XP < 1000){
    console.log("O Herói " + nomeHeroi + ", está no nivel de Ferro")
}
else if(XP > 1001 / XP < 2000){
    console.log("O Herói " + nomeHeroi + ", está no nivel de Bronze")
}
else if(XP > 2001/ XP < 5000){
    console.log("O Herói " + nomeHeroi + ", está no nivel de Prata")
}
else if(XP > 5001/ XP < 7000){
    console.log("O Herói " + nomeHeroi + ", está no nivel de Ouro")
}
else if(XP > 7001 / XP < 8000){
    console.log("O Herói " + nomeHeroi + ", está no nivel de Platina")
}
else if(XP > 8001 / XP < 9000){
    console.log("O Herói " + nomeHeroi + ", está no nivel de Ascendente")
}
else if(XP > 9001 / XP < 10000){
    console.log("O Herói " + nomeHeroi + ", está no nivel de Imortal")
}
else {console.log("O Herói " + nomeHeroi + ", está no nivel de Radiante")}