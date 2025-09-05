//REFERENCIA DOS ELEMENTOS HTML
const paisInput = document.getElementById("paisInput")
const buscarBtn = document.getElementById("buscarBtn")
const container = document.getElementById("container")

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        buscarBtn.click()
    }
})

//ADICIONAR UM "OUVINTE" AO EVENTO CLIQUE DO BOTÃO
buscarBtn.addEventListener('click', () => {
    const nomePais = paisInput.value.trim();

    if (nomePais === '') {
        alert("Digite o nome do país");
        return;
    }

    const url = `https://restcountries.com/v3.1/translation/${nomePais}`

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(" País não encontrado");
            };


            return response.json();
        })
        .then(data => {
            const pais = data[0]
        
            const moeda = Object.values(pais.currencies)[0].name
        
            container.innerHTML = `
                <h2>${pais.translations.por.common}</h2>
                <img src="${pais.flags.svg}" width="150">
                <p><strong>Capital:</strong> ${pais.capital[0]}</p>
                <p><strong>População:</strong> ${pais.population.toLocaleString()}</p>
                <p><strong>Moeda:</strong> ${moeda}</p>
            `
        })
        .catch(erro => {
            console.error(erro)
            container.innerHTML = `<p style="color: red;"> Erro: ${erro.message}</p>`;
        })
});