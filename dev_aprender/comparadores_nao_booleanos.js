// falsy - todos os valores que são:
// undefined, null, 0 , false, '', NaN - not a number

// || significa OU

// No OU ele precisa encontrar apenas 1 valor truthy pra parar de fazer a comparação

let corPersonalizada = 'rosa';
let corPadrao = 'cinza';
let corPerfil = corPadrao || corPersonalizada;

console.log(corPerfil);