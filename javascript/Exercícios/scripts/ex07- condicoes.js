let a = 3
console.log(a)
if(a > 25) {
    if(a == 102) {
        console.log(`Número legal`)
    } else {
        console.log(`Meh`)
    }
    console.log(`Número maior que 25`)
} else {
    console.log(`Número menor que 25`)
}
console.log(`-----------------------------------`)
let b = Math.floor(Math.random() * 6 + 1)
switch(a) {
    case 1:
        console.log(`Você tirou ${a} no d6. Que droga!`)
        break
    case 2:
        console.log(`Você tirou ${a} no d6. Pelo menos não é 1!`)
        break
    case 3:
        console.log(`Você tirou ${a} no d6. Podia ser melhor, né!?`)
        break
    case 4:
        console.log(`Você tirou ${a} no d6. Ok, é um bom número!`)
        break
    case 5:
        console.log(`Você tirou ${a} no d6. Muito bom!`)
        break
    case 6:
        console.log(`Você tirou ${a} no d6. Tirou o número máximo!`)
        break
}




