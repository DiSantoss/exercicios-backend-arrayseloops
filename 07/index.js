const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesComA = [];

for (const resultado of nomes) {
  const nomeLowerCase = resultado.toLowerCase();
  if (nomeLowerCase.startsWith("a") || resultado.startsWith("A")) {
    nomesComA.push(resultado);
  }
}

console.log(nomesComA);