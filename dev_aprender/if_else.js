// dois tipos de condicionais: if..else, switch.. case

// vamos pegar uma hora atual e exibir uma msg diferente de acordo com a hora
//se a hora estiver entre as 06:00 até 12:00: Bom dia!
//se estiver entre 12:00 até 18:00 horas: Boa tarde!
// caso contrário: Boa Noite!

let hora = 10;

if (hora > 6 && hora < 12) {
    console.log("Bom dia!");
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!");
}
else {
    console.log("Boa noite!");
}