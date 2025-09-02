//REFERENCIA DOS ELEMENTOS HTML
const paisInput = document.getElementById("paisInput")
const buscarBtn = document.getElementById("buscarBtn")
const container = document.getElementById("container")

//ADICIONAR UM "OUVINTE" AO EVENTO CLIQUE DO BOTÃO
buscarBtn.addEventListener('click', () => {
    const nomePais = paisInput.value.trim();

    if (nomePais === '') {
        alert("Digite o nome do país");
        return;
    }

    const url = `https://restcountries.com/v3.1/name/${nomePais}`

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const pais = data[0]

            container.innerHTML = `
                <h2>${pais.name.common}</h2>


            `
        });
});