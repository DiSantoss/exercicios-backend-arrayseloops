const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let resultado of original) {
    if(resultado % 2 === 0) {
        pares.push(resultado)
    } else {
        impares.push(resultado)
    }
}

console.log(pares)
console.log(impares)



