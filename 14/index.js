const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

for (const [indice, valorA] of arrayA.entries()) {
  const valorB = arrayB[indice];
  const menorValor = valorA < valorB ? valorA : valorB;
  console.log(menorValor);
}