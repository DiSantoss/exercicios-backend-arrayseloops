const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];
const maximoPessoasDentro = 4

for(let resultado of filaDeFora) {
    if(filaDeDentro.length <= maximoPessoasDentro) {
        filaDeDentro.push(resultado)
    }
}


 console.log(filaDeDentro)