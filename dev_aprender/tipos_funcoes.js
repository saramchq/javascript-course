// 2 tipos de função: 
//1º realiza uma tarefa e não devolve nada

function dizerNome(){
    console.log('Sara');
}

dizerNome();
// faz um ccálculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor * 2;
}

//console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5); //posso atribuir o resultado da funçao a uma variavel
console.log(resultado);