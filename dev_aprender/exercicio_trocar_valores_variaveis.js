let a = 'rosa';
let b = 'cinza';

console.log(a);
console.log(b);

let c = a; // foi necessario criar outra variavel para guardar o valor de a porque assim pude criar o valor de b em cima do a sem perder o valor de a porque ja está guardado em c.
a = b;
b = c;

console.log(a);
console.log(b);