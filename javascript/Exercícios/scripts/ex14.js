let b = [23, 54, 1, 2, 45432, 0, 22345467, 12, 1232]


console.log(b)
console.log(`O vetor tem ${b.length} elementos`)
console.log(`O primeiro valor do vetor é ${b[0]}`)
console.log(`Se ordenássemos o vetor em ordem crescente, ele ficaria assim: ${b.sort()}`)

/* Iterando sobre cada um dos elementos do nosso vetor: MODO 1*/
for(let i=0; i<b.length;i++) {
    console.log(`A posição ${i} tem o valor ${b[i]}`)
}

/* Iterando sobre cada um dos elementos do nosso vetor: MODO 2:*/
for(let indice in b) {
    console.log(`A posição ${indice} tem o valor ${b[indice]}`)
}






