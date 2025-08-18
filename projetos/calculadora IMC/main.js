const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado')

form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const altura = form.querySelector('.altura').value;
    const peso = form.querySelector('.peso').value;

    const imc = (peso / altura ** 2)
    console.log(imc)

    if (imc >= 0 && imc <= 18, 5) {
    console.log("Abaixo do peso")
} else if (imc >= 18, 5 && imc <= 24, 9) {
    console.log("Peso normal")
} else if (imc >= 25, 0 && imc <= 29, 9) {
    console.log("Sobrepeso")
}
else if (imc >= 30,0 && imc <= 34,9) {
    console.log("Obesidade grau 1")
}
else if (imc >= 35,0 && imc <= 39,9) {
    console.log("Obesidade grau 2")
}
else if (imc >= 40) {
    console.log("Obesidade grau 3")
}
else {
    console.log("medida errada")
}


resultado.innerHTML += `<p>${imc}</p>`;
});





