
//Criando um objeto
var obj = {
    nome: "Diego",
    idade: 29,
    profissao: "Programador",
    estaTrabalhando: true,
};
    
console.log(obj);
console.log(typeof obj);


//Acessando uma propriedade dentro do Obj
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);
console.log(obj.estaTrabalhando);


console.log("O meu nome e: " + obj.nome);

//Mudar o valor de uma propriedade
obj.nome = "Pedro";
console.log(obj);

//Criar propriedades no objeto
obj.graduacao = true;
console.log(obj);
    
    

