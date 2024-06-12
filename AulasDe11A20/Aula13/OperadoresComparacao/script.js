
var idade = 18;
if(idade >= 18){
console.log("Usuario ja pode fazer a carteira de habilitacao");
}

if(idade <= 17){
console.log("Usuario nao pode fazer a carteira de habilitacao");
}

// o 0 e considerado false
// o 1 e considerado true

var possuiCarro = 0;

if(possuiCarro){ // posuiCarro=0 logo e false passa direto pelo if
console.log("Usuario pode andar de carro");
}


var nome = "Diego";

if(nome == "Diego"){
console.log("O seu nome e Diego");
}

var nome = "Pedro";
if(nome != "Diego"){
console.log("O seu nao nome e Diego");
}


if(10<20){
console.log("10 e menor q 20");
}
if(20>10){
console.log("20 e maior q 10");
}

if(10>20){ //nao acontece nada pois 10 nao e maior q 20(false)
console.log("10 e maior q 20");
}

