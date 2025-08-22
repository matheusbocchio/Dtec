//MÉTODO PARA FAZER REQUISIÇÕES
fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data.name)
    })


