/* o lado */


const listaDeCompras = {
    "nome": "lista de compras",
    "data": "21/08/2025",
    "itens": [
        {
            "item": "maça",
            "quantidade": 5
        },
        {
            "item": "pão",
            "quantidade": 10
        }
    ]
}

console.log(listaDeCompras.data)
console.log(listaDeCompras.nome)
console.log(listaDeCompras.itens[0].item)

//CONSTRUA UM OBJETO CHAMADO DE PERFILUSUARIO
//PROPRIEDADES DEVEM SER, NOME, DATA DE NASCIMENTO, EMAIL, HOBBIES
//A PROPRIEDADES HOBBIES DEVE 
//TER 5 OBJETOS CADA UM COM UM HOBBIE E UM DIA DA SEMANA 

const perfilUsuario = {
    "nome": "matheus",
    "data de nascimento": "19/07/2008",
    "email": "teste@gmail.com",
    "hobbies": [
        {
            "hobbie": "desenhar",
            "dia da semana": "segunda"
        },
        {
            "hobbie": "jogar",
            "dia da semana": "terça"
        },
        {
            "hobbie": "musica",
            "dia da semana": "quarta"
        },
        {
            "hobbie": "futeboll",
            "dia da semana": "quinta"
        },
        {
            "hobbie": "lutar",
            "dia da semana": "sexta"
        },
    ]
}

console.log(perfilUsuario.hobbies[4].hobbie)

//CRIE UM OBJETO CATALOGO COM A PROPRIEDADE
// "LIVROS" E 3 OBJETOS COM AS PROPRIEDADES "TITULO", "AUTOR", "ANO(NUMBER)", "DISPONIVEL(BOLEANO)"

const catalogo = {
    "livros": [
        {
        "titulo": "A cartomante",
        "autor": "machado de asis",
        "ano": 1884,
        "disponivel": false
        },
        {
            "titulo": "O morro dos ventos uivantes",
            "autor": "emily bront",
            "ano":1847,
            "disponivel": true
        }
     ]
}



