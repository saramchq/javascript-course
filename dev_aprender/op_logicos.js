//operador logico e (&&)
// retorna TRUE se os dois operandos forem true

// console.log(true && true); // so vai retornar true quando os dois forem true

let maiorDeIdade = true;
let possuiCartaDeConducao = true;
let podeAplicar = maiorDeIdade && possuiCartaDeConducao;

console.log(' pode aplicar: ', podeAplicar);

//operador NOT (!)
let candidatoRecusado = !podeAplicar;

console.log('Candidato recusado' , podeAplicar);