
var lista = ["laranja", "banana", "uva", "goiba"];

var listaUl = document.createElement("ul");


var body = document.getElementByTagName("body");
console.log(body[0]);


body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName("ul");


console.log(listaNoBody[0]);

for(var i = 0; i < list.length; i++) {

var liFor = document.createelement("li");

var textoLi = document.createTextNode(lista[i]);

liFor.appendChild(textoLi);
listaNoBody[0].appendChild(liFor);

}
