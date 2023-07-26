const letras = ["A", "a", "B", "C", "E", "e","e","e"];

for (const resultado of letras) {

    if (resultado === "E" ) {
        console.log(`Opa achamos a letra ${resultado}`)
    } else if (resultado === "e") {
        console.log(`Opa achamos a letra ${resultado}`)
    } else {
        console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
    }
} 

let letra = 0;

for(const resultado of letras) {
    if(resultado === "E") {
      
        letra += 1
    } else if (resultado === "e") {
    
        letra += 1
    } 
}

console.log(`Foram encontradas ${letra} letras "E" ou "e".`)