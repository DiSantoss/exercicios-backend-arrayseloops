const original = [1, 4, 12, 21, 53, 88, 112];
const resultadooriginal = [];

for(const resultado of original) {
    if(resultado % 2 === 0) {
        resultadooriginal.push(resultado)
       
    }
  
}
console.log(resultadooriginal)