try {
    let x = 'AAAAAA'
    if (isNaN(x)) {
        throw `${x} não é um número`
    }
}
catch(erro) {
    console.log(erro)
}