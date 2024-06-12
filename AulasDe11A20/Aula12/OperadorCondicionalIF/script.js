

console.log("testando Antes do if");


if(true){
console.log("testando o if com true");
}

if(false){
console.log("testando o if com false");
}

console.log("testando Depois do if");



var idade = 19;

if(idade>18){
console.log("Pode fazer carteira de habilitacao");
}

var idade = 16;

if(idade>18){ //idade recebe false entao nao acontece nada
console.log("Pode fazer carteira de habilitacao");
}


var idade = 19;
var idadeMinima = 18;

if(idade>idadeMinima){
console.log("Pode fazer carteira de habilitacao");
}
