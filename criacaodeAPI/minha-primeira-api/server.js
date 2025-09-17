//Iportação do Express
const express = require('express');
//Iportação do cors
const cors = require('cors');

//Criar a Aplicação
const app = express();

//Permitir trabalhar com JSON
app.use(express.json());
//Permitir trabalhar com cors
app.use(cors());

//Porta aonde a API vai rodar
const PORT = 3000;



let usuarios = [
    { id: 1, nome: "Ana", idade: 25 },
    { id: 2, nome: "Carlos", idade: 30 },
    { id: 3, nome: "Maria", idade: 22 },
    { id: 4, nome: "Maria", idade: 25 },
    { id: 5, nome: "José Carlos", idade: 35 },
]

app.get('/usuarios', (require, response) => {
    response.json(usuarios)
})

app.get('/', (requeire, response) => {
    response.send("TESTE")
})

app.get('/usuarios/:id', (require, response) => {
    const id = require.params.id;
    const usuario = usuarios.find(u => u.id == id);

    if (usuario) {
        response.json(usuario)
    } else {
        response.status(404).json({ mensagem: "usuario não encontrado" })
    }

})

app.get('/usuarios/nome/:nome', (require, response) => {
    const buscaNome = require.params.nome.toLocaleLowerCase()
    const resultados = usuarios.filter(n => n.nome.toLocaleLowerCase().includes(buscaNome))
y
    if (resultados.length > 0) {
        response.json(resultados)
    } else {
        response.status(404).json({ mensagem: "usuario não encontrado" })
    }

})

app.get('/usuarios/:idade', (require, response) => {
    const buscaIdade = Number(require.params.idade)
    const resultados = usuarios.filter(n => n.idade === buscaIdade)

    if (resultados.length > 0) {
        response.json(resultados)
    } else {
        response.status(404).json({ mensagem: "usuario não encontrado" })
    }

})

app.delete('/usuarios/:id', (require, response) => {
    const id = require.params.id
    usuarios = usuarios.filter(u => u.id != id);

    response.json({ mensagem: "usuario removido com sucesso" })
})
app.post('/usuarios', (require, response) => {
    const ultimoId = usuarios.reduce((max, usuario) => Math.max(max, usuario.id), 0)

    const novoUsuario = {
        id: ultimoId + 1,
        nome: require.body.nome,
        idade: require.body.idade
    }
    usuarios.push(novoUsuario)
    response.status(201).json(novoUsuario);
})

app.put('/usuarios/:id', (require, response) => {
    const id = require.params.id
    const nome = require.body.nome
    const idade = require.body.idade

    const usuario = usuarios.find(u => u.id == id)

    if (!usuario) {
        return response.status(404).json({ mensagem: "Usuario Não Encontrado" })
    }

    usuario.nome = nome || usuario.nome
    usuario.idade = idade || usuario.idade
    response.json(usuario)
})


//Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta${PORT}`)
})

