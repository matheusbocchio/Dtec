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

    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(nomePais)}&format=jsonv2`


    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(" País não encontrado");
            };


            return response.json();
        })
        .then(data => {
            const pais = data[0]


            container.innerHTML = `
                <h2>${pais.display_name}</h2>
                <p><strong>Longitude:</strong> ${pais.lon}</p>
                <p><strong>Latitude:</strong> ${pais.lat}</p> 
            `

            const latitude = pais.lat
            const longitude = pais.lon

            const url2 = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=is_day,temperature_2m`


            fetch(url2)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("pais não encontrado");
                    };

                    return response.json();
                })
                .then(data => {
                    const tempo = data
                    console.log(tempo)

                    let diaNoite = ""

                    if(tempo.current.is_day === 1){
                        diaNoite = "Dia"
                    }else{
                        diaNoite = "Noite"
                    }


                    container.innerHTML += `
                        <p><strong>Temperatura:</strong> ${tempo.current.temperature_2m}°C</p>
                        <h3>${diaNoite}</h3>
                     `

                })
        })


        .catch(erro => {
            console.error(erro)
            container.innerHTML = `<p style="color: red;"> Erro: ${erro.message}</p>`;
        })
});