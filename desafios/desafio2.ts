interface Pessoa { 
    nome: string,
    idade: number,
    profissao: string
};

function criarPessoa(nome: string, idade: number, profissao: string): Pessoa {
    let pessoa = {} as Pessoa;

    pessoa.nome = nome;
    pessoa.idade = idade;
    pessoa.profissao = profissao;

    return pessoa;
};

let pessoa1 = criarPessoa("maria", 29, "atriz");
let pessoa2 = criarPessoa("roberto", 19, "padeiro");
let pessoa3 = criarPessoa("laura", 32, "atriz");
let pessoa4 = criarPessoa("carlos", 19, "padeiro");
