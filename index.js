const prompt = require('prompt-sync')();

const { criar, atualizar, listar, remover, calcular } = require("./CRUD.js");

while (true) {
    console.log("\nEscolha uma opção: \n1. Adicionar aluno \n2. Remover aluno \n3. Atualizar aluno \n4. Listar aluno \n5. Sair \n6. Contar alunos maiores e menores de idade");

    const opcao = prompt("Digite o número da opção: ");

    switch (opcao) {
        case '1':
            criar();
            break;
        case '2':
            remover();
            break;
        case '3':
            atualizar();
            break;
        case '4':
            listar();
            break;
        case '5':
            console.log("Saindo...");
            return;
        case '6':
            calcular();
            break;
        default:
            console.log("Opção inválida!");
    }
}