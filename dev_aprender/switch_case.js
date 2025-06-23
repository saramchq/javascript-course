let permissao; // comum, gerente, diretor

switch (permissao) {
    case 'comum':
        console.log('Usuário comum');
        break; // se o usuário já encontrou uma condição então paramos o programa aqui porque nao queremos q ele continue

    case 'gerente':
        console.log('Usuário gerente');
        break;

    case 'diretor':
        console.log('Usuário diretor');
        break;

    default:
        console.log('Usuário não reconhecido!'); // o default é usado caso não seja nenhuma das outras opções
}