const original = [5, 7, 13, 17, 26, 34, 118, 245];
let novoArray = []
for (let resultado of original) {
    if(resultado > 10 && resultado < 20) {
        novoArray.push(resultado)
    } else if (resultado > 100) {
        novoArray.push(resultado)
    }
 
}

console.log(novoArray)