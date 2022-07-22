botao = document.getElementById("MeuBotao")
botao.onclick = function() {
    num = document.getElementById("quantidade").value;
    
    /* while(condicao) {
        execute algo
        execute algo para fazer a condição ser atendida
    } 
    */
    let contagem = 0
    while(contagem <= num) {
        console.log(contagem)
        contagem += 1
    }


    /* do {
        execute algo
        execute algo para fazer a condição ser atendida
    } while(condição) {
    */
    contagem = 0
    do {
        console.log(contagem)
        contagem += 1
    } while(contagem <= num)


    /* for(variável de inicialização;condição;passo) {
        execute algo
    }
    */
    for (var i=0; i<=num; i++) {
        console.log(i)
    }

    
    // break : sai de um loop inteiramente
    // continue : pula UMA iteração de um loop

    i = 0
    while (true) { 
        // Isso é um looping infinito

        console.log(`Passo ${i}`)
        i += 1
        
        if (i > 10) {
            break  // o looping será quebrado aqui
        }
        
    }

    for (let a = 10; a > 0; a -= 1) {
        
        if (a == 7) {
            continue // pularemos essa iteração. Dessa forma, 7 não será escrrito no console
        }

        console.log(`Passo ${a}`)

    }



}