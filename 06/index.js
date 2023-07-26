const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0;

for(let resultado of numeros) {
    if (resultado % 2 === 0) {
        soma = soma + resultado
    }
}

console.log(soma)
