const disjuntores = [
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
  ];
let totaldisjuntores = []

for(const [indice, valor] of disjuntores.entries()){
    if(valor === true) {
        totaldisjuntores.push(indice)
    }
}
    console.log(totaldisjuntores)