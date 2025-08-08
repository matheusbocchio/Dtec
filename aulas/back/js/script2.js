/*const pessoa = {
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
*/

function criarCachorro(nome, idade){
    return{
        nome,
        idade,

        aniversario(){
            this.idade += 1

        }
    }
};

const cachorro1 = criarCachorro("bob", 8)
console.log(cachorro1.idade)
cachorro1.aniversario()
console.log(cachorro1.idade)








