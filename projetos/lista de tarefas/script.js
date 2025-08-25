function adicionarTarefa(){
    const input = document.getElementById("novaTarefa");
    const texto = input.value.trim();
    if(texto === ""){
        return;
    }/*ou if(texto === "") return;*/

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = texto;
    p.className = "tarefa";
    li.appendChild(p);

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "remover";
    btnRemover.className = "remove";
    btnRemover.onclick = function() {
        li.remove();
    };

    li.appendChild(btnRemover);

    li.onclick = function(){
        li.classList.toggle("feito")
    }

    document.getElementById("Lista").appendChild(li);

    input.value ="";
};