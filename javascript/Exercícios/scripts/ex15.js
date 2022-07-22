function eInteiro(num) {
    if (Number.parseInt(num) == num) {
        return true
    } else {
        return false
    }
}

function par_imp(int) {
    if(eInteiro(int)) {
        if(int % 2 == 1) {
            return 'ímpar'
        } else {
            return 'par'
        }
    } else {
        return 'não-inteiro'
    }
}


function fibbonaci(n) {
    var sequencia = [1]
    var soma = 0
    

    
    for (var num = 1; sequencia.length < n; num+=soma ) {
        soma = sequencia[sequencia.length - 1]
        sequencia.push(num)
        }
    
    return sequencia
}

function soma(array) {
    let total = 0

    for(var i in array) {
        total += array[i]
    }
    
    // O CÓDIGO ACIMA TEM O EXATO MESMO RESULTADO QUE: 
    // for (var i = 0; i < array.length; i++) {
    //  total += array[i]
    //}
    
    return total
}



