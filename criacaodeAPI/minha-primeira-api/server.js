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

app.get('/usuarios', (req, res) => {
    res.json(usuarios)
})

app.get('/', (req, res) => {
    res.send("TESTE")
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuario = usuarios.find(u => u.id == id);

    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({ mensagem: "usuario não encontrado" })
    }

})

app.get('/usuarios/nome/:nome', (req, res) => {
    const buscaNome = req.params.nome.toLowerCase();
    const resultados = usuarios.filter(n => n.nome.toLowerCase().includes(buscaNome));
    if (resultados.length > 0) {
        res.json(resultados);
    } else {
        res.status(404).json({ mensagem: "usuario não encontrado" });
    }
});

app.get('/usuarios/:idade', (req, res) => {
    const buscaIdade = Number(req.params.idade);
    const resultados = usuarios.filter(n => n.idade === buscaIdade);

    if (resultados.length > 0) {
        res.json(resultados);
    } else {
        res.status(404).json({ mensagem: "usuario não encontrado" });
    }
});

app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    usuarios = usuarios.filter(u => u.id != id);

    res.json({ mensagem: "usuario removido com sucesso" });
});
app.post('/usuarios', (req, res) => {
    const ultimoId = usuarios.reduce((max, usuario) => Math.max(max, usuario.id), 0);

    const novoUsuario = {
        id: ultimoId + 1,
        nome: req.body.nome,
        idade: req.body.idade
    };
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});

app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const idade = req.body.idade;

    const usuario = usuarios.find(u => u.id == id);

    if (!usuario) {
        return res.status(404).json({ mensagem: "Usuario Não Encontrado" });
    }

    usuario.nome = nome || usuario.nome;
    usuario.idade = idade || usuario.idade;
    res.json(usuario);
});


//Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta${PORT}`)
})

