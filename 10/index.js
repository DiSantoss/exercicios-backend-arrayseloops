const numeros = [8, 13, 4, 1];

let maiorDiferenca = 0;

for (const resultado1 of numeros) {
    for (const resultado2 of numeros) {
        const diferenca = Math.abs(resultado1 - resultado2);
        if (diferenca > maiorDiferenca) {
          maiorDiferenca = diferenca;
        }
      }
}

console.log("Maior diferença:", maiorDiferenca); 


/**
 * gostaria de entender melhor como funciona esse for dentro do for
 */