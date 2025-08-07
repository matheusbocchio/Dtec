const pessoa = {
    nome: "maria",
    sobrenome: "xavier",
    idade: 50
}
//ACESSAR O ATRIBUTO 
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)

// FUNÇÃO FABRICA
function criarPessoas(nome, sobrenome, idade) {
    return{
        nome,
        sobrenome,
        idade
    };
};

const pessoa2 = criarPessoas("maria", "silva", 25)
const pessoa3 = criarPessoas("joão", "roberto", 20)
console.log(pessoa2.nome)
console.log(pessoa3.idade)










