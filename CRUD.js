const prompt = require('prompt-sync')();
const alunos = [];
const validarIndice = (indice) => indice >= 0 && indice < alunos.length;


const modelo = (indice = -1) => {
    const nomeAluno = prompt('Nome do aluno: ');
    const dataNascimento = parseInt(prompt('Ano de nascimento (AAAA): '), 10);
    const curso = prompt('Descrição do curso: ');
    const periodo = prompt('Qual o período: ');
    
    if (
        nomeAluno !== '' &&
        curso !== '' &&
        periodo !== '' &&
        !isNaN(dataNascimento) &&
        dataNascimento >= 1909 &&
        dataNascimento <= 2025
    ) {
        return {
            nomeAluno,
            dataNascimento,
            curso,
            periodo,
        };
    } else {
        console.log('Dados inválidos');
        return undefined;
    }
};

const criar = () => {
    const aluno = modelo();
    if (aluno !== undefined) {
        alunos.push(aluno);
        console.log('Aluno cadastrado com sucesso');
        console.log(alunos);
    }
};

// exercicio 02
const listar = () => {
    if (alunos.length === 0) {
        console.log('Nenhum aluno encontrado ');
        return false;
    } else {
        alunos.forEach((aluno, indice) => {
            console.log(`${indice + 1}.
            Nome do Aluno: ${aluno.nomeAluno}
            Ano de Nascimento:${aluno.dataNascimento}
            Curso: ${aluno.curso}
            Período: ${aluno.periodo}
            `);
        });
        return true;
    }
};

// exercicio 03

const remover = () => {
    if (!listar()) {
        return;
    }
    const indice = parseInt(prompt('Qual índice você deseja remover? '), 10) - 1;
    
    if (validarIndice(indice)) {
        alunos.splice(indice, 1);
        console.log('Aluno removido comsucesso');
    } else {
        console.log('Falha na remoção');
    }
    
    console.log(alunos);
};

//exercicio 04

const atualizar = () => {
    if (!listar()) {
        return;
    }
    
    const indice = parseInt(prompt('Qual o índice que deseja atualizar? '), 10) - 1;
    
    const aluno = modelo(indice);
    
    if (aluno !== undefined && validarIndice(indice)) {
        alunos[indice] = aluno;
        console.log('Aluno atualizado com sucesso');
    } else {
        console.log('Falha na atualização');
    }
};

const idade = function(age)
{
    let now = new Date();
    let year = now.getFullYear();
    
    return year - age;
}

const calcular = () => {
    let maior = 0
    let menor = 0
    alunos.forEach(function(alunos) {
        if(idade(alunos.dataNascimento) >= 18){
            maior++
        }else {
            menor++
        }
    })
    console.log(`${maior} alunos maiores de idade.\n${menor} alunos menores de idade.`)
}

module.exports = {
    criar,
    listar,
    remover,
    atualizar,
    calcular
}