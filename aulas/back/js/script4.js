//OPERADORES NOT AND OR
// OPERADOR AND(&&)
// para geral true, todas as contições devem ser verdadeoiras (true)
/*
const temDiheiro = true;
const estaSol = false;
const tenhoTempo = true;

const vouSair = temDiheiro && estaSol && tenhoTempo
console.log(vouSair)*/

//OPERADOR OR(||)
//se pelo menos uma das condiçoes for verdadeira retouna verdade (true)
const temDiheiro = true;
const estaSol = false;

const vouSair = temDiheiro || estaSol
console.log(vouSair)

//OPERADOR NOT(!) INVERTE O VALOR BOLEANO
const estaChovendo = true;
console.log(estaChovendo);

//dupla negação (!!)
console.log(!!123);
console.log(!!"texto");
console.log(!!"");
console.log(!!0);

//EXEMPLO DE USO DUPLA NEGAÇÃO (!!) false 
let email = ""
if(!!email){
    console.log("email preenchido")
}else {
    console.log("campo de email vazio")
}
//EXEMPLO DE USO DUPLA NEGAÇÃO (!!) true
email = "text@gmail.com"
if(!!email){
    console.log("email preenchido")
}else {
    console.log("campo de email vazio")
}

/* 1° not 2° and 3° or  tem que resolver primeiro o not em segundo o and e por ultimo o or em "()" se resolve primeiro */













