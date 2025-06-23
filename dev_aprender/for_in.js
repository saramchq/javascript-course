const pessoa = {
    nome: 'Sara',
    idade: '32'
}

for(let key in pessoa) {
    console.log(key, pessoa.nome);
}

const cores = ['Rosa', 'Preto', 'Branco'];
    for (let indice in cores){
        console.log(indice, cores[indice])
    }