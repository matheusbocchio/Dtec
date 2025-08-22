const sim = document.querySelector("#novaTarefa").value;

function adicionarTarefa() {
    let listaDeTarefas = document.querySelector("#Lista");
    let novoLI = document.createElement('li');
    novoLI.textContent
    listaDeTarefas.appendChild(novoLI);

    let elementoInput = document.getElementById('nova tarefa')
     const valorDigitado = elementoInput.value
    console.log(valorDigitado); // Isto mostrará o que o utilizador escreveu
}

