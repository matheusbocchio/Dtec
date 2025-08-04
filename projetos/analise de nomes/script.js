const nome = prompt('Digite seu nome completo:');
const resultado = document.getElementById('resultado');

    resultado.innerHTML += `<p class="resultado"><strong>Seu nome é:</strong> ${nome}</p>`;
    resultado.innerHTM += `<p class="resultado"><strong>Seu nome tem:</strong> ${nome.length} letras</p>`;
    resultado.innerHTML += `<p class="resultado"><strong>A primeira letra do seu nome é:</strong> ${nome[0]}</p>`;
    resultado.innerHTML += `<p class="resultado"><strong>O índice da primeira ocorrência da letra a é: ${nome.indexOf("a")}</p>`;
    resultado.innerHTML += `<p class="resultado"><strong>O índice da última ocorrência da letra é: ${nome.lastIndexOf("a")}</p>`;
    resultado.innerHTML += `<p class="resultado"><strong>Seu nome em letras maiúsculas: ${nome.toUpperCase()}</p>`;
    resultado.innerHTML += `<p class="resultado"><strong>Seu nome em letras minúsculas: ${nome.toLowerCase()}</p>`;

