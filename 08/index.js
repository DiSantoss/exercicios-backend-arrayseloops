const numeros = [10, 5, 20, 25, 15];
let maiorNumero = numeros[0];

for (const resultado of numeros) {
  if (resultado > maiorNumero) {
    maiorNumero = resultado;
  }
}

console.log(maiorNumero); // Resultado: 25