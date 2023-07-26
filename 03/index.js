const numeros = [54, 22, 14, 87, 10, 284];

for(let resultado of numeros) {
    if(resultado == 10) {
        console.log(numeros.indexOf(10))
    } else {
        console.log("-1")
    }
}
