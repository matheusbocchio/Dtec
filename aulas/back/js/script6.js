/*const p1 = document.querySelector(".teste").textContent
console.log(p1)

const conteudoP1 = p1.textContent
console.log(conteudoP1)*/


const numero1 = document.querySelector(".num1")
const numero2 = document.querySelector(".num2")
 
//ACESSANDO AS INFORMAÇOES DAS DIVS
const num1 = numero1.textContent
const num2 = numero2.textContent


console.log(num1)
console.log(num2)

//PROCESANDO AS INFORMAÇOES
const soma = Number(num1) + Number(num2)

//SAIDA
//ACESSANDO A DIV QUE MOSTRA O RESULTADO
const resultado = document.querySelector(".resultado")
console.log(resultado)

//INSERINDO O VALOR DA SOMA DA DIV
resultado.innerHTML = `<p>${soma}</p>`



